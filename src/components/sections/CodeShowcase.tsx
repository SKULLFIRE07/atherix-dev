'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { Terminal, TerminalLine } from '@/components/ui/Terminal'

export function CodeShowcase() {
  return (
    <section className="section bg-black tech-wires">
      <div className="container-custom">
        <FadeIn className="mb-12 text-center">
          <span className="section-tag">
            <span className="font-mono text-accent-green">{'<'}</span>
            Technical Showcase
            <span className="font-mono text-accent-green">{'/>'}</span>
          </span>
          <h2 className="section-title">
            Code that <span className="gradient-text terminal-glow">scales</span>
          </h2>
        </FadeIn>

        <FadeIn className="max-w-4xl mx-auto">
          <Terminal title="atherix-dev/ai-agent.ts">
            <TerminalLine lineNumber={1}>
              <span className="syntax-keyword">import</span> {'{'} <span className="syntax-variable">AIAgent</span>, <span className="syntax-variable">Pipeline</span> {'}'} <span className="syntax-keyword">from</span> <span className="syntax-string">'@atherix/core'</span>
            </TerminalLine>
            
            <TerminalLine lineNumber={2}>
              <span className="text-transparent">_</span>
            </TerminalLine>

            <TerminalLine lineNumber={3}>
              <span className="syntax-comment">// Initialize multi-step AI agent</span>
            </TerminalLine>
            
            <TerminalLine lineNumber={4}>
              <span className="syntax-keyword">const</span> <span className="syntax-variable">agent</span> = <span className="syntax-keyword">new</span> <span className="syntax-function">AIAgent</span>({'{'}
            </TerminalLine>
            
            <TerminalLine lineNumber={5}>
              &nbsp;&nbsp;<span className="syntax-variable">model</span>: <span className="syntax-string">'gpt-4'</span>,
            </TerminalLine>
            
            <TerminalLine lineNumber={6}>
              &nbsp;&nbsp;<span className="syntax-variable">tools</span>: [<span className="syntax-string">'search'</span>, <span className="syntax-string">'analyze'</span>, <span className="syntax-string">'execute'</span>],
            </TerminalLine>
            
            <TerminalLine lineNumber={7}>
              &nbsp;&nbsp;<span className="syntax-variable">maxSteps</span>: <span className="syntax-number">10</span>
            </TerminalLine>
            
            <TerminalLine lineNumber={8}>
              {'}'})
            </TerminalLine>

            <TerminalLine lineNumber={9}>
              <span className="text-transparent">_</span>
            </TerminalLine>

            <TerminalLine lineNumber={10}>
              <span className="syntax-comment">// Execute autonomous workflow</span>
            </TerminalLine>

            <TerminalLine lineNumber={11}>
              <span className="syntax-keyword">const</span> <span className="syntax-variable">result</span> = <span className="syntax-keyword">await</span> agent.<span className="syntax-function">execute</span>(<span className="syntax-string">'Analyze and optimize'</span>)
            </TerminalLine>

            <TerminalLine lineNumber={12}>
              <span className="text-transparent">_</span>
            </TerminalLine>

            <TerminalLine lineNumber={13} prompt>
              <span className="text-accent-blue">node</span> ai-agent.ts
            </TerminalLine>

            <TerminalLine lineNumber={14}>
              <span className="text-accent-green">✓</span> Agent initialized | Models loaded | Ready
            </TerminalLine>

            <TerminalLine lineNumber={15}>
              <span className="text-accent-yellow">⟳</span> Executing workflow... <span className="text-accent-blue">[Step 1/10]</span>
            </TerminalLine>
          </Terminal>
        </FadeIn>

        {/* Technical Badges */}
        <FadeIn className="mt-12 flex flex-wrap justify-center gap-3">
          {['TypeScript', 'Python', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis', 'WebSocket', 'REST API'].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-bg-card border border-border rounded-lg font-mono text-xs text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-all cursor-default"
            >
              <span className="text-accent-green mr-2">▸</span>
              {tech}
            </motion.div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
