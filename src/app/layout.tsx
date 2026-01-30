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
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://atherix.dev'),
  title: {
    default: 'Atherix — AI Automation Studio | Atherix.dev | Custom AI Agents & Solutions',
    template: '%s | Atherix - AI Automation Studio',
  },
  description: 'Atherix is the #1 AI automation studio. Atherix.dev builds custom AI agents, intelligent automation systems, chatbots & production-grade AI software. Atherix - If you can imagine it, we can build it. Get a free consultation today!',
  keywords: [
    // Brand keywords (MOST IMPORTANT)
    'Atherix',
    'Atherix.dev',
    'Atherix AI',
    'Atherix automation',
    'Atherix studio',
    // Primary keywords
    'AI automation studio',
    'AI development company',
    'AI agents development',
    'custom AI solutions',
    'machine learning company',
    // Service keywords
    'AI chatbot development',
    'GPT integration services',
    'LLM application development',
    'AI SaaS development',
    'automation software development',
    // Technology keywords
    'React AI development',
    'Python AI development',
    'Node.js AI solutions',
    'TypeScript development',
    'OpenAI integration',
    'LangChain development',
    // Industry keywords
    'AI for startups',
    'enterprise AI solutions',
    'AI consulting services',
    'production AI systems',
    'scalable AI infrastructure',
    // Location keywords
    'AI company India',
    'AI development services worldwide',
    'remote AI development team',
    // Long-tail keywords
    'build AI agents for business',
    'hire AI developers',
    'custom ChatGPT solutions',
    'AI workflow automation',
    'intelligent process automation',
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
    languages: {
      'en-US': 'https://atherix.dev',
      'en-GB': 'https://atherix.dev',
      'en-IN': 'https://atherix.dev',
      'x-default': 'https://atherix.dev',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atherix.dev',
    siteName: 'Atherix',
    title: 'Atherix — #1 AI Automation Studio | Atherix.dev',
    description: 'Atherix builds custom AI agents & automation systems. Atherix.dev - Your trusted AI development partner. 50+ projects shipped. If you can imagine it, Atherix can build it.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atherix.dev - AI Automation Studio - Build Custom AI Agents & Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@atherixdev',
    creator: '@atherixdev',
    title: 'Atherix — AI Automation Studio | Atherix.dev',
    description: 'Atherix builds custom AI agents & automation. Atherix.dev - 50+ projects shipped. If you can imagine it, Atherix can build it.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'google-site-verification': 'add-your-verification-code-here',
    'msvalidate.01': 'add-bing-verification-code-here',
  },
}

// JSON-LD Structured Data - Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://atherix.dev/#organization',
  name: 'Atherix',
  alternateName: ['Atherix.dev', 'Atherix AI', 'Atherix Studio'],
  description: 'Atherix.dev is a premium AI automation studio specializing in custom AI agents, intelligent automation systems, and production-grade AI solutions for businesses worldwide.',
  url: 'https://atherix.dev',
  logo: {
    '@type': 'ImageObject',
    url: 'https://atherix.dev/icon.svg',
    width: 512,
    height: 512,
  },
  image: 'https://atherix.dev/og-image.png',
  sameAs: [
    'https://twitter.com/atherixdev',
    'https://x.com/atherix_dev',
    'https://github.com/atherixdev',
    'https://linkedin.com/company/atherixdev',
    'https://www.instagram.com/atherix.dev',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'Worldwide',
  },
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Atherix Team',
    },
  ],
  slogan: 'If you can imagine it, we can build it.',
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'AI Agents',
    'Automation',
    'Software Development',
    'GPT Integration',
    'LangChain',
    'React',
    'Node.js',
    'Python',
  ],
}

// JSON-LD - Professional Service
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://atherix.dev/#service',
  name: 'Atherix.dev - AI Automation Studio',
  description: 'Premium AI automation studio offering custom AI agents, chatbot development, machine learning solutions, and production-grade AI systems for startups and enterprises.',
  url: 'https://atherix.dev',
  priceRange: '$$$',
  image: 'https://atherix.dev/og-image.png',
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Remote',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '20.5937',
    longitude: '78.9629',
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Continent', name: 'Europe' },
    { '@type': 'Continent', name: 'Asia' },
  ],
  serviceType: [
    'AI Development',
    'AI Agent Development',
    'Chatbot Development',
    'Machine Learning Solutions',
    'Automation Software',
    'GPT Integration',
    'LLM Application Development',
    'AI Consulting',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Agent Development',
          description: 'Build intelligent AI agents tailored to your business needs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbot Development',
          description: 'Create conversational AI chatbots powered by GPT and custom LLMs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machine Learning Solutions',
          description: 'End-to-end ML pipelines from data to production deployment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation Systems',
          description: 'Automate business processes with intelligent AI workflows',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

// JSON-LD - SoftwareApplication (for rich snippets)
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Atherix AI Solutions',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Cloud',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free consultation available',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '50',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://atherix.dev" />
        <link rel="alternate" hrefLang="en-US" href="https://atherix.dev" />
        <link rel="alternate" hrefLang="en-GB" href="https://atherix.dev" />
        <link rel="alternate" hrefLang="en-IN" href="https://atherix.dev" />
        <link rel="alternate" hrefLang="x-default" href="https://atherix.dev" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
