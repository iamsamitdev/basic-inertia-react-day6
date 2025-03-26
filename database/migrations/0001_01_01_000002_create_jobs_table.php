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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('queue')->index()->comment('คิวของงาน');
            $table->longText('payload')->comment('ข้อมูลของงาน');
            $table->unsignedTinyInteger('attempts')->comment('จำนวนครั้งที่ลองทำงาน');
            $table->unsignedInteger('reserved_at')->nullable()->comment('วันที่ทำงาน');
            $table->unsignedInteger('available_at')->comment('วันที่พร้อมใช้งาน');
            $table->unsignedInteger('created_at')->comment('วันที่สร้างงาน');
        });

        Schema::create('job_batches', function (Blueprint $table) {
            $table->string('id')->primary()->comment('รหัสของการจัดงาน');
            $table->string('name')->comment('ชื่อของการจัดงาน');
            $table->integer('total_jobs')->comment('จำนวนงานทั้งหมด');
            $table->integer('pending_jobs')->comment('จำนวนงานที่ยังไม่ได้ทำ');
            $table->integer('failed_jobs')->comment('จำนวนงานที่ล้มเหลว');
            $table->longText('failed_job_ids')->comment('รหัสของงานที่ล้มเหลว');
            $table->mediumText('options')->nullable()->comment('ตัวเลือกของการจัดงาน');
            $table->integer('cancelled_at')->nullable()->comment('วันที่ยกเลิกการจัดงาน');
            $table->integer('created_at')->comment('วันที่สร้างการจัดงาน');
            $table->integer('finished_at')->nullable()->comment('วันที่สำเร็จการจัดงาน');
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique()->comment('รหัสของงาน');
            $table->text('connection')->comment('การเชื่อมต่อกับฐานข้อมูล');
            $table->text('queue')->comment('คิวของงาน');
            $table->longText('payload')->comment('ข้อมูลของงาน');
            $table->longText('exception')->comment('ข้อมูลของงาน');
            $table->timestamp('failed_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
        Schema::dropIfExists('job_batches');
        Schema::dropIfExists('failed_jobs');
    }
};
