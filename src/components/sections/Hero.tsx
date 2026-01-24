'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs - More dramatic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/3 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] mb-6">
            If you can imagine it,
            <br />
            <span className="gradient-text-animated">we can build it.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Pioneering AI automation, intelligent agents, and production-grade systems that transform how businesses operate.
          </motion.p>

          {/* CTAs - Bigger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              className="text-base px-8 py-4"
            >
              Get in touch
            </Button>
            <Button
              as="a"
              href="#how-it-works"
              variant="secondary"
              size="lg"
              className="text-base px-8 py-4"
            >
              See how it works
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Smoother */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-20 bg-gradient-to-b from-text-muted/50 to-transparent relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white to-transparent"
              animate={{ y: ['-100%', '400%'] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
