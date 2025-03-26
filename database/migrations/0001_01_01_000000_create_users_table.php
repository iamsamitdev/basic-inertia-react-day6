<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('ชื่อของผู้ใช้');
            $table->string('email')->unique()->comment('อีเมลของผู้ใช้');
            $table->timestamp('email_verified_at')->nullable()->comment('วันที่ยืนยันอีเมล');
            $table->string('password')->comment('รหัสผ่านของผู้ใช้');
            $table->string('position')->nullable()->comment('ตำแหน่งงานของผู้ใช้');
            $table->string('avatar')->nullable()->comment('URL รูปโปรไฟล์ของผู้ใช้');
            $table->boolean('is_team')->default(false)->comment('ใช้ระบุว่าเป็นสมาชิกทีมหรือไม่');
            $table->text('bio')->nullable()->comment('ประวัติโดยย่อของผู้ใช้');
            $table->rememberToken()->comment('รหัสการจำลองการเข้าสู่ระบบ');
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary()->comment('อีเมลของผู้ใช้');
            $table->string('token')->comment('รหัสการรีเซ็ตรหัสผ่าน');
            $table->timestamp('created_at')->nullable()->comment('วันที่สร้างรหัสการรีเซ็ตรหัสผ่าน');
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary()->comment('รหัสของการเซสชั่น');
            $table->foreignId('user_id')->nullable()->index()->comment('รหัสของผู้ใช้');
            $table->string('ip_address', 45)->nullable()->comment('ที่อยู่ IP ของผู้ใช้');
            $table->text('user_agent')->nullable()->comment('ข้อมูลตัวตัวอย่างของผู้ใช้');
            $table->longText('payload')->comment('ข้อมูลการเซสชั่น');
            $table->integer('last_activity')->index()->comment('วันที่สุดท้ายของการเซสชั่น');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
