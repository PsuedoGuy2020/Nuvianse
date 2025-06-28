'use client'

import { useEffect } from 'react'

export function useParallaxEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer-parallax') as HTMLElement
      if (!footer) return

      const scrolled = window.scrollY
      const rate = scrolled * 0.05 // Adjust this value to control parallax speed
      
      // Apply the parallax effect
      footer.style.backgroundPosition = `center ${rate}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
