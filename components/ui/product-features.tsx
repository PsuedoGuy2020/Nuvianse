"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: 1,
    title: "Autonomous Candidate Sourcing",
    description: "AI agents continuously scan LinkedIn, GitHub, Stack Overflow, and 50+ platforms to identify and engage with top talent that perfectly matches your job requirements, working 24/7 without human intervention.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Intelligent Candidate Screening",
    description: "Advanced AI algorithms evaluate candidates across technical skills, cultural fit, experience level, and career trajectory. Our agents conduct preliminary assessments and rank candidates by compatibility score.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Personalized Outreach Automation",
    description: "AI agents craft personalized messages based on candidate profiles, company culture, and role requirements. Automated follow-ups and engagement sequences maintain consistent communication throughout the hiring process.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Real-time Analytics & Insights",
    description: "Comprehensive dashboard showing AI agent performance, candidate pipeline metrics, sourcing effectiveness, and hiring funnel analytics. Get actionable insights to optimize your recruitment strategy.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Multi-Platform Integration",
    description: "Seamlessly integrate with your existing ATS, HRIS, and communication tools. Our AI agents work across Slack, Teams, email, and popular recruiting platforms to streamline your entire workflow.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-indigo-500 to-blue-600"
  }
]

export function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const [sectionEnded, setSectionEnded] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const lastFeatureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageContainerRef.current || !lastFeatureRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const imageContainerRect = imageContainerRef.current.getBoundingClientRect()
      const lastFeatureRect = lastFeatureRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const headerHeight = 80

      // Check if the last feature (Multi-Platform Integration) is visible
      const lastFeatureVisible = lastFeatureRect.top < viewportHeight * 0.7 && lastFeatureRect.bottom > viewportHeight * 0.3

      // End the section when the last feature becomes prominently visible
      if (lastFeatureVisible && activeIndex === features.length - 1) {
        setSectionEnded(true)
        setIsSticky(false)
      } else {
        setSectionEnded(false)
        
        // Check if image container should be sticky
        const shouldBeSticky = containerRect.top <= headerHeight && 
                              containerRect.bottom > viewportHeight && 
                              !lastFeatureVisible

        setIsSticky(shouldBeSticky)
      }

      // Only process feature detection when container is in view and section hasn't ended
      if (containerRect.top < viewportHeight && containerRect.bottom > 0 && !sectionEnded) {
        let maxVisibleSection = 0
        let maxVisibleHeight = 0

        sectionRefs.current.forEach((sectionRef, index) => {
          if (!sectionRef) return

          const rect = sectionRef.getBoundingClientRect()
          const sectionTop = Math.max(rect.top, headerHeight)
          const sectionBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, sectionBottom - sectionTop)

          // Give preference to sections that are more centered in viewport
          const centerDistance = Math.abs((rect.top + rect.bottom) / 2 - viewportHeight / 2)
          const adjustedHeight = visibleHeight - (centerDistance * 0.1)

          if (adjustedHeight > maxVisibleHeight) {
            maxVisibleHeight = adjustedHeight
            maxVisibleSection = index
          }
        })

        setActiveIndex(maxVisibleSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex, sectionEnded])

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black text-white py-20 overflow-hidden"
      style={{ minHeight: `${features.length * 80}vh` }} // Reduced height for better flow
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            AI Agent Capabilities
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover how our autonomous AI agents revolutionize every aspect of your recruitment process
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - Features List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                  // Set ref for the last feature
                  if (index === features.length - 1) {
                    lastFeatureRef.current = el
                  }
                }}
                className="min-h-[25vh] flex items-center py-8"
              >
                <div
                  suppressHydrationWarning
                  className={cn(
                    "transition-all duration-700 transform w-full",
                    index === activeIndex && !sectionEnded
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-40 translate-x-8 scale-95"
                  )}
                >
                  {/* Feature Number */}
                  <div className="flex items-center mb-6">
                    <div 
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 transition-all duration-500",
                        index === activeIndex && !sectionEnded
                          ? `bg-gradient-to-r ${feature.gradient} shadow-xl scale-110` 
                          : "bg-gray-700 scale-100"
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div 
                      className={cn(
                        "h-px flex-1 transition-all duration-500",
                        index === activeIndex && !sectionEnded
                          ? `bg-gradient-to-r ${feature.gradient} opacity-80` 
                          : "bg-gray-600 opacity-30"
                      )}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="pl-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed max-w-xl text-base">
                      {feature.description}
                    </p>
                    
                    {/* Feature Highlight Bar */}
                    <div 
                      className={cn(
                        "mt-6 h-1 rounded-full transition-all duration-700",
                        index === activeIndex && !sectionEnded
                          ? `bg-gradient-to-r ${feature.gradient} w-24 opacity-100 shadow-lg` 
                          : "bg-gray-600 w-12 opacity-50"
                      )}
                    />

                    {/* Additional Info for Active Feature */}
                    {index === activeIndex && !sectionEnded && (
                      <div className="mt-6 opacity-0 animate-fadeIn">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>Active 24/7</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Real-time Processing</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image Container */}
          <div className="w-full lg:w-1/2 relative">
            <div 
              suppressHydrationWarning
              ref={imageContainerRef}
              className={cn(
                "w-full h-[70vh] transition-all duration-500 ease-out",
                isSticky && !sectionEnded
                  ? "fixed top-20 right-0 z-30" 
                  : "relative"
              )}
              style={{
                width: isSticky && !sectionEnded ? '42%' : '100%',
                maxWidth: isSticky && !sectionEnded ? '600px' : 'none',
                right: isSticky && !sectionEnded ? '4%' : 'auto',
                opacity: sectionEnded ? 0.3 : 1,
                transform: sectionEnded ? 'translateY(20px) scale(0.95)' : 'translateY(0) scale(1)',
              }}
            >
              
              {/* Image Stack Container */}
              <div className="relative w-full h-full">
                
                {/* Background Glow Effect */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-3xl transition-all duration-1000 blur-3xl",
                    `bg-gradient-to-br ${features[activeIndex]?.gradient} opacity-20`
                  )}
                  style={{
                    transform: 'scale(1.1)',
                  }}
                />

                {/* Stacked Images */}
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-1000 ease-in-out rounded-3xl overflow-hidden",
                      index === activeIndex && !sectionEnded
                        ? "opacity-100 z-20 scale-100" 
                        : "opacity-0 z-10 scale-95"
                    )}
                  >
                    {/* Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        `bg-gradient-to-br ${feature.gradient} opacity-15`
                      )}
                    />
                    
                    {/* Border Highlight */}
                    <div 
                      className={cn(
                        "absolute inset-0 rounded-3xl transition-all duration-1000",
                        index === activeIndex && !sectionEnded
                          ? "ring-2 ring-white/30 shadow-2xl" 
                          : "ring-1 ring-gray-600/20"
                      )}
                    />
                  </div>
                ))}

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/60 rounded-full animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-emerald-500/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Progress Indicator */}
              {!sectionEnded && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-500",
                        index === activeIndex 
                          ? "bg-white scale-125 shadow-lg" 
                          : "bg-gray-600 scale-100"
                      )}
                    />
                  ))}
                </div>
              )}

              {/* Sticky State Indicator */}
              {isSticky && !sectionEnded && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20">
                  AI Feature Preview
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section End Indicator */}
      {sectionEnded && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="px-6 py-3 bg-gray-800/60 backdrop-blur-sm rounded-full text-sm text-gray-400 border border-gray-700/50">
            AI Capabilities Overview Complete
          </div>
        </div>
      )}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <style jsx global>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 40px 40px, 40px 40px;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}