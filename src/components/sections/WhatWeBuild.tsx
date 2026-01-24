'use client'

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { CubeIcon, LayoutIcon, SmartphoneIcon, WorkflowIcon } from '@/components/ui/Icons'

const features = [
  {
    icon: WorkflowIcon,
    title: 'AI Automation',
    description: 'Multi-step agents, workflow orchestration, tool-using AI',
    items: ['Multi-step agents', 'Workflow orchestration', 'Tool-using AI'],
  },
  {
    icon: LayoutIcon,
    title: 'AI SaaS Platforms',
    description: 'Dashboards, auth & billing, usage tracking',
    items: ['Dashboards', 'Auth & billing', 'Usage tracking'],
  },
  {
    icon: CubeIcon,
    title: 'Internal Tools',
    description: 'Admin panels, data pipelines, AI copilots',
    items: ['Admin panels', 'Data pipelines', 'AI copilots'],
  },
  {
    icon: SmartphoneIcon,
    title: 'Web & Mobile Apps',
    description: 'React / React Native, typed systems, scalable APIs',
    items: ['React / React Native', 'Typed systems', 'Scalable APIs'],
  },
]

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="section">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="mb-20">
          <span className="section-tag">What we enable</span>
          <h2 className="section-title">What we help teams build</h2>
        </FadeIn>

        {/* Feature Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="card group h-full border-gradient">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10 flex items-center justify-center mb-7 group-hover:from-accent-purple/30 group-hover:to-accent-cyan/20 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-accent-purple" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-text-tertiary flex items-center gap-3 group-hover:text-text-secondary transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan flex-shrink-0" />
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
