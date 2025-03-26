<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; // ใช้ Inertia ในการ render หน้าจอ
use App\Models\User; // model ของ User
use Illuminate\Validation\Rules\Password; // ใช้ในการกำหนดเงื่อนไขของ password
use Illuminate\Support\Facades\Validator; // ใช้ในการ validate ข้อมูล
use Illuminate\Support\Facades\Hash; // ใช้ในการเข้ารหัส password

class RegisterController extends Controller
{
    /**
     * แสดงแบบฟอร์มลงทะเบียน
     */
    public function showRegisterForm()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * บันทึกข้อมูลลงทะเบียน
     */
    public function register(Request $request)
    {
        // Validate ข้อมูล
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',

            // กำหนดเงื่อนไขของ password
            // ต้องมีตัวอักษรตัวเล็ก ตัวใหญ่ ตัวเลข และอักขระพิเศษ
            // และต้องมีความยาวอย่างน้อย 8 ตัวอักษร
            // 'password' => ['required', 'confirmed', Password::defaults()],

            // 'password' => ['required', 'confirmed', Password::defaults(function(){
            //     return Password::min(8)
            //         ->letters() // ตัวอักษรตัวเล็ก
            //         ->mixedCase() // ตัวอักษรตัวใหญ่
            //         ->numbers() // ตัวเลข
            //         ->symbols() // อักขระพิเศษ
            //         ->uncompromised(); // ตรวจสอบว่า password ไม่อยู่ในรายการที่ถูกคัดค้าน              
            // })],
        ]);

        // ถ้าข้อมูลไม่ผ่านเงื่อนไข
        if($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // บันทึกข้อมูลลงฐานข้อมูล
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'avatar' => 'https://i.pravatar.cc/150?img=' . rand(1, 70),
            'is_team' => false,
        ]);

        
        // ลงชื่อเข้าใช้งานให้กับผู้ใช้ที่ลงทะเบียน
        auth()->login($user);

        // ส่งกลับไปยังหน้า dashboard พร้อมกับข้อความแจ้งเตือน
        return redirect()->route('dashboard')->with('success', 'ลงทะเบียนสำเร็จ! ยินดีต้อนรับเข้าสู่ระบบ');

    }
}
