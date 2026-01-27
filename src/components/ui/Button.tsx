'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button'
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: 'a'
  href: string
  target?: string
  rel?: string
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary: '',
  secondary: 'opacity-90',
  outline: 'opacity-90',
  ghost: 'bg-transparent border border-transparent hover:bg-white/10 hover:border-white/25',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
    icon,
    iconPosition = 'right',
  } = props

  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200',
    // White glassmorphism base
    'relative overflow-hidden bg-white/10 text-white border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-md',
    'hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (props.as === 'a') {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={baseStyles}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={baseStyles}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.button>
  )
}
