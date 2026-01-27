'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TerminalProps {
  children: ReactNode
  title?: string
  className?: string
}

export function Terminal({ children, title = 'terminal', className = '' }: TerminalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`terminal-window ${className}`}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <span className="text-xs text-text-muted ml-4 font-mono">{title}</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm overflow-x-auto">
        {children}
      </div>
    </motion.div>
  )
}

interface TerminalLineProps {
  children: ReactNode
  prompt?: boolean
  comment?: boolean
  delay?: number
  lineNumber?: number
}

export function TerminalLine({ 
  children, 
  prompt = false, 
  comment = false, 
  delay = 0,
  lineNumber
}: TerminalLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-3 mb-2"
    >
      {lineNumber !== undefined && (
        <span className="terminal-line-number">{lineNumber}</span>
      )}
      <div className={`flex-1 ${prompt ? 'terminal-prompt' : ''} ${comment ? 'terminal-comment' : ''}`}>
        {children}
      </div>
    </motion.div>
  )
}

interface TypedTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypedText({ text, className = '', delay = 0 }: TypedTextProps) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      transition={{ 
        duration: text.length * 0.05, 
        delay,
        ease: 'linear'
      }}
      className={`inline-block overflow-hidden whitespace-nowrap ${className}`}
    >
      {text}
      <span className="prompt-cursor" />
    </motion.span>
  )
}
