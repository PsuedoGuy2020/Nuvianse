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
  const [isSticky, setIsSticky] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageContainerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const imageRect = imageContainerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const headerHeight = 80 // Approximate header height

      // Check if image should be sticky (when it reaches just below header)
      const shouldBeSticky = containerRect.top <= headerHeight && containerRect.bottom > viewportHeight

      setIsSticky(shouldBeSticky)

      // Calculate scroll progress through the container
      const containerHeight = containerRect.height
      const scrolledDistance = Math.max(0, headerHeight - containerRect.top)
      const progress = Math.min(scrolledDistance / (containerHeight - viewportHeight), 1)
      setScrollProgress(progress)

      // Only process feature detection when container is in view
      if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
        // Find which section is currently most visible with improved detection
        let maxVisibleSection = 0
        let maxVisibleHeight = 0

        sectionRefs.current.forEach((sectionRef, index) => {
          if (!sectionRef) return

          const rect = sectionRef.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height / 2
          const viewportCenter = viewportHeight / 2

          // Calculate how close the section center is to viewport center
          const distanceFromCenter = Math.abs(sectionCenter - viewportCenter)
          const maxDistance = viewportHeight / 2
          const visibility = Math.max(0, 1 - (distanceFromCenter / maxDistance))

          // Also consider actual visible area
          const visibleTop = Math.max(rect.top, 0)
          const visibleBottom = Math.min(rect.bottom, viewportHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Combine center proximity with visible area
          const score = visibility * 0.7 + (visibleHeight / rect.height) * 0.3

          if (score > maxVisibleHeight) {
            maxVisibleHeight = score
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
      className="relative w-full bg-black text-white py-12 overflow-hidden"
      style={{ minHeight: `${features.length * 100}vh` }} // Ensure enough scroll space
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
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Product Features
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover the powerful capabilities that make Hostpay the ultimate solution for modern financial management
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side - Features List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                className="min-h-[80vh] flex items-center py-8"
              >
                <div
                  className={cn(
                    "transition-all duration-700 ease-out transform w-full",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-40 translate-x-4 scale-98"
                  )}
                >
                  {/* Feature Number */}
                  <div className="flex items-center mb-4">
                    <div 
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 transition-all duration-500",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} shadow-lg scale-110 ring-2 ring-white/20` 
                          : "bg-gray-700 scale-100"
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div 
                      className={cn(
                        "h-px flex-1 transition-all duration-700",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} opacity-80` 
                          : "bg-gray-600 opacity-30"
                      )}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="pl-13">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed max-w-xl mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Feature Highlight Bar */}
                    <div 
                      className={cn(
                        "h-1 rounded-full transition-all duration-700",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} w-20 opacity-100 shadow-lg` 
                          : "bg-gray-600 w-10 opacity-50"
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Image Container */}
          <div className="w-full lg:w-1/2 relative">
            <div 
              ref={imageContainerRef}
              className={cn(
                "transition-all duration-300 ease-out",
                isSticky 
                  ? "fixed top-20 right-0 w-1/2 z-30" 
                  : "relative w-full"
              )}
              style={{
                height: isSticky ? '70vh' : '70vh',
                maxWidth: isSticky ? 'calc(50vw - 2rem)' : '100%',
                marginRight: isSticky ? '2rem' : '0',
              }}
            >
              
              {/* Image Container */}
              <div className="relative w-full h-full">
                
                {/* Background Glow Effect */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-all duration-1000 blur-3xl",
                    `bg-gradient-to-br ${features[activeIndex]?.gradient} opacity-20`
                  )}
                  style={{
                    transform: 'scale(1.1)',
                  }}
                />

                {/* Stacked Images - Smooth transitions without zoom */}
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-1000 ease-out rounded-2xl overflow-hidden",
                      index === activeIndex 
                        ? "opacity-100 z-20" 
                        : "opacity-0 z-10"
                    )}
                    style={{
                      // Smooth fade transition without any scaling or movement
                      transitionProperty: 'opacity',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {/* Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{
                        // Ensure image stays perfectly still
                        transform: 'none',
                        transition: 'none',
                      }}
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        `bg-gradient-to-br ${feature.gradient} opacity-10`
                      )}
                    />
                    
                    {/* Border Glow - Minimal effect */}
                    <div 
                      className={cn(
                        "absolute inset-0 rounded-2xl transition-all duration-1000",
                        index === activeIndex 
                          ? "ring-1 ring-white/20" 
                          : "ring-0"
                      )}
                    />
                  </div>
                ))}

                {/* Minimal Floating Elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Progress Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-500",
                      index === activeIndex 
                        ? "bg-white scale-125 shadow-lg" 
                        : "bg-gray-600 scale-100"
                    )}
                  />
                ))}
              </div>

              {/* Feature Title Overlay - Shows on sticky mode */}
              {isSticky && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 transition-all duration-500">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {features[activeIndex]?.title}
                  </h4>
                  <div 
                    className={cn(
                      "h-0.5 rounded-full transition-all duration-500",
                      `bg-gradient-to-r ${features[activeIndex]?.gradient} w-12`
                    )}
                  />
                </div>
              )}
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
      `}</style>
    </section>
  )
}