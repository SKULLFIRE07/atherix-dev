'use client'

import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Static Grid Background - no animation for performance */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Static Gradient Orbs - no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Prompt Line - render immediately */}
          <div className="mb-6 md:mb-8 font-mono text-sm sm:text-base text-text-secondary flex items-center justify-center gap-2 animate-fade-in">
            <span className="text-accent-green">$</span>
            <span className="text-accent-blue">atherix</span>
            <span className="text-text-muted">--build</span>
            <span className="text-accent-yellow">future</span>
          </div>

          {/* Headline - LCP element, render immediately with no delay */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[1.1] mb-3 md:mb-4 animate-fade-in-up">
            If you can imagine it,
          </h1>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8 md:mb-10 terminal-glow animate-fade-in-up animation-delay-100">
            we can build it.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-4 animate-fade-in-up animation-delay-200">
            <span className="text-accent-green font-mono mr-2">//</span>
            Pioneering AI automation, intelligent agents, and production-grade systems that transform how businesses operate.
          </p>

          {/* Stats Strip */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 md:mb-12 animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">99.9%</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Support</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 animate-fade-in-up animation-delay-400">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              className="text-base px-8 md:px-10 py-4 md:py-5"
            >
              Start Your Project
            </Button>
            <Button
              as="a"
              href="#portfolio"
              variant="secondary"
              size="lg"
              className="text-base px-8 md:px-10 py-4 md:py-5"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - hidden on mobile for performance */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  )
}
