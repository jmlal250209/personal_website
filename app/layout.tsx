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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%236366f1'/><text y='.9em' font-size='60' font-family='Inter,Arial,sans-serif' font-weight='700' fill='white' x='50%' text-anchor='middle' dominant-baseline='hanging' dy='12'>JL</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
