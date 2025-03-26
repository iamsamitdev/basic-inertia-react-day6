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
        Schema::create('cache', function (Blueprint $table) {
            $table->string('key')->primary()->comment('คีย์ของข้อมูลที่ต้องการเก็บ');
            $table->mediumText('value')->comment('ค่าของข้อมูลที่ต้องการเก็บ');
            $table->integer('expiration')->comment('วันที่หมดอายุของข้อมูล');
        });

        Schema::create('cache_locks', function (Blueprint $table) {
            $table->string('key')->primary()->comment('คีย์ของข้อมูลที่ต้องการเก็บ');
            $table->string('owner')->comment('ผู้ใช้งานที่มีสิทธิ์เข้าถึงข้อมูล');
            $table->integer('expiration')->comment('วันที่หมดอายุของข้อมูล');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cache');
        Schema::dropIfExists('cache_locks');
    }
};
