'use client'

import { FadeIn } from '@/components/ui/FadeIn'

const stats = [
  { label: 'API Uptime', value: '99.9%', prefix: '' },
  { label: 'Response Time', value: '<100ms', prefix: '' },
  { label: 'Lines of Code', value: '500K+', prefix: '' },
  { label: 'AI Models Deployed', value: '50+', prefix: '' },
]

export function TrustStrip() {
  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <p className="text-sm text-text-tertiary tracking-wide font-mono">
              <span className="text-accent-green">//</span> Production-grade infrastructure powering AI systems
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center group">
                <div className="font-mono text-xs text-text-muted mb-2">
                  <span className="text-accent-blue">[{idx}]</span> {stat.label}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-accent-blue group-hover:text-accent-green transition-colors">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
