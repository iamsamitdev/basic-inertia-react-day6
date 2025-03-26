<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Laravel Inertia React Application

โปรเจ็กต์นี้สร้างด้วย Laravel, Inertia.js และ React ซึ่งเป็นเทคโนโลยีที่ทันสมัยและมีประสิทธิภาพสูง

## การติดตั้ง

```bash
# ติดตั้ง dependencies
composer install
npm install

# สร้างไฟล์ .env
cp .env.example .env

# สร้าง application key
php artisan key:generate

# ทำการ migration และ seed ข้อมูล
php artisan migrate --seed

# หรือใช้คำสั่งนี้เพื่อรีเซ็ตและสร้างข้อมูลใหม่
php artisan app:reset-test-data

# รัน development server
npm run dev
php artisan serve
```

## ข้อมูลทดสอบ

โปรเจ็กต์นี้มาพร้อมกับข้อมูลทดสอบที่สร้างโดย Seeder ซึ่งประกอบด้วย:

- ผู้ใช้ทั้งหมด 10 คน
  - สมาชิกทีม 5 คน (มี flag `is_team` เป็น `true`)
  - ผู้ใช้ทั่วไป 5 คน

### บัญชีทดสอบ

สามารถใช้บัญชีต่อไปนี้ในการเข้าสู่ระบบ:

- **แอดมิน**
  - Email: admin@example.com
  - Password: password

- **สมาชิกทีม**
  - Email: somchai@example.com, somying@example.com, mana@example.com, wipa@example.com
  - Password: password (สำหรับทุกบัญชี)

- **ผู้ใช้ทั่วไป**
  - Email: prasert@example.com, malee@example.com, somsak@example.com, nipa@example.com, prateep@example.com
  - Password: password (สำหรับทุกบัญชี)

## คำสั่ง Artisan

โปรเจ็กต์นี้มีคำสั่ง Artisan ที่สร้างขึ้นเพื่อช่วยให้การพัฒนาเป็นไปอย่างสะดวกยิ่งขึ้น:

- `php artisan app:reset-test-data` - รีเซ็ตฐานข้อมูลและสร้างข้อมูลทดสอบใหม่ทั้งหมด

## โครงสร้างของโปรเจ็กต์

```
laravel-inertia-react/
├── app/
│   ├── Console/
│   │   └── Commands/               # คำสั่ง Artisan ที่สร้างขึ้นเอง
│   │       └── ResetTestData.php
│   ├── Http/
│   │   ├── Controllers/            # Controller สำหรับจัดการ request
│   │   │   ├── Auth/               # Controller สำหรับการยืนยันตัวตน
│   │   │   │   ├── LoginController.php
│   │   │   │   └── RegisterController.php
│   │   │   └── PageController.php  # จัดการหน้าต่างๆ ของแอพ
│   │   ├── Middleware/             # Middleware สำหรับจัดการ request
│   │   │   └── HandleInertiaRequests.php  # จัดการข้อมูลที่ส่งให้ Inertia
│   │   └── Resources/              # API Resources สำหรับแปลงข้อมูล
│   └── Models/                     # โมเดลข้อมูล
│       └── User.php                # โมเดลผู้ใช้
├── database/
│   ├── factories/                  # Factory สำหรับสร้างข้อมูลทดสอบ
│   │   └── UserFactory.php
│   ├── migrations/                 # ไฟล์กำหนดโครงสร้างฐานข้อมูล
│   └── seeders/                    # ไฟล์สำหรับสร้างข้อมูลทดสอบ
│       ├── DatabaseSeeder.php
│       └── UserSeeder.php
├── resources/
│   ├── js/
│   │   ├── components/             # React components ที่ใช้ซ้ำได้
│   │   │   ├── Footer.tsx
│   │   │   └── NavBar.tsx
│   │   ├── layouts/                # React layouts สำหรับหน้าต่างๆ
│   │   │   └── MainLayout.tsx
│   │   ├── pages/                  # React components สำหรับแต่ละหน้า
│   │   │   ├── Auth/               # หน้าเกี่ยวกับการยืนยันตัวตน
│   │   │   │   ├── Login.tsx
│   │   │   │   └── Register.tsx
│   │   │   ├── about.tsx
│   │   │   ├── dashboard.tsx
│   │   │   └── welcome.tsx
│   │   └── types/                  # TypeScript type definitions
│   │       └── index.d.ts
│   └── views/                      # Blade templates
└── routes/                         # เส้นทาง URL ของแอพ
    └── web.php                     # กำหนด routes หลักของแอพ
```

