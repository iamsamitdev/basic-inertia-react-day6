import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'

type FormData = {
  email: string
  password: string
  remember: boolean
}

export default function Login() {
  const { data, setData, post, processing, errors } = useForm<FormData>({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/login')
  }

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('remember', e.target.checked)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Head title="เข้าสู่ระบบ" />
      <div className="min-w-96 mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">เข้าสู่ระบบ</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">อีเมล</label>
              <input
                id="email"
                type="text"
                value={data.email}
                onChange={e => setData('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-1">รหัสผ่าน</label>
              <input
                id="password"
                type="password"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>

            <div className="mb-6 flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={data.remember}
                onChange={handleRememberChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                จดจำการเข้าสู่ระบบ
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                {processing ? 'กำลังประมวลผล...' : 'เข้าสู่ระบบ'}
              </button>
            </div>

            <div className="text-center text-sm">
              ยังไม่มีบัญชีผู้ใช้?{' '}
              <Link
                href="/register"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                ลงทะเบียน
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}