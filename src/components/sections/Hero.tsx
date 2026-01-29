'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Background Gradient Orbs - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 -left-1/3 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal Prompt Line */}
          <div className="mb-10 font-mono text-sm sm:text-base text-text-secondary flex items-center justify-center gap-2">
            <span className="text-accent-green">$</span>
            <span className="text-accent-blue">atherix</span>
            <span className="text-text-muted">--build</span>
            <span className="text-accent-yellow">future</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] mb-8">
            <span className="block">If you can imagine it,</span>
            <span className="block text-white terminal-glow">we can build it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            <span className="text-accent-green font-mono inline-block mr-2">//</span>
            Pioneering AI automation, intelligent agents, and production-grade systems that transform how businesses operate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              className="text-base px-10 py-5"
            >
              Get in touch
            </Button>
            <Button
              as="a"
              href="#how-it-works"
              variant="secondary"
              size="lg"
              className="text-base px-10 py-5"
            >
              See how it works
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-text-muted/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
