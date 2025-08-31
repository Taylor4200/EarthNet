import type { Metadata } from 'next'
import { Inter, Orbitron, Space_Grotesk, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: '🌍 Earth.Net - Minecraft Earth Strategy Server',
  description: 'The World\'s First Minecraft Earth Strategy Server. Strategy. Survival. Stakes.',
  icons: {
    icon: '/EArthnetlogo1 (2).png',
    shortcut: '/EArthnetlogo1 (2).png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} ${orbitron.variable} ${spaceGrotesk.variable} ${dmSans.variable} bg-earth-dark text-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
