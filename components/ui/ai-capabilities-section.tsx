"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Brain, 
  Cpu, 
  Network, 
  Zap, 
  Eye, 
  MessageCircle,
  BarChart3,
  Shield,
  Clock,
  Users
} from "lucide-react"

export function AiCapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const capabilities = [
    {
      icon: Brain,
      title: "Neural Candidate Analysis",
      description: "Advanced deep learning models analyze candidate profiles, skills, and career trajectories to predict job fit and success probability.",
      stats: "99.2% Accuracy",
      color: "emerald"
    },
    {
      icon: Eye,
      title: "Intelligent Resume Parsing",
      description: "AI-powered OCR and NLP extract and structure candidate information from resumes, portfolios, and social profiles automatically.",
      stats: "50+ Data Points",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Conversational AI Screening",
      description: "Natural language processing conducts initial candidate interviews and assessments through intelligent chatbot interactions.",
      stats: "24/7 Availability",
      color: "purple"
    },
    {
      icon: Network,
      title: "Predictive Talent Mapping",
      description: "Machine learning algorithms predict candidate availability, salary expectations, and likelihood to accept offers.",
      stats: "85% Prediction Rate",
      color: "orange"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCapability((prev) => (prev + 1) % capabilities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [capabilities.length])

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500/20 to-emerald-600/20",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        glow: "shadow-emerald-500/20"
      },
      blue: {
        bg: "from-blue-500/20 to-blue-600/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        glow: "shadow-blue-500/20"
      },
      purple: {
        bg: "from-purple-500/20 to-purple-600/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
        glow: "shadow-purple-500/20"
      },
      orange: {
        bg: "from-orange-500/20 to-orange-600/20",
        border: "border-orange-500/30",
        text: "text-orange-400",
        glow: "shadow-orange-500/20"
      }
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridFloat 20s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Advanced AI Capabilities
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge artificial intelligence and machine learning technologies that revolutionize how you discover, evaluate, and engage with top talent.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - AI Visualization */}
          <div className="relative">
            <div 
              className={cn(
                "relative transition-all duration-1000 ease-out",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
            >
              {/* Central AI Brain */}
              <div className="relative w-80 h-80 mx-auto">
                
                {/* Main Brain Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
                  
                  {/* Central Brain Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <Brain className="w-12 h-12 text-emerald-400" />
                    </div>
                  </div>

                  {/* Orbiting Capability Icons */}
                  {capabilities.map((capability, index) => {
                    const angle = (index * 90) - 45 // Distribute evenly around circle
                    const radius = 120
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    const colors = getColorClasses(capability.color)
                    
                    return (
                      <div
                        key={index}
                        className={cn(
                          "absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer",
                          `bg-gradient-to-r ${colors.bg}`,
                          `border ${colors.border}`,
                          index === activeCapability 
                            ? `shadow-lg ${colors.glow} scale-110` 
                            : "scale-100 opacity-70"
                        )}
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                          animation: `orbit${index} 8s linear infinite`,
                        }}
                        onClick={() => setActiveCapability(index)}
                      >
                        <capability.icon className={cn("w-8 h-8", colors.text)} />
                      </div>
                    )
                  })}

                  {/* Connection Lines */}
                  {capabilities.map((_, index) => {
                    const angle = (index * 90) - 45
                    const isActive = index === activeCapability
                    
                    return (
                      <div
                        key={`line-${index}`}
                        className={cn(
                          "absolute w-px h-24 bg-gradient-to-t transition-all duration-500",
                          isActive 
                            ? "from-emerald-500/50 to-transparent opacity-100" 
                            : "from-gray-600/30 to-transparent opacity-30"
                        )}
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: 'bottom',
                          transform: `rotate(${angle}deg) translateY(-3rem)`,
                        }}
                      />
                    )
                  })}
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 -left-8 w-2 h-2 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 -right-8 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl scale-150 -z-10"></div>
            </div>
          </div>

          {/* Right Side - Capability Details */}
          <div className="space-y-8">
            
            {/* Active Capability Display */}
            <div 
              className={cn(
                "transition-all duration-500",
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              )}
            >
              {capabilities.map((capability, index) => {
                const colors = getColorClasses(capability.color)
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "transition-all duration-500",
                      index === activeCapability 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4 absolute"
                    )}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={cn(
                        "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border",
                        `bg-gradient-to-r ${colors.bg}`,
                        colors.border
                      )}>
                        <capability.icon className={cn("w-8 h-8", colors.text)} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{capability.title}</h3>
                        <div className={cn("text-sm font-semibold mb-3", colors.text)}>
                          {capability.stats}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {capability.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Capability Navigation */}
            <div className="flex gap-3 mt-8">
              {capabilities.map((capability, index) => {
                const colors = getColorClasses(capability.color)
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCapability(index)}
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300",
                      index === activeCapability 
                        ? `bg-gradient-to-r ${colors.bg} ${colors.border} shadow-lg ${colors.glow}` 
                        : "bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50"
                    )}
                  >
                    <capability.icon className={cn(
                      "w-6 h-6 transition-colors duration-300",
                      index === activeCapability ? colors.text : "text-gray-500"
                    )} />
                  </button>
                )
              })}
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">10M+</div>
                <div className="text-sm text-gray-400">Profiles Analyzed</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-1">99.7%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
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
        
        @keyframes orbit0 {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        
        @keyframes orbit1 {
          from { transform: rotate(90deg) translateX(120px) rotate(-90deg); }
          to { transform: rotate(450deg) translateX(120px) rotate(-450deg); }
        }
        
        @keyframes orbit2 {
          from { transform: rotate(180deg) translateX(120px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(120px) rotate(-540deg); }
        }
        
        @keyframes orbit3 {
          from { transform: rotate(270deg) translateX(120px) rotate(-270deg); }
          to { transform: rotate(630deg) translateX(120px) rotate(-630deg); }
        }
      `}</style>
    </section>
  )
}