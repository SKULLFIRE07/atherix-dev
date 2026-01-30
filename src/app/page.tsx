import {
  Navbar,
  Hero,
  TrustStrip,
  WhatWeBuild,
  Portfolio,
  HowItWorks,
  TechStack,
  UseCases,
  CTA,
  Footer,
} from '@/components/sections'

// FAQ Schema for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Atherix.dev offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atherix.dev specializes in AI automation, intelligent agents, custom AI development, machine learning solutions, and production-grade software systems. We build end-to-end AI solutions using React, TypeScript, Node.js, Python, and modern AI tooling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary based on complexity. Simple AI integrations can be completed in 2-4 weeks, while complex automation systems or custom AI agents typically take 2-3 months. We provide detailed timelines after understanding your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Atherix.dev use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use cutting-edge technologies including React, Next.js, TypeScript, Node.js, Python, TensorFlow, PyTorch, OpenAI GPT-4, LangChain, and cloud platforms like AWS, Google Cloud, and Vercel for deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support and maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer 24/7 support and maintenance packages. Our team provides continuous monitoring, updates, bug fixes, and performance optimization to ensure your AI systems run smoothly in production.',
      },
    },
  ],
}

// WebSite schema for sitelinks search box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Atherix.dev',
  url: 'https://atherix.dev',
  description: 'AI Automation Studio - Design, deploy, and scale production-grade AI systems',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://atherix.dev/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// Breadcrumb schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://atherix.dev',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Portfolio',
      item: 'https://atherix.dev/#portfolio',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Contact',
      item: 'https://atherix.dev/#contact',
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* Additional Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustStrip />
        <WhatWeBuild />
        <Portfolio />
        <HowItWorks />
        <TechStack />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
