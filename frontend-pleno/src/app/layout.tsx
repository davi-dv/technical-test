'use client'
import '../styles/globals.css'
import { usePathname } from 'next/navigation'

import { AppContext } from '@/context/index'

import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentPath = usePathname()
  return (
    <AppContext>
      <html>
        <body>
          <Navbar />
          {currentPath === '/' && <Banner />}
          {children}
        </body>
      </html>
    </AppContext>
  )
}
