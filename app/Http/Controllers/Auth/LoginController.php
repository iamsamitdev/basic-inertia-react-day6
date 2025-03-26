<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /**
     * แสดงฟอร์มเข้าสู่ระบบ
     */
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * ดำเนินการเข้าสู่ระบบ
     */
    public function login(Request $request)
    {
        // ตรวจสอบข้อมูลที่รับมา
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        // remember me
        $remember = $request->boolean('remember');

        // ตรวจสอบข้อมูลเข้าสู่ระบบ
        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate(); // สร้าง session ใหม่

            // ถ้าสำเร็จ
            return redirect()->intended(route('dashboard'))->with('success', 'ยินดีต้อนรับกลับ!');
        }

        // ถ้าไม่สำเร็จ
        return back()->withErrors([
            'email' => 'ข้อมูลที่ระบุไม่ตรงกับบัญชีในระบบของเรา',
        ])->onlyInput('email');
    }

    /**
     * ออกจากระบบ
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate(); // ลบ session ทั้งหมด
        $request->session()->regenerateToken(); // สร้าง token ใหม่

        return redirect('/'); // กลับไปหน้าแรก
    }
} 