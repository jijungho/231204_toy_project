import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Main from './main/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UpNote',
  description: 'Generated by create next app',
  icons: {
    icon: '/upnote-logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}
        <Main />
      </body>
    </html>
  )
}
