import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { ScrollToTop } from '@/components/ScrollToTop'
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

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://atherix.dev'),
  title: {
    default: 'Atherix.dev — AI Automation Studio | Build Production-Grade AI Systems',
    template: '%s | Atherix.dev',
  },
  description: 'Atherix.dev is a premium AI automation studio. We design, deploy, and scale intelligent agents, automation systems, and production-grade AI solutions. Expert in React, TypeScript, Node.js, Python, and modern AI tooling.',
  keywords: [
    'AI automation',
    'AI agents',
    'AI development company',
    'AI automation studio',
    'machine learning solutions',
    'AI SaaS development',
    'React development',
    'TypeScript development',
    'Node.js development',
    'Python AI development',
    'production AI systems',
    'AI consulting',
    'automation solutions',
    'intelligent agents',
    'LLM integration',
    'GPT integration',
    'AI software development',
    'custom AI solutions',
  ],
  authors: [{ name: 'Atherix.dev', url: 'https://atherix.dev' }],
  creator: 'Atherix.dev',
  publisher: 'Atherix.dev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://atherix.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atherix.dev',
    siteName: 'Atherix.dev',
    title: 'Atherix.dev — AI Automation Studio | Build Production-Grade AI Systems',
    description: 'We design, deploy, and scale intelligent agents and production-grade AI systems. Transform your business with cutting-edge AI automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atherix.dev - AI Automation Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atherix.dev — AI Automation Studio',
    description: 'Design, deploy, and scale intelligent agents and production-grade AI systems.',
    images: ['/og-image.png'],
    creator: '@atherixdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Atherix.dev',
  description: 'AI Automation Studio - Design, deploy, and scale intelligent agents and production-grade AI systems.',
  url: 'https://atherix.dev',
  logo: 'https://atherix.dev/icon.svg',
  sameAs: [
    'https://twitter.com/atherixdev',
    'https://github.com/atherixdev',
    'https://linkedin.com/company/atherixdev',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  offers: {
    '@type': 'Offer',
    description: 'AI Automation and Development Services',
    itemOffered: {
      '@type': 'Service',
      name: 'AI Development Services',
      description: 'Custom AI agents, automation systems, and production-grade AI solutions',
    },
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Atherix.dev - AI Automation Studio',
  description: 'Premium AI automation studio specializing in intelligent agents, automation systems, and production-grade AI solutions.',
  url: 'https://atherix.dev',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'AI Development',
    'Automation Solutions',
    'Machine Learning',
    'Software Development',
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        <GoogleAnalytics />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
