import '../styles/globals.css'
import { AppContext } from '@/context/index'

import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppContext>
      <html >
        <body>
          <Navbar />
          <Banner />
          {children}
        </body>
      </html>
    </AppContext>
  )
}
