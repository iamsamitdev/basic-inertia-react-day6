<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\User;

class HomeController extends Controller
{
   /**
    * แสดงหน้าหลัก
    */
    public function welcome()
    {
        // ตัวอย่างตัวแปรเก็บข้อมูลทั่วไปที่จะส่งไปยังหน้า welcome
        $appInfo = [
            'name' => 'Inertia React',
            'version' => '1.0.0',
            'features' => [
                'ความเร็วสูง',
                'ปรับแต่งง่าย',
                'ปลอดภัย'
            ]
        ];

        // ดึงข้อมูลจำนวนสมาชิกของทีม
        // $teamCount = User::where('is_team', true)->count();

        // ใช้ scope ที่เตรียมไว้ในโมเดล User แทน โดยใช้วิธีนี้จะทำให้โค้ดสะดวกขึ้น
        $teamCount = User::teamMembers()->count();

        return Inertia::render('welcome', [
            'appInfo' => $appInfo,
            'currentTime' => now()->format('d/m/Y H:i:s'),
            'teamCount' => $teamCount
        ]);
    }

    /**
     * แสดงหน้าเกี่ยวกับเรา
     */
    public function about()
    {
        // ดึงข้อมูลจำนวนสมาชิกของที่เป็นทีมงาน
        // ดึงเฉพาะฟิลด์ id, name, position, avatar และ bio
        $teamMembers = User::teamMembers()->select('id', 'name', 'position', 'avatar', 'bio')->get();

        // ข้อมูล JSON ตัวอย่าง
        $companyInfo = [
            'name' => 'บริษัท แอปพลิเคชันของคุณ จำกัด',
            'established' => '2023',
            'employees' => 50,
            'location' => 'กรุงเทพฯ',
            'contact' => [
                'email' => 'info@yourapplication.com',
                'phone' => '02-123-4567',
                'address' => '123 ถนนตัวอย่าง, กรุงเทพฯ 10000'
            ]
        ];
        
        return Inertia::render('about', [
            'companyInfo' => $companyInfo,
            'lastUpdated' => now()->format('d/m/Y'),
            'teamMembers' => $teamMembers
        ]);
    }

    /**
     * แสดงหน้า dashboard
     */
    public function dashboard()
    {
        return Inertia::render('dashboard');
    }
}
