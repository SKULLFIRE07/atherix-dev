'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [typingActive, setTypingActive] = useState(false)
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null)

  useEffect(() => {
    // Track scroll direction globally for this component
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < lastScrollY) {
        scrollDirectionRef.current = 'up'
      } else if (currentY > lastScrollY) {
        scrollDirectionRef.current = 'down'
      }
      lastScrollY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (!entry) return

        const isScrollingUp =
          scrollDirectionRef.current === 'up' || scrollDirectionRef.current === null

        // Only animate when hero becomes prominent WHILE scrolling up
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && isScrollingUp) {
          // Restart animation each time hero becomes prominent in view on upward scroll
          setTypingActive(false)
          // Small delay to retrigger CSS animation
          requestAnimationFrame(() => setTypingActive(true))
        } else {
          setTypingActive(false)
        }
      },
      {
        threshold: [0.5],
      }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Background Gradient Orbs - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/3 w-[900px] h-[900px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -40, 0],
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
          {/* Terminal Prompt Line - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 font-mono text-sm sm:text-base text-text-secondary flex items-center justify-center gap-2"
          >
            <motion.span
              className="text-accent-green"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $
            </motion.span>
            <span className="text-accent-blue">atherix</span>
            <span className="text-text-muted">--build</span>
            <motion.span
              className="text-accent-yellow"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              future
            </motion.span>
            <span className="prompt-cursor" />
          </motion.div>

          {/* Headline with typewriter + enhanced glow */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] mb-8">
            <motion.span
              className={`block typing-effect ${
                typingActive ? 'typing-effect-active' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              If you can imagine it,
            </motion.span>
            <motion.span
              className={`block gradient-text-animated terminal-glow typing-effect ${
                typingActive ? 'typing-effect-active' : ''
              }`}
              style={{ animationDelay: '1.6s' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              we can build it.
            </motion.span>
          </h1>

          {/* Subheadline - Enhanced */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-14 leading-relaxed font-light"
          >
            <motion.span
              className="text-accent-green font-mono inline-block mr-2"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              //
            </motion.span>
            Pioneering AI automation, intelligent agents, and production-grade systems that transform how businesses operate.
          </motion.p>

          {/* CTAs - Enhanced with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                className="text-base px-10 py-5 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
              >
                Get in touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Button
                as="a"
                href="#how-it-works"
                variant="secondary"
                size="lg"
                className="text-base px-10 py-5"
              >
                See how it works
              </Button>
            </motion.div>
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
