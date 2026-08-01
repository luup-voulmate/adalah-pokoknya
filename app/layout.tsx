import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabian — Portfolio',
  description:
    'Portfolio of Fabian, a creative developer crafting modern digital experiences through code and design. Web development, UI/UX, and digital innovation.',
  generator: 'Fabian Portfolio',
  keywords: [
    'Fabian',
    'Creative Developer',
    'Web Design',
    'Portfolio',
    'Next.js',
    'React',
    'UI/UX',
  ],
  authors: [{ name: 'Fabian' }],
  openGraph: {
    title: 'Fabian — Creative Developer & Web Design Enthusiast',
    description:
      'A young creative developer who builds modern digital experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0514',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
