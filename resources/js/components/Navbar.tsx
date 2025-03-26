import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

// Interface สำหรับ props ที่รับมาจาก Controller
interface User {
    id: number
    name: string
    email: string
    position?: string
    avatar?: string
    is_team?: boolean
    bio?: string | null
}

interface PageProps {
    auth: {
        user: User | null
    }
    [key: string]: string | number | boolean | object | null
}

export default function NavBar () {
    const { auth } = usePage<PageProps>().props
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-600">
            <Link href="/">Laravel React</Link>
          </div>
          
          {/* Hamburger button - visible on mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu - hidden on mobile */}
          <div className="hidden md:flex md:items-center">
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
              {auth.user && (
                <li>
                  <Link 
                    href="/dashboard" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    แดชบอร์ด
                  </Link>
                </li>
              )}
            </ul>

            {auth.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-md text-gray-700 font-bold">สวัสดี, {auth.user.name}</span>
                <Link 
                  href="/logout" 
                  method="post" 
                  as="button"
                  className="px-3 py-1.5 rounded text-sm bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
                >
                  ออกจากระบบ
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
                >
                  เข้าสู่ระบบ
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1.5 rounded text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  ลงทะเบียน
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu - shown when menu is open */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-3 mb-4">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              {auth.user && (
                <li>
                  <Link 
                    href="/dashboard" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    แดชบอร์ด
                  </Link>
                </li>
              )}
            </ul>

            {auth.user ? (
              <div className="flex flex-col space-y-3 py-3 border-t border-gray-200">
                <span className="text-md text-gray-700 font-bold">สวัสดี, {auth.user.name}</span>
                <Link 
                  href="/logout" 
                  method="post" 
                  as="button"
                  className="px-3 py-1.5 rounded text-sm bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  ออกจากระบบ
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 py-3 border-t border-gray-200">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  เข้าสู่ระบบ
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1.5 rounded text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition-colors w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  ลงทะเบียน
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}