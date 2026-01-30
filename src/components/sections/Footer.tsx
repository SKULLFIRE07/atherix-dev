'use client'

import { XIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'

const socialLinks = [
  { href: 'https://x.com/atherix_dev', icon: XIcon, label: 'Follow Atherix on X (Twitter)' },
  { href: 'https://www.linkedin.com/in/atherix-dev/', icon: LinkedInIcon, label: 'Connect with Atherix on LinkedIn' },
  { href: 'https://www.instagram.com/atherix.dev', icon: InstagramIcon, label: 'Follow Atherix on Instagram' },
]

const services = [
  { href: '#portfolio', label: 'AI Agent Development' },
  { href: '#portfolio', label: 'Chatbot Development' },
  { href: '#portfolio', label: 'ML Solutions' },
  { href: '#portfolio', label: 'Automation Systems' },
]

const company = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#portfolio', label: 'Our Projects' },
  { href: '#contact', label: 'Contact Us' },
]

export function Footer() {
  return (
    <footer className="py-20 bg-black relative z-10" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block" aria-label="Atherix.dev - AI Automation Studio">
              <span className="font-display text-2xl font-semibold">
                Atherix<span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-base text-text-tertiary mt-4 leading-relaxed">
              India&apos;s leading <strong>AI automation studio</strong>. We build custom <strong>AI agents</strong>, intelligent automation systems, and production-grade <strong>machine learning solutions</strong>.
            </p>
            <p className="text-sm text-text-muted mt-4 font-mono">
              If you can imagine it, we can build it.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-tertiary hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-tertiary hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <p className="text-text-tertiary text-sm mb-4">
              Ready to build your next <strong>AI project</strong>? Let&apos;s talk.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-tertiary hover:text-white hover:border-white/30 transition-all duration-300"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SEO-rich bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Keywords-rich tagline */}
            <p className="text-sm text-text-muted max-w-2xl">
              <span className="text-accent-green font-mono">//</span> Atherix.dev specializes in <strong>AI development</strong>, <strong>GPT integration</strong>, <strong>LangChain applications</strong>, and <strong>custom automation solutions</strong> for startups and enterprises worldwide.
            </p>

            {/* Copyright */}
            <p className="text-sm text-text-muted font-mono whitespace-nowrap">
              &copy; {new Date().getFullYear()} Atherix.dev — All rights reserved
            </p>
          </div>

          {/* Additional SEO text */}
          <p className="text-xs text-text-muted/60 mt-6 max-w-4xl">
            Atherix.dev is a remote-first AI automation studio serving clients in India, USA, UK, Canada, Australia, and Europe. We offer AI agent development, chatbot development, machine learning solutions, GPT-4 integration, OpenAI API implementation, and intelligent process automation services.
          </p>
        </div>
      </div>
    </footer>
  )
}
