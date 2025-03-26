import MainLayout from '@/layouts/MainLayout'
import { Link } from '@inertiajs/react'

// กำหนด interface สำหรับ props ที่รับมาจาก Controller ของ Laravel
interface CompanyContact {
  email: string
  phone: string
  address: string
}

interface CompanyInfo {
  name: string
  established: string
  employees: number
  location: string
  contact: CompanyContact
}

interface TeamMember {
  id: number
  name: string
  position: string
  avatar: string
  bio: string
}

interface AboutProps {
  companyInfo: CompanyInfo
  lastUpdated: string
  teamMembers: TeamMember[]
}

export default function About({ companyInfo, lastUpdated, teamMembers }: AboutProps ) {
  return (
    <MainLayout title='เกี่ยวกับเรา'>
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 py-16 px-4">
        <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl leading-24 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 mb-6 text-center">
            เกี่ยวกับเรา
          </h1>
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-8xl">🌟</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">วิสัยทัศน์ของเรา</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  เรามุ่งมั่นที่จะสร้างเทคโนโลยีที่เปลี่ยนแปลงโลกและทำให้ชีวิตของผู้คนดีขึ้น ด้วยนวัตกรรมที่ล้ำสมัยและการออกแบบที่ใส่ใจในทุกรายละเอียด
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  เราเชื่อว่าเทคโนโลยีที่ดีควรเข้าถึงได้สำหรับทุกคน และเราทำงานทุกวันเพื่อทำให้วิสัยทัศน์นี้เป็นจริง
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-purple-600 text-2xl mr-2">✨</span> ประวัติความเป็นมา
                </h3>
                <p className="text-gray-600">
                  ก่อตั้งขึ้นในปี 2022 โดยกลุ่มผู้เชี่ยวชาญด้านเทคโนโลยีที่มีความหลงใหลในการสร้างสรรค์ผลิตภัณฑ์ที่มีคุณภาพสูง เราเติบโตอย่างรวดเร็วและได้รับความไว้วางใจจากลูกค้าทั่วโลก
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-pink-600 text-2xl mr-2">🚀</span> พันธกิจของเรา
                </h3>
                <p className="text-gray-600">
                  พันธกิจของเราคือการพัฒนาโซลูชันที่ใช้งานง่าย มีประสิทธิภาพสูง และตอบโจทย์ความต้องการของผู้ใช้อย่างแท้จริง เรามุ่งมั่นที่จะสร้างประสบการณ์ที่ดีที่สุดสำหรับลูกค้าของเรา
                </p>
              </div>
            </div>
            
            {/* แสดงข้อมูลบริษัท */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-md mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="text-orange-600 text-2xl mr-2">🏢</span> ข้อมูลบริษัท
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700"><span className="font-medium">ชื่อบริษัท:</span> {companyInfo.name}</p>
                  <p className="text-gray-700"><span className="font-medium">ที่ตั้ง:</span> {companyInfo.location}</p>
                  <p className="text-gray-700"><span className="font-medium">จำนวนพนักงาน:</span> {companyInfo.employees} คน</p>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-medium">อีเมล:</span> {companyInfo.contact.email}</p>
                  <p className="text-gray-700"><span className="font-medium">โทรศัพท์:</span> {companyInfo.contact.phone}</p>
                  <p className="text-gray-700"><span className="font-medium">ที่อยู่:</span> {companyInfo.contact.address}</p>
                </div>
              </div>
            </div>
            
            {/* แสดงทีมงาน */}
            
            {teamMembers.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">ทีมงานของเรา</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {teamMembers.map(member => (
                    <div key={member.id} className="bg-white rounded-xl shadow-md p-4 text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                      <p className="text-gray-600">{member.position}</p>
                      {member.bio && (
                        <p className="text-gray-500 text-sm mt-2 line-clamp-3">{member.bio}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              กลับสู่หน้าหลัก
            </Link>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            ข้อมูลอัปเดตล่าสุด: {lastUpdated}
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
