'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'
import { useParallaxEffect } from '@/hooks/use-parallax'
import '@/styles/footer-parallax.css'

export function Footer() {
  useParallaxEffect()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="footer-parallax w-full min-h-[600px] py-16 mt-20">
      <div className="footer-content container mx-auto px-4">
        {/* Main Footer Grid with Stay Connected replacing Contact */}
        <div className="footer-grid mb-16">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/consulting" className="text-gray-400 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/development" className="text-gray-400 hover:text-white transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-400 hover:text-white transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/90">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected Column - Replacing Contact */}
          <div className="stay-connected-column">
            <h3 className="text-xl font-semibold text-white/90 mb-6">Stay Connected</h3>
            
            {/* Newsletter Form - Compact version */}
            <div className="newsletter-compact">
              <p className="newsletter-description-compact">
                Subscribe for updates and insights.
              </p>
              
              <form onSubmit={handleSubscribe} className="newsletter-form-compact">
                <div className="email-input-wrapper-compact">
                  <Mail className="email-icon-compact" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="email-input-compact"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="subscribe-button-compact"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <div className="success-checkmark-compact">✓</div>
                  ) : (
                    <ArrowRight className="arrow-icon-compact" />
                  )}
                </button>
              </form>

              {/* Social Icons - Linear horizontal layout */}
              <div className="social-icons-linear">
                <a
                  href="https://twitter.com/nuviance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-compact"
                  title="Follow us on Twitter"
                >
                  <Twitter className="social-icon-svg" />
                </a>
                <a
                  href="https://github.com/nuviance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-compact"
                  title="Star us on GitHub"
                >
                  <Github className="social-icon-svg" />
                </a>
                <a
                  href="https://linkedin.com/company/nuviance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-compact"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="social-icon-svg" />
                </a>
                <a
                  href="https://instagram.com/nuviance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-compact"
                  title="Follow on Instagram"
                >
                  <Instagram className="social-icon-svg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Brand Container - Logo + Text with intelligent spacing */}
        <div className="brand-container">
          <div className="brand-content">
            {/* Logo Container */}
            <div className="logo-wrapper">
              <Image
                src="/Screenshot_2025-06-26_at_1.15.07_AM-removebg-preview.png"
                alt="Nuviance Logo"
                width={400}
                height={400}
                className="brand-logo"
                priority
              />
            </div>
            
            {/* Text Container */}
            <div className="text-wrapper">
              <h2 className="brand-text">NUVIANCE</h2>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright and Legal */}
        <div className="footer-bottom">
          <div className="copyright-section">
            <p className="copyright-text">
              © {new Date().getFullYear()} Nuviance. All rights reserved.
            </p>
          </div>
          
          <div className="legal-links">
            <Link href="/privacy" className="legal-link">
              Privacy Policy
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/terms" className="legal-link">
              Terms of Service
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/cookies" className="legal-link">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}