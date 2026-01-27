'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import {
  MusicIcon,
  SparklesIcon,
  MessageIcon,
  MapPinIcon,
  ImageIcon,
  GamepadIcon,
  ScanIcon,
  WorkflowIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons'

const projects = [
  {
    id: 1,
    icon: MusicIcon,
    title: 'Spotify Cloth Try-On Plugin',
    category: 'AI Integration',
    description: 'Custom Spotify plugin with ML-powered virtual cloth try-on, enabling seamless platform integration with real-time AR visualization.',
    techStack: ['Spotify SDK', 'TensorFlow', 'ARCore', 'Python', 'REST APIs'],
    metrics: [
      { label: 'Latency', value: '<50ms' },
      { label: 'Accuracy', value: '94%' },
    ],
    gradient: 'from-green-500 to-emerald-600',
    accentColor: 'text-green-400',
  },
  {
    id: 2,
    icon: SparklesIcon,
    title: 'Emergent App & Web Builder',
    category: 'Generative AI',
    description: 'AI-powered wrapper that generates production-ready mobile apps and websites from a single natural language prompt using LLM orchestration.',
    techStack: ['GPT-4', 'React Native', 'Next.js', 'LangChain', 'Vercel'],
    metrics: [
      { label: 'Build Time', value: '<2min' },
      { label: 'Code Quality', value: '98%' },
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: 'text-violet-400',
  },
  {
    id: 3,
    icon: WorkflowIcon,
    title: 'LinkedIn Job Intelligence Scraper',
    category: 'Data Engineering',
    description: 'Automated data extraction pipeline that intelligently scrapes LinkedIn profiles based on job roles, skills, and custom criteria with anti-detection.',
    techStack: ['Puppeteer', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Profiles/hr', value: '10K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    gradient: 'from-blue-500 to-cyan-600',
    accentColor: 'text-blue-400',
  },
  {
    id: 4,
    icon: MessageIcon,
    title: 'AI Diet Plan WhatsApp Bot',
    category: 'Conversational AI',
    description: 'Intelligent WhatsApp bot generating personalized diet plans using NLP, nutritional databases, and user health profiles with multi-turn conversations.',
    techStack: ['WhatsApp API', 'OpenAI', 'MongoDB', 'FastAPI', 'Twilio'],
    metrics: [
      { label: 'Users', value: '50K+' },
      { label: 'Response', value: '<3s' },
    ],
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-400',
  },
  {
    id: 5,
    icon: MapPinIcon,
    title: 'EV Charging Station Finder',
    category: 'Location Intelligence',
    description: 'Real-time geolocation platform discovering nearby EV charging stations with route optimization, availability status, and booking integration.',
    techStack: ['Google Maps API', 'React', 'Node.js', 'WebSocket', 'AWS'],
    link: 'evchargingstationnearme.in',
    metrics: [
      { label: 'Stations', value: '25K+' },
      { label: 'Accuracy', value: '99%' },
    ],
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-400',
  },
  {
    id: 6,
    icon: ImageIcon,
    title: 'AI Product Branding Generator',
    category: 'Computer Vision',
    description: 'End-to-end AI system generating complete product branding—name, theme, visuals, tone, and marketing copy—from a single product image input.',
    techStack: ['Stable Diffusion', 'CLIP', 'GPT-4V', 'Python', 'FastAPI'],
    metrics: [
      { label: 'Generation', value: '<30s' },
      { label: 'Variations', value: '50+' },
    ],
    gradient: 'from-pink-500 to-rose-600',
    accentColor: 'text-pink-400',
  },
  {
    id: 7,
    icon: GamepadIcon,
    title: 'Gaming Café Booking Platform',
    category: 'Full-Stack SaaS',
    description: 'Complete platform for gaming café management—seat booking, time tracking, resource utilization analytics, and automated billing with real-time availability.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    metrics: [
      { label: 'Bookings/day', value: '5K+' },
      { label: 'Efficiency', value: '+40%' },
    ],
    gradient: 'from-indigo-500 to-blue-600',
    accentColor: 'text-indigo-400',
  },
  {
    id: 8,
    icon: ScanIcon,
    title: 'Assembly Line Defect Detection',
    client: 'LG Electronics',
    category: 'Industrial AI',
    description: 'Real-time computer vision solution for manufacturing defect detection with 99.7% accuracy, reducing quality control costs and improving throughput.',
    techStack: ['YOLOv8', 'OpenCV', 'TensorRT', 'NVIDIA Jetson', 'C++'],
    metrics: [
      { label: 'Accuracy', value: '99.7%' },
      { label: 'FPS', value: '60+' },
    ],
    gradient: 'from-red-500 to-orange-600',
    accentColor: 'text-red-400',
  },
]

const categories = ['All', 'AI Integration', 'Generative AI', 'Data Engineering', 'Conversational AI', 'Location Intelligence', 'Computer Vision', 'Full-Stack SaaS', 'Industrial AI']

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">
            Projects that{' '}
            <span className="gradient-text">ship & scale</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-3xl mx-auto">
            From AI-powered platforms to industrial computer vision systems—we build production-grade solutions that deliver measurable impact.
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-lg shadow-accent-purple/25'
                    : 'bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <motion.div
                    className="group relative h-full"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="card h-full border-gradient overflow-hidden">
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      {/* Top Section */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                            <project.icon className={`w-7 h-7 ${project.accentColor}`} />
                          </div>
                          <div>
                            <span className={`text-xs font-semibold uppercase tracking-wider ${project.accentColor}`}>
                              {project.category}
                            </span>
                            {project.client && (
                              <span className="ml-2 text-xs text-text-muted">• {project.client}</span>
                            )}
                          </div>
                        </div>

                        {/* Live Domain Badge */}
                        {project.link && (
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-elevated border border-border text-xs font-mono text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            {project.link}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl lg:text-2xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary text-sm lg:text-base mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-bg-elevated rounded-full text-text-tertiary border border-border group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-6 pt-6 border-t border-border">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className={`text-xl lg:text-2xl font-display font-bold ${project.accentColor}`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-text-muted uppercase tracking-wider">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Animated Border */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none`}
                        animate={{
                          borderColor: hoveredProject === project.id
                            ? 'rgba(139, 92, 246, 0.3)'
                            : 'transparent',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeIn className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-bg-card to-bg-elevated border border-border">
            <p className="text-text-secondary">
              Ready to build something{' '}
              <span className="text-text-primary font-medium">extraordinary</span>?
            </p>
            <Button as="a" href="#contact" variant="primary" size="md">
              Start Your Project
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
