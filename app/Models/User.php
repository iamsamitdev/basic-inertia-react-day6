<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'position',
        'avatar',
        'is_team',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_team' => 'boolean',
        ];
    }

    /**
     * ดึงเฉพาะผู้ใช้ที่เป็นสมาชิกทีม
     * 
     * @return \Illuminate\Database\Eloquent\Builder
     */
    // เวลาเรียกใช้ จะชื่อ scope นี้เป็น teamMembers
    // การสร้าง scope ทำให้เรียกใช้งานได้ง่ายขึ้น และเป็นการเก็บโค้ดที่ใช้บ่อยไว้ในโมเดลเอง
    // ถ้าต้องการเรียกใช้งานเพียงแค่ 
    // User::teamMembers()->get(); แทนที่จะเขียน User::where('is_team', true)->get();
    public function scopeTeamMembers($query)
    {
        return $query->where('is_team', true);
    }

    /**
     * รูปโปรไฟล์พร้อม URL เต็ม
     * 
     * @return string
     */
    // เวลาเรียกใช้ จะชื่อ attribute นี้เป็น avatar_url
    // การสร้าง attribute ทำให้เรียกใช้งานได้ง่ายขึ้น และเป็นการเก็บโค้ดที่ใช้บ่อยไว้ในโมเดลเอง
    // ถ้าต้องการเรียกใช้งานเพียงแค่ 
    // $user->avatar_url; แทนที่จะเขียน $user->avatar ? asset('storage/' . $user->avatar) : null;
    public function getAvatarUrlAttribute()
    {
        if (!$this->avatar) {
            return null;
        }
        
        // ถ้าเป็น URL แล้วไม่ต้องเติมอะไร
        if (str_starts_with($this->avatar, 'http')) {
            return $this->avatar;
        }
        
        // ถ้าไม่ใช่ URL ให้เติม path ของ storage ด้านหน้า
        return asset('storage/' . $this->avatar);
    }
    
}
