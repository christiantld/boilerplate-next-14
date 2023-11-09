import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
