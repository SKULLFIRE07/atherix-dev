'use client'

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'

const stacks = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express / Fastify', 'Typed APIs'],
  },
  {
    category: 'AI',
    items: ['LLM APIs', 'RAG pipelines', 'Tool calling'],
  },
  {
    category: 'Infra',
    items: ['Cloud deployments', 'Queues & workers', 'Monitoring'],
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-20 text-center">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Built on proven foundations</h2>
          <p className="section-intro mx-auto mt-6">
            No icons. No hype. Just facts.
          </p>
        </FadeIn>

        {/* Stack Grid */}
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
          {stacks.map((stack) => (
            <StaggerItem key={stack.category}>
              <div className="text-center group">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-6 group-hover:text-accent-purple transition-colors duration-300">
                  {stack.category}
                </h3>
                <ul className="space-y-3">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-base text-text-tertiary group-hover:text-text-secondary transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
