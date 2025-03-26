import React from 'react'
import { Link } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout'

// กำหนด interfaces สำหรับ props ที่รับมาจาก Controller
interface User {
  id: number
  name: string
  email: string
  // เพิ่ม properties ตามที่ต้องการ
}

interface Stats {
  visitors: number
  sales: number
  revenue: number
  growth: string
}

interface ChartData {
  labels: string[]
  data: number[]
}

interface Notification {
  id: number
  message: string
  time: string
  read: boolean
}

interface DashboardProps {
  user: User
  stats: Stats
  chartData: ChartData
  notifications: Notification[]
  serverTime: string
  teamCount: number
}

export default function Dashboard({ user, stats, chartData, notifications, serverTime, teamCount }: DashboardProps) {
  return (
    <MainLayout title="แดชบอร์ด">
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* ส่วนหัว */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">สวัสดี, {user.name}</h1>
                <p className="text-gray-600">ยินดีต้อนรับกลับมายังแดชบอร์ดของคุณ</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <p className="text-sm text-gray-500">เวลาเซิร์ฟเวอร์: {serverTime}</p>
                <p className="text-sm text-indigo-500 mt-1">จำนวนทีมงาน: {teamCount} คน</p>
              </div>
            </div>
          </div>
          
          {/* สถิติ */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">ผู้เข้าชม</h3>
              <p className="text-3xl font-bold text-indigo-600">{stats.visitors}</p>
              <div className="mt-2 text-sm text-green-500">
                <span>↑ {stats.growth}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">ยอดขาย</h3>
              <p className="text-3xl font-bold text-purple-600">{stats.sales}</p>
              <div className="mt-2 text-sm text-green-500">
                <span>↑ {stats.growth}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">รายได้</h3>
              <p className="text-3xl font-bold text-pink-600">฿{stats.revenue.toLocaleString()}</p>
              <div className="mt-2 text-sm text-green-500">
                <span>↑ {stats.growth}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">อัตราการเติบโต</h3>
              <p className="text-3xl font-bold text-orange-600">{stats.growth}</p>
              <div className="mt-2 text-sm text-green-500">
                <span>↑ จากเดือนที่แล้ว</span>
              </div>
            </div>
          </div>
          
          {/* กราฟและการแจ้งเตือน */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
              <h2 className="text-lg font-bold text-gray-800 mb-4">ภาพรวมรายเดือน</h2>
              
              {/* จำลองกราฟด้วย div */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-end p-4 space-x-2">
                {chartData.data.map((value, index) => {
                  // คำนวณความสูงตามสัดส่วน
                  const maxHeight = 200;
                  const height = (value / Math.max(...chartData.data)) * maxHeight;
                  
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-indigo-500 rounded-t-sm" 
                        style={{ height: `${height}px` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">{chartData.labels[index]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">การแจ้งเตือน</h2>
              
              {notifications.length > 0 ? (
                <ul className="space-y-4">
                  {notifications.map(notification => (
                    <li key={notification.id} className={`p-3 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                      <div className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                        <div className="ml-3">
                          <p className={`text-sm ${notification.read ? 'text-gray-700' : 'text-gray-900 font-medium'}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center py-4">ไม่มีการแจ้งเตือนใหม่</p>
              )}
            </div>
          </div>
          
          
        </div>
      </div>
    </MainLayout>
  )
} 