'use client'

import { FadeIn } from '@/components/ui/FadeIn'

export function TrustStrip() {
  return (
    <section className="py-16 border-y border-border bg-bg-secondary/50">
      <div className="container-custom">
        <FadeIn className="text-center">
          <p className="text-sm text-text-tertiary tracking-wide">
            Used by teams building production AI systems
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
