import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sear & Spice — Flame-Grilled Suya & Smokehouse Delivery',
  description:
    'Real charcoal. Real suya spice. World-class flame-grilled cuts delivered fresh to your door in 35 minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-smoke text-ash font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
