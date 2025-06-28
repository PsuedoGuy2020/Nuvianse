"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: 1,
    title: "AI-Powered Financial Insights",
    description: "Experience cutting-edge AI technology that analyzes your financial data in real-time, providing personalized insights and recommendations for smarter financial decisions.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Smart Portfolio Management",
    description: "Manage your investment portfolio with our intelligent platform that adapts to market changes and your financial goals, ensuring optimal performance and risk management.",
    image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Secure Payment Processing",
    description: "Process payments with confidence using our state-of-the-art security measures. End-to-end encryption and fraud protection keep your transactions safe.",
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Advanced Analytics Dashboard",
    description: "Gain deep insights into your financial performance with our comprehensive analytics dashboard. Track trends, monitor KPIs, and make data-driven decisions.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Real-time Collaboration",
    description: "Work seamlessly with your team using our real-time collaboration tools. Share insights, discuss strategies, and make decisions together, no matter where you are.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-cyan-500 to-blue-600"
  }
]

export function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const viewportHeight = window.innerHeight

      // Only process when container is in viewport
      if (containerTop <= viewportHeight && containerTop + containerHeight >= 0) {
        // Calculate scroll progress through the container
        const scrollProgress = Math.max(0, Math.min(1, 
          (viewportHeight - containerTop) / (viewportHeight + containerHeight)
        ))

        // Determine active section based on scroll progress
        const sectionIndex = Math.floor(scrollProgress * features.length)
        const clampedIndex = Math.max(0, Math.min(features.length - 1, sectionIndex))
        
        setActiveIndex(clampedIndex)
      }
    }

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[400vh] bg-black text-white overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex h-screen sticky top-0">
        {/* Left Half - Features Text */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Product Features
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover the powerful capabilities that make our platform the perfect solution for your financial needs
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el
                  }}
                  className={cn(
                    "transition-all duration-700 ease-out transform",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-40 translate-x-4 scale-95"
                  )}
                >
                  {/* Feature Number */}
                  <div className="flex items-center mb-4">
                    <div 
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 transition-all duration-500",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} shadow-lg scale-110` 
                          : "bg-gray-700 scale-100"
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div 
                      className={cn(
                        "h-px flex-1 transition-all duration-500",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} opacity-60` 
                          : "bg-gray-600 opacity-30"
                      )}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="pl-16">
                    <h3 
                      className={cn(
                        "text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent` 
                          : "text-gray-300"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className={cn(
                        "text-lg leading-relaxed transition-all duration-500",
                        index === activeIndex ? "text-gray-300" : "text-gray-500"
                      )}
                    >
                      {feature.description}
                    </p>

                    {/* Progress Indicator */}
                    {index === activeIndex && (
                      <div className="mt-6 flex items-center space-x-2">
                        {features.map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "h-1 rounded-full transition-all duration-300",
                              i === activeIndex 
                                ? `w-8 bg-gradient-to-r ${feature.gradient}` 
                                : "w-2 bg-gray-600"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Half - Stacked Images */}
        <div className="w-1/2 relative flex items-center justify-center p-8">
          <div 
            ref={imageContainerRef}
            className="relative w-full max-w-lg h-[600px] perspective-1000"
          >
            {/* Background Glow */}
            <div 
              className={cn(
                "absolute inset-0 rounded-3xl transition-all duration-700 blur-3xl opacity-30",
                `bg-gradient-to-br ${features[activeIndex]?.gradient || 'from-blue-500 to-purple-600'}`
              )}
              style={{
                transform: 'scale(1.2)',
              }}
            />

            {/* Image Stack */}
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-out rounded-3xl overflow-hidden",
                  "border border-white/20 backdrop-blur-sm",
                  index === activeIndex 
                    ? "opacity-100 scale-100 z-10 rotate-0" 
                    : "opacity-0 scale-95 z-0",
                  index < activeIndex && "rotate-1",
                  index > activeIndex && "-rotate-1"
                )}
                style={{
                  transform: `
                    scale(${index === activeIndex ? 1 : 0.95}) 
                    rotateY(${index === activeIndex ? 0 : index < activeIndex ? -5 : 5}deg)
                    translateZ(${index === activeIndex ? 0 : -50}px)
                  `,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div 
                  className={cn(
                    "absolute inset-0 opacity-60 mix-blend-overlay",
                    `bg-gradient-to-br ${feature.gradient}`
                  )}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Feature Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div 
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm",
                        `bg-gradient-to-r ${feature.gradient}`
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div 
                      className={cn(
                        "h-px flex-1",
                        `bg-gradient-to-r ${feature.gradient}`
                      )}
                    />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {feature.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}