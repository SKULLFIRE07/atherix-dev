'use client'

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'

const useCases = [
  {
    title: 'Customer support automation',
    description: 'AI agents that handle tickets, route issues, and escalate when needed.',
  },
  {
    title: 'Internal operations agents',
    description: 'Automated workflows for repetitive business processes.',
  },
  {
    title: 'AI dashboards for teams',
    description: 'Real-time insights and controls for AI-powered operations.',
  },
  {
    title: 'Vertical AI products',
    description: 'Domain-specific AI solutions built for specific industries.',
  },
]

export function UseCases() {
  return (
    <section className="section bg-bg-secondary border-y border-border">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-16">
          <span className="section-tag">Use Cases</span>
          <h2 className="section-title">What teams are building</h2>
        </FadeIn>

        {/* Use Cases List */}
        <StaggerChildren className="max-w-3xl mx-auto space-y-6">
          {useCases.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-bg-card border border-border rounded-xl hover:border-border-hover transition-colors">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium mb-1 group-hover:text-accent-purple transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {useCase.description}
                  </p>
                </div>
                <div className="text-text-muted group-hover:text-text-tertiary transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 10h10M15 10l-4-4M15 10l-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
