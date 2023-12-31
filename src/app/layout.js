import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bolinha Picker',
  description: 'A simple color picker for the web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
