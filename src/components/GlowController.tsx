 'use client'

import { useEffect } from 'react'

export function GlowController() {
  useEffect(() => {
    let lastScrollY: number | null = null
    let rafId: number | null = null
    let targetActive = false

    const updateClass = () => {
      const html = document.documentElement
      if (targetActive) {
        html.classList.add('glow-active')
      } else {
        html.classList.remove('glow-active')
      }
      rafId = null
    }

    const onScroll = () => {
      const currentY = window.scrollY

      if (lastScrollY === null) {
        lastScrollY = currentY
        return
      }

      const delta = currentY - lastScrollY
      lastScrollY = currentY

      // Scrolling down (positive delta) -> show glow text
      if (delta > 0) {
        targetActive = true
      }

      // Scrolling up (negative delta) -> hide glow text
      if (delta < 0) {
        targetActive = false
      }

      if (rafId == null) {
        rafId = window.requestAnimationFrame(updateClass)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId != null) window.cancelAnimationFrame(rafId)
      document.documentElement.classList.remove('glow-active')
    }
  }, [])

  return null
}

