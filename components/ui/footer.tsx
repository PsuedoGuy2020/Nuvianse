'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { useParallaxEffect } from '@/hooks/use-parallax'
import '@/styles/footer-parallax.css'

export function Footer() {
  useParallaxEffect()

  return (
    <footer className="footer-parallax w-full min-h-[700px] py-20 mt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>
        
        {/* Gradient overlays */}
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
      </div>

      <div className="footer-content container mx-auto px-4 relative z-10">
        {/* Enhanced Footer Grid */}
        <div className="enhanced-footer-grid mb-20">
          {/* Company Info Column */}
          <div className="footer-section company-section">
            <h3 className="section-title">About Nuviance</h3>
            <p className="company-description">
              Revolutionizing financial technology with cutting-edge AI solutions and secure payment processing. 
              Your trusted partner in digital transformation.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>hello@nuviance.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-section">
            <h3 className="section-title">Services</h3>
            <ul className="footer-links">
              <li>
                <Link href="/ai-insights" className="footer-link premium-link">
                  AI Financial Insights
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link premium-link">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/payments" className="footer-link premium-link">
                  Payment Processing
                </Link>
              </li>
              <li>
                <Link href="/security" className="footer-link premium-link">
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="footer-link premium-link">
                  Advanced Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-section">
            <h3 className="section-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <Link href="/blog" className="footer-link premium-link">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/docs" className="footer-link premium-link">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="footer-link premium-link">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/support" className="footer-link premium-link">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="footer-link premium-link">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter Column */}
          <div className="footer-section social-section">
            <h3 className="section-title">Stay Connected</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            {/* Newsletter Signup */}
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Subscribe
              </button>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="social-links-enhanced">
              <a
                href="https://twitter.com/nuviance"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced twitter"
              >
                <Twitter className="social-icon" />
                <span className="social-tooltip">Follow us on Twitter</span>
              </a>
              <a
                href="https://github.com/nuviance"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced github"
              >
                <Github className="social-icon" />
                <span className="social-tooltip">Star us on GitHub</span>
              </a>
              <a
                href="https://linkedin.com/company/nuviance"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced linkedin"
              >
                <Linkedin className="social-icon" />
                <span className="social-tooltip">Connect on LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/nuviance"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-enhanced instagram"
              >
                <Instagram className="social-icon" />
                <span className="social-tooltip">Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Enhanced Brand Container with Glow Effects */}
        <div className="brand-container-enhanced">
          <div className="brand-content-enhanced">
            {/* Glowing Logo Container */}
            <div className="logo-wrapper-enhanced">
              <div className="logo-glow-container">
                <Image
                  src="/Screenshot_2025-06-26_at_1.15.07_AM-removebg-preview.png"
                  alt="Nuviance Logo"
                  width={400}
                  height={400}
                  className="brand-logo-enhanced"
                  priority
                />
                {/* Multiple glow layers */}
                <div className="logo-glow-layer glow-layer-1"></div>
                <div className="logo-glow-layer glow-layer-2"></div>
                <div className="logo-glow-layer glow-layer-3"></div>
              </div>
            </div>
            
            {/* Glowing Text Container */}
            <div className="text-wrapper-enhanced">
              <h2 className="brand-text-enhanced">
                <span className="text-glow-container">
                  NUVIANCE
                  {/* Text glow layers */}
                  <span className="text-glow-layer text-glow-1">NUVIANCE</span>
                  <span className="text-glow-layer text-glow-2">NUVIANCE</span>
                  <span className="text-glow-layer text-glow-3">NUVIANCE</span>
                </span>
              </h2>
              <p className="brand-tagline">
                Illuminating the Future of Finance
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="copyright-enhanced">
          <div className="copyright-content">
            <p>© {new Date().getFullYear()} Nuviance. All rights reserved.</p>
            <div className="legal-links">
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>
              <Link href="/terms" className="legal-link">Terms of Service</Link>
              <Link href="/cookies" className="legal-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}