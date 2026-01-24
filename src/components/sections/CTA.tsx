'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden py-40 md:py-52">
      {/* Background Glow - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] mb-6 leading-[1.05]">
            Let's talk about
            <br />
            <span className="gradient-text-animated">your system.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            If it involves automation, AI, or complex workflows — we're interested.
          </p>
          <Button
            as="a"
            href="mailto:atherix.dev@gmail.com"
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="w-5 h-5" />}
            className="text-base px-10 py-5 shadow-glow-lg hover:shadow-glow-xl"
          >
            Contact us
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
