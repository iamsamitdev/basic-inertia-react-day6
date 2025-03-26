<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // สร้างบัญชี admin (สมาชิกทีม)
        User::create([
            'name' => 'แอดมิน ระบบ',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'position' => 'ผู้ดูแลระบบ',
            'avatar' => 'https://randomuser.me/api/portraits/men/1.jpg',
            'is_team' => true,
            'bio' => 'ผู้ดูแลระบบหลักที่มีประสบการณ์ในการพัฒนาซอฟต์แวร์มากกว่า 10 ปี เชี่ยวชาญด้าน Laravel และ React'
        ]);

        // สร้างสมาชิกทีมอีก 4 คน
        $teamMembers = [
            [
                'name' => 'สมชาย ใจดี',
                'email' => 'somchai@example.com',
                'position' => 'นักพัฒนา Frontend',
                'avatar' => 'https://randomuser.me/api/portraits/men/2.jpg',
                'bio' => 'ชำนาญด้าน React, Vue.js และการออกแบบ UI/UX มีประสบการณ์มากกว่า 5 ปีในการพัฒนาเว็บแอปพลิเคชัน'
            ],
            [
                'name' => 'สมหญิง รักเรียน',
                'email' => 'somying@example.com',
                'position' => 'นักพัฒนา Backend',
                'avatar' => 'https://randomuser.me/api/portraits/women/3.jpg',
                'bio' => 'เชี่ยวชาญด้าน Laravel, PHP และฐานข้อมูล ชอบแก้ปัญหาที่ซับซ้อนและพัฒนาระบบที่มีประสิทธิภาพ'
            ],
            [
                'name' => 'มานะ พากเพียร',
                'email' => 'mana@example.com',
                'position' => 'นักออกแบบกราฟิก',
                'avatar' => 'https://randomuser.me/api/portraits/men/4.jpg',
                'bio' => 'นักออกแบบกราฟิกที่มีความคิดสร้างสรรค์ ชำนาญการใช้ Photoshop, Illustrator และการออกแบบเว็บไซต์'
            ],
            [
                'name' => 'วิภา สุขสันต์',
                'email' => 'wipa@example.com',
                'position' => 'ผู้จัดการโครงการ',
                'avatar' => 'https://randomuser.me/api/portraits/women/5.jpg',
                'bio' => 'ผู้จัดการโครงการมืออาชีพที่มีประสบการณ์กว่า 7 ปี เชี่ยวชาญในการบริหารทีมและวางแผนโครงการให้สำเร็จตามเป้าหมาย'
            ],
        ];

        foreach ($teamMembers as $member) {
            User::create([
                'name' => $member['name'],
                'email' => $member['email'],
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'position' => $member['position'],
                'avatar' => $member['avatar'],
                'is_team' => true,
                'bio' => $member['bio']
            ]);
        }

        // สร้างผู้ใช้ทั่วไปอีก 5 คน
        $regularUsers = [
            [
                'name' => 'ประเสริฐ สุขใจ',
                'email' => 'prasert@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/men/6.jpg',
            ],
            [
                'name' => 'มาลี ดอกไม้',
                'email' => 'malee@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/women/7.jpg',
            ],
            [
                'name' => 'สมศักดิ์ มั่นคง',
                'email' => 'somsak@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/men/8.jpg',
            ],
            [
                'name' => 'นิภา งามเลิศ',
                'email' => 'nipa@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/women/9.jpg',
            ],
            [
                'name' => 'ประทีป แสงสว่าง',
                'email' => 'prateep@example.com',
                'avatar' => 'https://randomuser.me/api/portraits/men/10.jpg',
            ],
        ];

        foreach ($regularUsers as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'avatar' => $user['avatar'],
                'is_team' => false,
            ]);
        }
    }
} 