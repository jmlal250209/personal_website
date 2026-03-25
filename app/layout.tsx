import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Jiaming Liu — CS Student & Developer',
  description: 'Computer Science undergraduate at Trinity College Dublin, building projects in software engineering, systems, and AI.',
  metadataBase: new URL('https://jiaming-portfolio.vercel.app/'),
  openGraph: {
    type: 'website',
    url: 'https://jiaming-portfolio.vercel.app/',
    title: 'Jiaming Liu — CS Student & Developer',
    description: 'Computer Science undergraduate at Trinity College Dublin, building projects in software engineering, systems, and AI.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiaming Liu — CS Student & Developer',
    description: 'Computer Science undergraduate at Trinity College Dublin, building projects in software engineering, systems, and AI.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
