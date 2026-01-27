'use client'

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { CubeIcon, LayoutIcon, SmartphoneIcon, WorkflowIcon } from '@/components/ui/Icons'

const features = [
  {
    icon: WorkflowIcon,
    title: 'AI Automation',
    description: 'Multi-step agents, workflow orchestration, tool-using AI',
    items: ['Multi-step agents', 'Workflow orchestration', 'Tool-using AI'],
    code: 'agent.execute()',
  },
  {
    icon: LayoutIcon,
    title: 'AI SaaS Platforms',
    description: 'Dashboards, auth & billing, usage tracking',
    items: ['Dashboards', 'Auth & billing', 'Usage tracking'],
    code: 'platform.init()',
  },
  {
    icon: CubeIcon,
    title: 'Internal Tools',
    description: 'Admin panels, data pipelines, AI copilots',
    items: ['Admin panels', 'Data pipelines', 'AI copilots'],
    code: 'pipeline.run()',
  },
  {
    icon: SmartphoneIcon,
    title: 'Web & Mobile Apps',
    description: 'React / React Native, typed systems, scalable APIs',
    items: ['React / React Native', 'Typed systems', 'Scalable APIs'],
    code: 'npm run build',
  },
]

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="section bg-black">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-20">
          <span className="section-tag">
            <span className="font-mono text-accent-green">const</span> capabilities <span className="text-accent-blue">=</span>
          </span>
          <h2 className="section-title">
            <span className="font-mono text-accent-blue text-2xl mr-3">{'{'}</span>
            What we help teams build
            <span className="font-mono text-accent-blue text-2xl ml-3">{'}'}</span>
          </h2>
        </FadeIn>

        {/* Feature Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="card group h-full border-gradient">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-green/10 flex items-center justify-center mb-7 group-hover:from-accent-blue/30 group-hover:to-accent-green/20 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-accent-blue" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Code */}
                <div className="mb-4 font-mono text-sm text-accent-green opacity-60">
                  <span className="text-accent-blue">$</span> {feature.code}
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li
                      key={item}
                      className="text-base text-text-tertiary flex items-center gap-3 group-hover:text-text-secondary transition-colors duration-300 font-mono text-sm"
                    >
                      <span className="text-accent-green">•</span>
                      <span className="text-accent-blue">[{idx + 1}]</span>
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
