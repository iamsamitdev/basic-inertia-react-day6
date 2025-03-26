import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import { Head } from '@inertiajs/react'
import { ReactNode } from 'react'

// Interface สำหรับรับค่า props
interface MainLayoutProps {
    children: ReactNode
    title?: string
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">

        <Head title={title || 'หน้าหลัก'} />
        
        <Navbar />

        <main className="flex-grow">
            {children}
        </main>

        <Footer />
        
    </div>
  )
}
