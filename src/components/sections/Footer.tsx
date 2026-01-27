'use client'

import { XIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'

const socialLinks = [
  { href: 'https://x.com/atherix_dev', icon: XIcon, label: 'X (Twitter)' },
  { href: 'https://www.linkedin.com/in/atherix-dev/', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/atherix.dev', icon: InstagramIcon, label: 'Instagram' },
]

const footerLinks = [
  { href: '#', label: 'Privacy' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="py-20 bg-black relative z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold">
              Atherix<span className="gradient-text">.dev</span>
            </span>
            <p className="text-base text-text-tertiary mt-3 max-w-xs">
              Pioneering the future of AI systems. If you can imagine it, we can build it.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-text-tertiary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-accent-blue/50 hover:shadow-glow-sm transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-text-muted">
          <p className="font-mono">
            <span className="text-accent-green">//</span> Pioneers in AI technology. Building tomorrow, today.
          </p>
          <p className="font-mono">
            <span className="text-accent-blue">&copy;</span> {new Date().getFullYear()} Atherix.dev <span className="text-accent-green">—</span> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
