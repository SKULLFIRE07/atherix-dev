'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Capture the idea',
    description:
      'We sit with you, sketch the problem space, and translate fuzzy ideas into crisp, testable behaviors. No diagrams lost in Notion.',
    command: '> atherix capture --from=call --to=idea.ts',
  },
  {
    number: '02',
    title: 'Wire up the system',
    description:
      'Agents, tools, queues, and data pipes come together as one cohesive flow — designed like code, not glue scripts.',
    command: '> atherix graph --compile system.graph',
  },
  {
    number: '03',
    title: 'Ship to real infra',
    description:
      'We deploy on production-grade infrastructure with observability, fallbacks, and kill‑switches from day one.',
    command: '> atherix deploy --env=production',
  },
  {
    number: '04',
    title: 'Loop, learn, refine',
    description:
      'We watch live traces, run safe experiments, and keep iterating until the system feels like a superpower, not a demo.',
    command: '> atherix observe --tail --feedback',
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="section bg-black tech-wires">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-20">
          <span className="section-tag">
            <span className="font-mono text-accent-green">function</span> buildSystem() <span className="font-mono text-accent-blue">{'{'}</span>
          </span>
          <h2 className="section-title">
            <span className="font-mono text-accent-blue text-2xl mr-3">{'>'}</span>
            From <span className="gradient-text-animated terminal-glow">idea</span> to{' '}
            <span className="gradient-text-animated terminal-glow">production</span>
          </h2>
          <p className="section-intro mx-auto mt-6">
            <span className="font-mono text-accent-green">//</span> Our battle-tested pipeline for turning napkin
            sketches into reliable running systems.
          </p>

          {/* Pseudo-terminal pipeline description */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 font-mono text-xs sm:text-sm text-text-secondary bg-bg-secondary/60">
            <span className="text-accent-green">$</span>
            <span>atherix pipeline</span>
            <span className="text-text-muted">idea.ts</span>
            <span className="text-accent-blue">--compile</span>
            <span className="text-accent-yellow">--deploy</span>
          </div>
        </FadeIn>

        {/* Storyline cards with connecting arrows */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Top row: idea -> system */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-stretch mb-10 md:mb-12">
            <StoryCard step={steps[0]} animate={isInView} index={0} />

            {/* Arrow between first and second card (desktop) */}
            <div className="hidden md:flex items-center justify-center text-text-secondary/80">
              <span className="font-mono text-2xl">{'→'}</span>
            </div>

            <StoryCard step={steps[1]} animate={isInView} index={1} />
          </div>

          {/* Flow hint on small screens */}
          <div className="md:hidden mb-8 flex justify-center text-xs font-mono text-text-muted gap-1">
            <span>idea</span>
            <span>{'→'}</span>
            <span>system</span>
            <span>{'→'}</span>
            <span>infra</span>
            <span>{'→'}</span>
            <span>feedback</span>
          </div>

          {/* Bottom row: infra -> feedback */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-stretch">
            <StoryCard step={steps[2]} animate={isInView} index={2} />

            {/* Arrow between third and fourth card (desktop) */}
            <div className="hidden md:flex items-center justify-center text-text-secondary/80">
              <span className="font-mono text-2xl">{'→'}</span>
            </div>

            <StoryCard step={steps[3]} animate={isInView} index={3} />
          </div>

          {/* Overall flow label underneath (desktop) */}
          <div className="hidden md:flex justify-center mt-8 text-xs font-mono text-text-muted gap-2">
            <span>idea</span>
            <span>{'→'}</span>
            <span>system</span>
            <span>{'→'}</span>
            <span>infra</span>
            <span>{'→'}</span>
            <span>feedback</span>
          </div>
        </div>
      </div>
    </section>
  )
}

type Step = (typeof steps)[number]

function StoryCard({ step, animate, index }: { step: Step; animate: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-full"
    >
      <div className="h-full rounded-2xl border border-border bg-bg-card/70 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between transition-all duration-500 ease-out-expo group-hover:-translate-y-2 group-hover:shadow-glow-md group-hover:border-white/80">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-text-muted">{step.number}</span>
          <span className="h-px w-10 bg-border" />
        </div>

        <div className="mb-5">
          <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-white">
            {step.title}
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Terminal command on hover */}
        <div className="mt-auto pt-3 border-t border-border/60 font-mono text-xs text-text-muted flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out-expo">
          <span className="text-accent-green">$</span>
          <span className="truncate">{step.command}</span>
        </div>
      </div>
    </motion.div>
  )
}
