import { Link } from '@inertiajs/react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">แอปพลิเคชันของคุณ</h3>
            <p className="text-gray-300">
              แอปพลิเคชันที่สร้างด้วย Laravel, Inertia และ React ที่มีประสิทธิภาพและใช้งานง่าย
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  แดชบอร์ด
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
            <address className="text-gray-300 not-italic">
              <p>บริษัท แอปพลิเคชันของคุณ จำกัด</p>
              <p>123 ถนนตัวอย่าง</p>
              <p>กรุงเทพฯ 10000</p>
              <p>อีเมล: info@yourapplication.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} แอปพลิเคชันของคุณ - สงวนลิขสิทธิ์
        </div>
      </div>
    </footer>
  )
}