<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', [HomeController::class, 'welcome'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');

// เส้นทางสำหรับการเข้าสู่ระบบ
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

// เส้นทางสำหรับการลงทะเบียน
Route::get('/register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

// เส้นทางสำหรับแสดงหน้า dashboard
Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard')->middleware(['auth']);

// เส้นทางสำหรับออกจากระบบ
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');