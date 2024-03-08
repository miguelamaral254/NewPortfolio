import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Miguel Amaral',
  description: 'Miguel Amaral portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en, pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
