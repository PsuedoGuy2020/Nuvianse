"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Brain, Users, Zap, Shield, Target, TrendingUp, Clock, CheckCircle } from "lucide-react"

const showcaseFeatures = [
  {
    id: 1,
    icon: Brain,
    title: "AI-Powered Candidate Discovery",
    description: "Our intelligent agents scan 50+ platforms including LinkedIn, GitHub, Stack Overflow, and niche job boards to discover hidden talent that matches your exact requirements.",
    color: "emerald"
  },
  {
    id: 2,
    icon: Target,
    title: "Smart Screening & Assessment",
    description: "Advanced AI algorithms evaluate candidates across technical skills, cultural fit, and career trajectory, providing detailed compatibility scores and insights.",
    color: "blue"
  },
  {
    id: 3,
    icon: Zap,
    title: "Automated Engagement Workflows",
    description: "Personalized outreach sequences that adapt based on candidate responses, maintaining consistent communication throughout the entire hiring process.",
    color: "purple"
  },
  {
    id: 4,
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Protect sensitive candidate data with advanced encryption, secure API integrations, and compliance with GDPR, CCPA, and industry standards.",
    color: "orange"
  }
]

export function FeaturesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridFloat 15s ease-in-out infinite',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div 
              suppressHydrationWarning
              className={cn(
                "relative transition-all duration-1000 ease-out",
                isVisible 
                  ? "opacity-100 translate-y-0 rotate-0" 
                  : "opacity-0 translate-y-8 -rotate-6"
              )}
            >
              {/* Phone Container */}
              <div className="relative w-72 sm:w-80 h-[540px] sm:h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl">
                
                {/* Phone Screen */}
                <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 text-white text-xs sm:text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/50 rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 h-full">
                    
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                        Discover The Key to Your AI Hiring Future
                      </h3>
                    </div>

                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 overflow-hidden">
                      
                      {/* Background Decorations */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 right-6 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 bg-white/15 rounded-full"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10">
                        <div className="text-white/90 text-xs sm:text-sm mb-2">AI Agents Active</div>
                        <div className="text-white text-2xl sm:text-3xl font-bold mb-1">247</div>
                        <div className="text-white/80 text-xs mb-3 sm:mb-4">Candidates Sourced</div>
                        
                        {/* Progress Line */}
                        <div className="w-full h-1 bg-white/20 rounded-full mb-3 sm:mb-4">
                          <div className="w-3/4 h-full bg-white/60 rounded-full"></div>
                        </div>
                        
                        {/* Bottom Info */}
                        <div className="flex justify-between items-center text-white/80 text-xs">
                          <span>Success Rate</span>
                          <span>89%</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                        <div className="text-emerald-400 text-base sm:text-lg font-bold">156</div>
                        <div className="text-gray-400 text-xs">Interviews Scheduled</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                        <div className="text-blue-400 text-base sm:text-lg font-bold">42</div>
                        <div className="text-gray-400 text-xs">Offers Extended</div>
                      </div>
                    </div>

                    {/* Bottom Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Phone Highlights */}
                <div className="absolute -top-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 bg-emerald-500/60 rounded-full animate-ping"></div>
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-3 sm:w-4 h-3 sm:h-4 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Floating Elements Around Phone */}
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16 bg-purple-500/20 rounded-full blur-sm animate-float"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-10 sm:w-12 h-10 sm:h-12 bg-emerald-500/20 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            
            {/* Section Header */}
            <div 
              suppressHydrationWarning
              className={cn(
                "transition-all duration-1000 ease-out",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                FEEL THE BEST EXPERIENCE
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  WITH OUR AI AGENTS
                </span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Enjoy simple, intelligent features for effortless talent acquisition. Track candidates in real-time and handle recruitment seamlessly on one easy-to-use platform.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {showcaseFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  suppressHydrationWarning
                  className={cn(
                    "flex items-start gap-3 sm:gap-4 transition-all duration-1000 ease-out",
                    isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-8"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className={cn(
                    "flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center",
                    feature.color === "emerald" && "bg-emerald-500/20 text-emerald-400",
                    feature.color === "blue" && "bg-blue-500/20 text-blue-400",
                    feature.color === "purple" && "bg-purple-500/20 text-purple-400",
                    feature.color === "orange" && "bg-orange-500/20 text-orange-400"
                  )}>
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              suppressHydrationWarning
              className={cn(
                "pt-4 sm:pt-6 transition-all duration-1000 ease-out",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )} 
              style={{ transitionDelay: '800ms' }}
            >
              <button className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Your AI Journey
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 group-hover:animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gridFloat {
          0%, 100% {
            background-position: 0 0, 0 0;
          }
          50% {
            background-position: 30px 30px, 30px 30px;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}