import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Return to Atherix.dev homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Error Code */}
        <div className="font-mono text-8xl md:text-9xl font-bold text-white/10 mb-4">
          404
        </div>

        {/* Terminal Style Message */}
        <div className="font-mono text-sm text-text-muted mb-8">
          <span className="text-accent-red">Error:</span> Page not found
        </div>

        {/* Heading */}
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
          Lost in the void
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted text-sm mb-4">Or try these links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#portfolio" className="text-text-secondary hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/#how-it-works" className="text-text-secondary hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#contact" className="text-text-secondary hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
