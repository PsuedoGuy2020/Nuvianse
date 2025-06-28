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
    title: "Multi-Currency Support",
    description: "Seamlessly handle transactions in multiple currencies with real-time exchange rates and automatic conversion. Perfect for global businesses and international transactions.",
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-indigo-500 to-blue-600"
  }
]

export function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerBottom = containerRect.bottom
      const viewportHeight = window.innerHeight

      // Check if container is in view
      const inView = containerTop < viewportHeight && containerBottom > 0
      setIsInView(inView)

      // Only process scroll events when the container is in view
      if (inView) {
        // Find which section is currently most visible
        let maxVisibleSection = 0
        let maxVisibleHeight = 0

        sectionRefs.current.forEach((sectionRef, index) => {
          if (!sectionRef) return

          const rect = sectionRef.getBoundingClientRect()
          const sectionTop = Math.max(rect.top, 0)
          const sectionBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, sectionBottom - sectionTop)

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight
            maxVisibleSection = index
          }
        })

        setActiveIndex(maxVisibleSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white py-20 overflow-hidden"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Product Features
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the powerful capabilities that make Hostpay the ultimate solution for modern financial management
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row min-h-[80vh] gap-8">
          
          {/* Left Side - Features List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                className="min-h-[60vh] flex items-center py-8"
              >
                <div
                  className={cn(
                    "transition-all duration-700 transform w-full",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-30 translate-x-8 scale-95"
                  )}
                >
                  {/* Feature Number */}
                  <div className="flex items-center mb-6">
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
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                    
                    {/* Feature Highlight Bar */}
                    <div 
                      className={cn(
                        "mt-6 h-1 rounded-full transition-all duration-700",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} w-24 opacity-100` 
                          : "bg-gray-600 w-12 opacity-50"
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Stacked Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="sticky top-24 h-[70vh] relative">
              
              {/* Image Container with Perspective */}
              <div className="relative w-full h-full perspective-1000">
                
                {/* Background Glow Effect */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-all duration-700 blur-3xl",
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
                      "absolute inset-0 transition-all duration-700 rounded-2xl overflow-hidden",
                      index === activeIndex 
                        ? "opacity-100 z-20 transform-none" 
                        : "opacity-0 z-10",
                      index < activeIndex && "transform translate-y-4 scale-95",
                      index > activeIndex && "transform -translate-y-4 scale-95"
                    )}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-opacity duration-700",
                        `bg-gradient-to-br ${feature.gradient} opacity-20`
                      )}
                    />
                    
                    {/* Border Glow */}
                    <div 
                      className={cn(
                        "absolute inset-0 rounded-2xl transition-all duration-700",
                        index === activeIndex 
                          ? `ring-2 ring-opacity-50 bg-gradient-to-r ${feature.gradient}` 
                          : "ring-1 ring-gray-600 ring-opacity-30"
                      )}
                      style={{
                        background: index === activeIndex 
                          ? `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)` 
                          : 'transparent'
                      }}
                    />
                  </div>
                ))}

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 -right-8 w-4 h-4 bg-emerald-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === activeIndex 
                        ? "bg-white scale-125" 
                        : "bg-gray-600 scale-100"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <style jsx global>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 40px 40px, 40px 40px;
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}