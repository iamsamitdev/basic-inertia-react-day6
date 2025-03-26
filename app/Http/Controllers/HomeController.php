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
     * แสดงหน้าแดชบอร์ด
     */
    public function dashboard(Request $request)
    {
        // ข้อมูลผู้ใช้ที่เข้าสู่ระบบ
        $user = $request->user();
        
        // ข้อมูลสถิติตัวอย่าง
        $stats = [
            'visitors' => rand(100, 1000),
            'sales' => rand(10, 100),
            'revenue' => rand(10000, 100000),
            'growth' => rand(1, 20) . '%'
        ];
        
        // ข้อมูลกราฟตัวอย่าง
        $chartData = [
            'labels' => ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
            'data' => [
                rand(10, 100),
                rand(10, 100),
                rand(10, 100),
                rand(10, 100),
                rand(10, 100),
                rand(10, 100)
            ]
        ];
        
        // ข้อมูลการแจ้งเตือน
        $notifications = [
            [
                'id' => 1,
                'message' => 'มีการสั่งซื้อใหม่',
                'time' => '10 นาทีที่แล้ว',
                'read' => false
            ],
            [
                'id' => 2,
                'message' => 'ส่งอีเมลยืนยันเรียบร้อยแล้ว',
                'time' => '1 ชั่วโมงที่แล้ว',
                'read' => true
            ]
        ];
        
        // จำนวนสมาชิกทีมงาน
        $teamCount = User::teamMembers()->count();
        
        // ส่งข้อมูลไปยัง dashboard.tsx component
        return Inertia::render('dashboard', [
            'user' => $user,
            'stats' => $stats,
            'chartData' => $chartData,
            'notifications' => $notifications,
            'serverTime' => now()->format('d/m/Y H:i:s'),
            'teamCount' => $teamCount,
        ]);
    }
}
