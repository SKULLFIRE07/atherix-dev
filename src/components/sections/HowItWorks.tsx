'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Model your workflow',
    description: 'Define tasks, tools, and data.',
  },
  {
    number: '02',
    title: 'Orchestrate logic',
    description: 'Agents, queues, and state.',
  },
  {
    number: '03',
    title: 'Deploy & observe',
    description: 'Logs, retries, monitoring.',
  },
  {
    number: '04',
    title: 'Iterate safely',
    description: 'Versioned, testable systems.',
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="section bg-bg-secondary border-y border-border">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-20">
          <span className="section-tag">How it works</span>
          <h2 className="section-title">From idea to production</h2>
        </FadeIn>

        {/* Steps */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-purple via-accent-indigo to-accent-cyan"
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
                }`}
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-bg-card border border-border flex items-center justify-center font-mono text-base text-text-tertiary"
                    whileHover={{
                      borderColor: 'rgba(168, 85, 247, 0.5)',
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 md:max-w-sm">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
