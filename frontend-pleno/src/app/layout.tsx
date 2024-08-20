import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import { AppContext } from '@/context/index'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppContext>
    <html lang="en">
      <body>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
    </AppContext>
  )
}
