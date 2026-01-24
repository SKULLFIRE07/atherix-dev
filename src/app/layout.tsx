import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

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
  title: 'Atherix.dev — Production-Grade AI Systems',
  description: 'Design, deploy, and scale automation agents and AI-powered systems on production infrastructure. Built with React, TypeScript, Node.js, and modern AI tooling.',
  keywords: ['AI automation', 'AI agents', 'SaaS', 'React', 'TypeScript', 'Node.js', 'production AI'],
  authors: [{ name: 'Atherix.dev' }],
  openGraph: {
    title: 'Atherix.dev — Production-Grade AI Systems',
    description: 'Design, deploy, and scale automation agents and AI-powered systems on production infrastructure.',
    type: 'website',
    url: 'https://atherix.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atherix.dev — Production-Grade AI Systems',
    description: 'Design, deploy, and scale automation agents and AI-powered systems on production infrastructure.',
  },
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  )
}
