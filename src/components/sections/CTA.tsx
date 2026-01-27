'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, WhatsAppIcon } from '@/components/ui/Icons'

export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden py-40 md:py-52 bg-black">
      <div className="container-custom relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <div className="mb-6 font-mono text-sm md:text-base text-text-secondary flex items-center justify-center gap-2">
            <span className="text-accent-green">$</span>
            <span className="text-accent-blue">atherix</span>
            <span className="text-text-muted">--init</span>
            <span className="text-accent-yellow">project</span>
            <span className="prompt-cursor" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] mb-6 leading-[1.05]">
            Let's talk about
            <br />
            <span className="gradient-text-animated terminal-glow">your system.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            <span className="font-mono text-accent-green">//</span> If it involves automation, AI, or complex workflows — we're interested.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              as="a"
              href="mailto:admin@atherix.dev"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              className="text-base px-10 py-5 shadow-glow-lg hover:shadow-glow-xl"
            >
              Contact us
            </Button>
            <Button
              as="a"
              href="https://wa.me/918788245978"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              className="text-base px-10 py-5"
            >
              WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