### Laravel Backend

โปรเจ็กต์นี้แบ่งส่วนหลังบ้านตามแนวทางของ Laravel ดังนี้:

- **Controllers**: จัดการ HTTP requests และส่งข้อมูลไปยัง React ผ่าน Inertia
  - `PageController`: จัดการหน้าหลักของแอปพลิเคชัน (welcome, about, dashboard)
  - `Auth/*`: จัดการการลงทะเบียนและเข้าสู่ระบบ

- **Middleware**: จัดการการประมวลผล requests ก่อนถึง controller
  - `HandleInertiaRequests`: กำหนดข้อมูลที่แชร์ไปยังทุกหน้าผ่าน Inertia

- **Models**: กำหนดโครงสร้างข้อมูลและความสัมพันธ์
  - `User`: โมเดลผู้ใช้งานที่รวมฟิลด์เพิ่มเติมเช่น `position`, `avatar`, `is_team`, `bio`

- **Commands**: คำสั่ง Artisan ที่สร้างขึ้นเอง
  - `ResetTestData`: รีเซ็ตและสร้างข้อมูลทดสอบใหม่

### React Frontend (Inertia.js)

React components ถูกจัดเก็บในโฟลเดอร์ `resources/js/` และแบ่งออกเป็น:

- **Components**: ส่วนประกอบย่อยที่ใช้ซ้ำได้เช่น `NavBar`, `Footer`
- **Layouts**: โครงสร้างหน้าที่ใช้ซ้ำเช่น `MainLayout`
- **Pages**: หน้าหลักของแอปพลิเคชันเช่น `welcome`, `about`, `dashboard`
- **Types**: นิยาม TypeScript types เช่น `User`, `PageProps`

## การใช้งาน API Resources

ตัวอย่างการใช้งาน API Resources เพื่อส่งข้อมูลจาก Laravel ไปยัง React:

```php
// ใช้ UserResource สำหรับทีมงาน
$teamMembers = UserResource::collection(
    User::teamMembers()
        ->select('id', 'name', 'position', 'avatar', 'bio')
        ->take(4)
        ->get()
);

// ส่งข้อมูลไปยัง about.tsx component
return Inertia::render('about', [
    'companyInfo' => $companyInfo,
    'teamMembers' => $teamMembers,
    'lastUpdated' => now()->format('d/m/Y'),
]);
```

และใน React Component สามารถรับข้อมูลได้ดังนี้:

```tsx
interface TeamMember {
  id: number
  name: string
  position: string
  avatar: string
  bio: string | null
}

interface AboutProps {
  companyInfo: CompanyInfo
  teamMembers: TeamMember[]
  lastUpdated: string
}

export default function About({ companyInfo, teamMembers, lastUpdated }: AboutProps) {
  // ใช้งานข้อมูลตามที่ต้องการ
}
```

## เทคโนโลยีที่ใช้

- **Laravel 10+**: PHP Framework สำหรับพัฒนา Backend API 
- **React 18**: JavaScript Library สำหรับพัฒนา UI
- **TypeScript**: Superset ของ JavaScript ที่เพิ่มระบบ Type
- **Inertia.js**: ตัวเชื่อมระหว่าง Laravel และ React
- **Tailwind CSS**: Framework CSS สำหรับออกแบบ UI