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
  Globe
} from "lucide-react"

const capabilities = [
  {
    id: 1,
    icon: Search,
    title: "Real-Time Candidate Discovery",
    description: "Get instant notifications when AI agents discover candidates matching your criteria, ensuring you're always in control of your talent pipeline.",
    stats: "50+ platforms scanned",
    color: "emerald"
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Intelligent Communication Hub",
    description: "Manage all candidate interactions through multiple channels, whether it's email, LinkedIn, or direct messaging with automated follow-ups.",
    stats: "89% response rate",
    color: "blue"
  },
  {
    id: 3,
    icon: Shield,
    title: "Secure Candidate Management",
    description: "Protect candidate data with advanced security features like encryption, secure access controls, and compliance monitoring.",
    stats: "GDPR compliant",
    color: "purple"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Track AI agent performance, candidate pipeline metrics, and recruitment ROI with comprehensive real-time analytics.",
    stats: "24/7 monitoring",
    color: "orange"
  },
  {
    id: 5,
    icon: Target,
    title: "Precision Matching Algorithm",
    description: "AI agents use advanced algorithms to match candidates based on skills, experience, culture fit, and career aspirations.",
    stats: "92% accuracy rate",
    color: "teal"
  },
  {
    id: 6,
    icon: Globe,
    title: "Multi-Platform Integration",
    description: "Seamlessly connect with your existing ATS, HRIS, and communication tools for a unified recruitment workflow.",
    stats: "100+ integrations",
    color: "indigo"
  }
]

export function AICapabilitiesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful AI Capabilities
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built for Modern Recruiting
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the future of talent acquisition with our comprehensive suite of AI-powered tools designed to streamline every aspect of your recruitment process.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className={cn(
                "group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500",
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              {/* Background Glow */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                capability.color === "emerald" && "bg-emerald-500/10",
                capability.color === "blue" && "bg-blue-500/10",
                capability.color === "purple" && "bg-purple-500/10",
                capability.color === "orange" && "bg-orange-500/10",
                capability.color === "teal" && "bg-teal-500/10",
                capability.color === "indigo" && "bg-indigo-500/10"
              )} />

              {/* Card Content */}
              <div className="relative z-10">
                
                {/* Icon & Stats */}
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                    capability.color === "emerald" && "bg-emerald-500/20 text-emerald-400",
                    capability.color === "blue" && "bg-blue-500/20 text-blue-400",
                    capability.color === "purple" && "bg-purple-500/20 text-purple-400",
                    capability.color === "orange" && "bg-orange-500/20 text-orange-400",
                    capability.color === "teal" && "bg-teal-500/20 text-teal-400",
                    capability.color === "indigo" && "bg-indigo-500/20 text-indigo-400"
                  )}>
                    <capability.icon className="w-6 h-6" />
                  </div>
                  
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    capability.color === "emerald" && "bg-emerald-500/20 text-emerald-400",
                    capability.color === "blue" && "bg-blue-500/20 text-blue-400",
                    capability.color === "purple" && "bg-purple-500/20 text-purple-400",
                    capability.color === "orange" && "bg-orange-500/20 text-orange-400",
                    capability.color === "teal" && "bg-teal-500/20 text-teal-400",
                    capability.color === "indigo" && "bg-indigo-500/20 text-indigo-400"
                  )}>
                    {capability.stats}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {capability.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <div className={cn(
                    "inline-flex items-center text-sm font-medium",
                    capability.color === "emerald" && "text-emerald-400",
                    capability.color === "blue" && "text-blue-400",
                    capability.color === "purple" && "text-purple-400",
                    capability.color === "orange" && "text-orange-400",
                    capability.color === "teal" && "text-teal-400",
                    capability.color === "indigo" && "text-indigo-400"
                  )}>
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className={cn(
                "absolute top-0 right-0 w-20 h-20 opacity-10 transition-opacity duration-300 group-hover:opacity-20",
                capability.color === "emerald" && "bg-emerald-500",
                capability.color === "blue" && "bg-blue-500",
                capability.color === "purple" && "bg-purple-500",
                capability.color === "orange" && "bg-orange-500",
                capability.color === "teal" && "bg-teal-500",
                capability.color === "indigo" && "bg-indigo-500"
              )} style={{
                clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
              }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-600/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">AI Agents Active</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <span className="text-gray-300 text-sm">Ready to transform your hiring process?</span>
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}