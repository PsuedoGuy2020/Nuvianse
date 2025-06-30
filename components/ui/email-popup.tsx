"use client"

import { useState, useEffect } from 'react'
import { X, Mail, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { submitEmail } from '@/lib/supabase'

interface EmailPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function EmailPopup({ 
  isOpen, 
  onClose, 
  title = "Join the AI Revolution",
  description = "Get early access to NUVIANSE AI agents and transform your hiring process. Be the first to experience the future of recruitment."
}: EmailPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await submitEmail(email)
      
      if (result.success) {
        setSubmitStatus('success')
        // Auto-close after 2 seconds on success
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit email. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500/60 rounded-full animate-pulse" />
        <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 z-10"
          disabled={isSubmitting}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="relative p-6 sm:p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-2">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={cn(
                  "w-full pl-11 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200",
                  submitStatus === 'error' 
                    ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500" 
                    : "border-gray-600/50 focus:ring-emerald-500/50 focus:border-emerald-500"
                )}
                disabled={isSubmitting || submitStatus === 'success'}
                required
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && errorMessage && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Success! Welcome to the AI revolution. We'll be in touch soon!</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className={cn(
                "w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2",
                isSubmitting || submitStatus === 'success'
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02]"
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Submitted!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Get Early Access</span>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Terms of Service
              </a>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Secure</span>
            </div>
            <div className="w-px h-3 bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No Spam</span>
            </div>
            <div className="w-px h-3 bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}