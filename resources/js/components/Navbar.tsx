import { Link } from '@inertiajs/react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-600">
                <Link href="/">Laravel React</Link>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-6 mr-6">
                    <li>
                        <Link 
                            href="/" 
                            className="text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            หน้าแรก
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/about" 
                            className="text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            เกี่ยวกับเรา
                    </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-3">
                    <Link
                        href="/login"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                        เข้าสู่ระบบ
                    </Link>
                    <Link
                        href="/register"
                        className="px-3 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                    >
                        ลงทะเบียน
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
