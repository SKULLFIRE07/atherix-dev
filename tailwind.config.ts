import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#020202',
          secondary: '#050505',
          tertiary: '#0a0a0a',
          card: '#070707',
          elevated: '#0d0d0d',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.06)',
          active: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A3A3A3',
          tertiary: '#737373',
          muted: '#525252',
        },
        accent: {
          purple: '#A855F7',
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          pink: '#EC4899',
          indigo: '#6366F1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.2' }],
        'xs': ['0.8125rem', { lineHeight: '1.5' }],
        'sm': ['0.9375rem', { lineHeight: '1.5' }],
        'base': ['1.0625rem', { lineHeight: '1.6' }],
        'lg': ['1.25rem', { lineHeight: '1.5' }],
        'xl': ['1.5rem', { lineHeight: '1.4' }],
        '2xl': ['1.875rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        '4xl': ['3rem', { lineHeight: '1.15' }],
        '5xl': ['3.75rem', { lineHeight: '1.1' }],
        '6xl': ['4.5rem', { lineHeight: '1.05' }],
        '7xl': ['5.5rem', { lineHeight: '1' }],
        '8xl': ['7rem', { lineHeight: '0.95' }],
        '9xl': ['9rem', { lineHeight: '0.9' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'fade-in': 'fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(2deg)' },
        },
        'glow': {
          '0%': { opacity: '0.3', filter: 'blur(100px)' },
          '100%': { opacity: '0.6', filter: 'blur(120px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #06B6D4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #020202 0%, #050505 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
      },
      boxShadow: {
        'glow-sm': '0 0 30px rgba(168, 85, 247, 0.1)',
        'glow-md': '0 0 60px rgba(168, 85, 247, 0.15)',
        'glow-lg': '0 0 100px rgba(168, 85, 247, 0.2)',
        'glow-xl': '0 0 150px rgba(168, 85, 247, 0.25)',
        'glow-cyan': '0 0 80px rgba(6, 182, 212, 0.15)',
        'inner-glow': 'inset 0 0 60px rgba(168, 85, 247, 0.05)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config
