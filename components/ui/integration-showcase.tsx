"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Slack, 
  Github, 
  Linkedin, 
  Mail, 
  Calendar, 
  Database,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BarChart3
} from "lucide-react"

export function IntegrationShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIntegration, setActiveIntegration] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const integrations = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Direct candidate sourcing and profile analysis",
      color: "blue",
      status: "Active",
      connections: "2.4M+"
    },
    {
      name: "GitHub",
      icon: Github,
      description: "Technical skill assessment and code analysis",
      color: "gray",
      status: "Active",
      connections: "890K+"
    },
    {
      name: "Slack",
      icon: Slack,
      description: "Team notifications and collaboration",
      color: "purple",
      status: "Active",
      connections: "15K+"
    },
    {
      name: "Gmail",
      icon: Mail,
      description: "Automated email campaigns and responses",
      color: "red",
      status: "Active",
      connections: "1.2M+"
    },
    {
      name: "Calendar",
      icon: Calendar,
      description: "Interview scheduling and availability",
      color: "emerald",
      status: "Active",
      connections: "45K+"
    },
    {
      name: "ATS Systems",
      icon: Database,
      description: "Seamless candidate data synchronization",
      color: "orange",
      status: "Active",
      connections: "120+"
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
      setActiveIntegration((prev) => (prev + 1) % integrations.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [integrations.length])

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500/20 to-blue-600/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        dot: "bg-blue-400"
      },
      gray: {
        bg: "from-gray-500/20 to-gray-600/20",
        border: "border-gray-500/30",
        text: "text-gray-400",
        dot: "bg-gray-400"
      },
      purple: {
        bg: "from-purple-500/20 to-purple-600/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
        dot: "bg-purple-400"
      },
      red: {
        bg: "from-red-500/20 to-red-600/20",
        border: "border-red-500/30",
        text: "text-red-400",
        dot: "bg-red-400"
      },
      emerald: {
        bg: "from-emerald-500/20 to-emerald-600/20",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        dot: "bg-emerald-400"
      },
      orange: {
        bg: "from-orange-500/20 to-orange-600/20",
        border: "border-orange-500/30",
        text: "text-orange-400",
        dot: "bg-orange-400"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'diagonalMove 15s linear infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Seamless Platform Integration
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect TalentAI with your existing tools and workflows. Our AI agents work across all major platforms to create a unified recruitment ecosystem.
          </p>
        </div>

        {/* Main Integration Hub */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Hub */}
          <div className="relative">
            
            {/* Central TalentAI Node */}
            <div 
              className={cn(
                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 transition-all duration-1000 ease-out z-20",
                isVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-50"
              )}
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">TalentAI</div>
                  <div className="text-emerald-400 text-xs">Core</div>
                </div>
              </div>
              
              {/* Pulsing Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse -z-10"></div>
            </div>

            {/* Integration Nodes */}
            <div className="relative w-full h-96">
              {integrations.map((integration, index) => {
                const angle = (index * 60) - 30 // Distribute around circle
                const radius = 160
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                const colors = getColorClasses(integration.color)
                const isActive = index === activeIntegration
                
                return (
                  <div key={index} className="absolute left-1/2 top-1/2">
                    
                    {/* Connection Line */}
                    <div
                      className={cn(
                        "absolute w-px h-32 transition-all duration-500",
                        isActive 
                          ? "bg-gradient-to-t from-emerald-500/50 to-transparent opacity-100" 
                          : "bg-gradient-to-t from-gray-600/30 to-transparent opacity-40"
                      )}
                      style={{
                        transformOrigin: 'bottom',
                        transform: `rotate(${angle}deg) translateY(-4rem)`,
                      }}
                    />

                    {/* Integration Node */}
                    <div
                      className={cn(
                        "absolute w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-500 cursor-pointer",
                        `bg-gradient-to-r ${colors.bg}`,
                        `border ${colors.border}`,
                        isActive 
                          ? "scale-110 shadow-lg shadow-white/10" 
                          : "scale-100 opacity-80 hover:opacity-100 hover:scale-105"
                      )}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setActiveIntegration(index)}
                    >
                      <integration.icon className={cn("w-8 h-8", colors.text)} />
                      
                      {/* Status Indicator */}
                      <div className={cn(
                        "absolute -top-1 -right-1 w-3 h-3 rounded-full",
                        colors.dot,
                        "animate-pulse"
                      )}></div>
                    </div>

                    {/* Integration Label */}
                    <div
                      className={cn(
                        "absolute text-center transition-all duration-500",
                        isActive ? "opacity-100" : "opacity-60"
                      )}
                      style={{
                        left: `${x}px`,
                        top: `${y + 50}px`,
                        transform: 'translate(-50%, 0)',
                      }}
                    >
                      <div className="text-white text-sm font-medium">{integration.name}</div>
                      <div className={cn("text-xs", colors.text)}>{integration.connections}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Data Flow Animation */}
            {isVisible && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-60"
                    style={{
                      left: '50%',
                      top: '50%',
                      animation: `dataFlow${i} 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Active Integration Details */}
          <div className="mt-16 text-center">
            <div 
              className={cn(
                "transition-all duration-500",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              {integrations.map((integration, index) => {
                const colors = getColorClasses(integration.color)
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "transition-all duration-500",
                      index === activeIntegration 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4 absolute"
                    )}
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <integration.icon className={cn("w-8 h-8", colors.text)} />
                        <h3 className="text-2xl font-bold text-white">{integration.name} Integration</h3>
                        <div className="flex items-center gap-1">
                          <div className={cn("w-2 h-2 rounded-full", colors.dot, "animate-pulse")}></div>
                          <span className={cn("text-sm", colors.text)}>{integration.status}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Integration Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            
            <div 
              className={cn(
                "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-200",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h4 className="text-lg font-semibold text-white">Connected Platforms</h4>
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">50+</div>
              <p className="text-gray-400 text-sm">Active integrations across recruitment ecosystem</p>
            </div>

            <div 
              className={cn(
                "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-400",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Setup Time</h4>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">< 5min</div>
              <p className="text-gray-400 text-sm">Average integration configuration time</p>
            </div>

            <div 
              className={cn(
                "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-600",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                <h4 className="text-lg font-semibold text-white">Data Sync</h4>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">Real-time</div>
              <p className="text-gray-400 text-sm">Instant synchronization across all platforms</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes diagonalMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 30px 30px, -30px 30px;
          }
        }
        
        @keyframes dataFlow0 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(160px, 0) scale(1); opacity: 0; }
        }
        
        @keyframes dataFlow1 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(80px, 138px) scale(1); opacity: 0; }
        }
        
        @keyframes dataFlow2 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(-80px, 138px) scale(1); opacity: 0; }
        }
        
        @keyframes dataFlow3 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(-160px, 0) scale(1); opacity: 0; }
        }
        
        @keyframes dataFlow4 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(-80px, -138px) scale(1); opacity: 0; }
        }
        
        @keyframes dataFlow5 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(80px, -138px) scale(1); opacity: 0; }
        }
      `}</style>
    </section>
  )
}