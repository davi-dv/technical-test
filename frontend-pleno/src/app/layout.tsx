'use client'
import '../styles/globals.css'
import { usePathname } from 'next/navigation'

import { AppContext } from '@/context/index'
import { ModalProvider } from '@/context/Modal' // Importar o ModalProvider

import Banner from '@/components/Banner'
import Modal from '@/components/Modals'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentPath = usePathname()
  return (
    <ModalProvider>
      <AppContext>
        <html>
          <body>
            <Modal />
            <Navbar />
            {currentPath === '/' && <Banner />}
            {children}
          </body>
        </html>
      </AppContext>
    </ModalProvider>
  )
}
