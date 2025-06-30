"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Search,
  MessageSquare,
  BarChart3,
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react"

const capabilities = [
  {
    id: 1,
    icon: Search,
    title: "Real-Time Candidate Discovery",
    description: "AI agents continuously scan 50+ platforms including LinkedIn, GitHub, and Stack Overflow to discover top talent that matches your exact requirements.",
    stats: "50+ platforms",
    metric: "24/7 scanning",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Intelligent Communication Hub",
    description: "Automated personalized outreach and follow-ups across multiple channels with AI-powered conversation management and response tracking.",
    stats: "89% response rate",
    metric: "Auto-personalized",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description: "Bank-grade encryption, secure data handling, and full compliance with GDPR, CCPA, and industry standards for candidate data protection.",
    stats: "GDPR compliant",
    metric: "Bank-grade security",
    color: "purple",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Comprehensive insights into AI agent performance, candidate pipeline metrics, sourcing effectiveness, and recruitment ROI analytics.",
    stats: "Real-time insights",
    metric: "360° analytics",
    color: "orange",
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    icon: Target,
    title: "Precision Matching Algorithm",
    description: "Advanced AI algorithms evaluate candidates across technical skills, cultural fit, experience level, and career trajectory for perfect matches.",
    stats: "92% accuracy",
    metric: "Multi-dimensional",
    color: "teal",
    gradient: "from-teal-500 to-emerald-600"
  },
  {
    id: 6,
    icon: Globe,
    title: "Seamless Platform Integration",
    description: "Connect with your existing ATS, HRIS, Slack, Teams, and 100+ other tools for a unified recruitment workflow and data synchronization.",
    stats: "100+ integrations",
    metric: "One-click setup",
    color: "indigo",
    gradient: "from-indigo-500 to-blue-600"
  }
]

export function AICapabilitiesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true)
          } else if (cardRefs.current.includes(entry.target as HTMLDivElement) && entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridPulse 8s ease-in-out infinite',
          }}
        />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div 
          ref={headerRef}
          suppressHydrationWarning
          className={cn(
            "text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out",
            isHeaderVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-12"
          )}
        >
          {/* Subtitle with Icon */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              AI-Powered Capabilities
            </span>
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 animate-pulse" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Intelligent Recruitment
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by AI Agents
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            Transform your hiring process with our comprehensive suite of AI-powered tools. 
            From candidate discovery to final placement, our intelligent agents work around the clock 
            to find, engage, and qualify the perfect talent for your organization.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full mx-4 animate-pulse"></div>
            <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
        </div>

        {/* Enhanced Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              ref={(el) => { cardRefs.current[index] = el }}
              suppressHydrationWarning
              className={cn(
                "group relative transition-all duration-700 ease-out",
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl">
                
                {/* Dynamic Background Glow */}
                <div className={cn(
                  "absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl",
                  `bg-gradient-to-br ${capability.gradient} opacity-10`
                )} />

                {/* Floating Accent Dot */}
                <div className={cn(
                  "absolute -top-2 -right-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse",
                  capability.color === "emerald" && "bg-emerald-500",
                  capability.color === "blue" && "bg-blue-500",
                  capability.color === "purple" && "bg-purple-500",
                  capability.color === "orange" && "bg-orange-500",
                  capability.color === "teal" && "bg-teal-500",
                  capability.color === "indigo" && "bg-indigo-500"
                )} />

                {/* Card Content */}
                <div className="relative z-10">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    {/* Icon */}
                    <div className={cn(
                      "w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                      `bg-gradient-to-br ${capability.gradient} shadow-lg`
                    )}>
                      <capability.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="flex flex-col items-end gap-1">
                      <div className={cn(
                        "px-2 sm:px-3 py-1 rounded-full text-xs font-bold",
                        capability.color === "emerald" && "bg-emerald-500/20 text-emerald-300",
                        capability.color === "blue" && "bg-blue-500/20 text-blue-300",
                        capability.color === "purple" && "bg-purple-500/20 text-purple-300",
                        capability.color === "orange" && "bg-orange-500/20 text-orange-300",
                        capability.color === "teal" && "bg-teal-500/20 text-teal-300",
                        capability.color === "indigo" && "bg-indigo-500/20 text-indigo-300"
                      )}>
                        {capability.stats}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {capability.metric}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors leading-tight">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                    {capability.description}
                  </p>

                  {/* Action Link */}
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className={cn(
                      "inline-flex items-center text-sm font-semibold cursor-pointer",
                      capability.color === "emerald" && "text-emerald-400 hover:text-emerald-300",
                      capability.color === "blue" && "text-blue-400 hover:text-blue-300",
                      capability.color === "purple" && "text-purple-400 hover:text-purple-300",
                      capability.color === "orange" && "text-orange-400 hover:text-orange-300",
                      capability.color === "teal" && "text-teal-400 hover:text-teal-300",
                      capability.color === "indigo" && "text-indigo-400 hover:text-indigo-300"
                    )}>
                      Explore feature
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Corner Gradient Accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-5 group-hover:opacity-15 transition-opacity duration-500",
                  `bg-gradient-to-br ${capability.gradient}`
                )} style={{
                  clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl px-8 sm:px-12 py-8 sm:py-10 border border-gray-600/20 shadow-2xl">
            
            {/* Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-emerald-400 text-sm font-semibold">AI Agents Active & Ready</span>
            </div>

            {/* Main CTA Text */}
            <div className="text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ready to Transform Your Hiring Process?
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Join thousands of companies already using AI agents to find and hire top talent faster than ever before.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Brain className="w-4 sm:w-5 h-4 sm:h-5 group-hover:animate-pulse" />
                Deploy AI Agents Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="text-gray-300 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:bg-gray-800/50">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>Enterprise Security</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>GDPR Compliant</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.03;
            background-position: 0 0, 0 0;
          }
          50% {
            opacity: 0.08;
            background-position: 40px 40px, 40px 40px;
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}