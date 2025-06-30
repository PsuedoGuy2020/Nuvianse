"use client"

import { useState, useEffect } from 'react'

export function useEmailPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  // Auto-open popup after 3 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only auto-open if user hasn't already seen it (you can add localStorage logic here)
      const hasSeenPopup = localStorage.getItem('hasSeenEmailPopup')
      if (!hasSeenPopup) {
        setIsOpen(true)
        localStorage.setItem('hasSeenEmailPopup', 'true')
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return {
    isOpen,
    openPopup,
    closePopup
  }
}