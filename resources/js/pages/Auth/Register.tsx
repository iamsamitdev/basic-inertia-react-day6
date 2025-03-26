import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/register')
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      
      <Head title="ลงทะเบียน" />

      <div className="min-w-96 mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">ลงทะเบียนผู้ใช้งานใหม่</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">ชื่อ</label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={e => setData('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>

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

            <div className="mb-6">
              <label htmlFor="password_confirmation" className="block text-gray-700 mb-1">ยืนยันรหัสผ่าน</label>
              <input
                id="password_confirmation"
                type="password"
                value={data.password_confirmation}
                onChange={e => setData('password_confirmation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                {processing ? 'กำลังประมวลผล...' : 'ลงทะเบียน'}
              </button>
            </div>

            <div className="text-center text-sm">
              มีบัญชีผู้ใช้แล้ว?{' '}
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}