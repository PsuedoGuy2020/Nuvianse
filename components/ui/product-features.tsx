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
  const [stickyState, setStickyState] = useState<'before' | 'sticky' | 'after'>('before')
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const firstFeatureRef = useRef<HTMLDivElement>(null)
  const lastFeatureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !firstFeatureRef.current || !lastFeatureRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const firstFeatureRect = firstFeatureRef.current.getBoundingClientRect()
      const lastFeatureRect = lastFeatureRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const headerHeight = 80 // Approximate header height

      // Determine sticky state based on scroll position
      if (firstFeatureRect.top > headerHeight) {
        // Before sticky: first feature hasn't reached the header yet
        setStickyState('before')
      } else if (lastFeatureRect.bottom > headerHeight + 400) {
        // Sticky: between first feature reaching header and last feature leaving
        setStickyState('sticky')
      } else {
        // After sticky: last feature has passed, images move with section
        setStickyState('after')
      }

      // Only process active feature detection when in view
      if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
        // Find which section is currently most visible
        let maxVisibleSection = 0
        let maxVisibleHeight = 0

        sectionRefs.current.forEach((sectionRef, index) => {
          if (!sectionRef) return

          const rect = sectionRef.getBoundingClientRect()
          const sectionTop = Math.max(rect.top, headerHeight)
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
      className="relative w-full bg-black text-white py-12 overflow-hidden"
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
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Left Side - Features List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                  // Set refs for first and last features
                  if (index === 0) firstFeatureRef.current = el
                  if (index === features.length - 1) lastFeatureRef.current = el
                }}
                className="min-h-[25vh] flex items-center py-1"
              >
                <div
                  className={cn(
                    "transition-all duration-500 ease-out w-full",
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 translate-x-4"
                  )}
                >
                  {/* Feature Number */}
                  <div className="flex items-center mb-3">
                    <div 
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2 transition-all duration-400",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} shadow-lg` 
                          : "bg-gray-700"
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div 
                      className={cn(
                        "h-px flex-1 transition-all duration-400",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} opacity-60` 
                          : "bg-gray-600 opacity-30"
                      )}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="pl-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                    
                    {/* Feature Highlight Bar */}
                    <div 
                      className={cn(
                        "mt-3 h-1 rounded-full transition-all duration-500",
                        index === activeIndex 
                          ? `bg-gradient-to-r ${feature.gradient} w-16 opacity-100` 
                          : "bg-gray-600 w-8 opacity-50"
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Images Container */}
          <div className="w-full lg:w-1/2 relative">
            {/* Images Container with Dynamic Positioning */}
            <div 
              className={cn(
                "w-full h-[60vh] transition-all duration-300 ease-out",
                // Position images to align with first feature by default
                stickyState === 'before' && "relative top-0",
                stickyState === 'sticky' && "fixed top-20 right-4 lg:right-8 z-30 w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)]",
                stickyState === 'after' && "relative"
              )}
            >
              {/* Image Container - Static positioning, only opacity changes */}
              <div className="relative w-full h-full">
                
                {/* Background Glow Effect - Subtle and smooth */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-all duration-800 blur-3xl",
                    `bg-gradient-to-br ${features[activeIndex]?.gradient} opacity-15`
                  )}
                />

                {/* Stacked Images - Only opacity transitions, no scaling or movement */}
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-600 ease-in-out rounded-2xl overflow-hidden",
                      index === activeIndex 
                        ? "opacity-100 z-20" 
                        : "opacity-0 z-10"
                    )}
                  >
                    {/* Image - No transforms, completely static */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay - Subtle and smooth */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-opacity duration-600",
                        `bg-gradient-to-br ${feature.gradient} opacity-15`
                      )}
                    />
                    
                    {/* Border Glow - Minimal effect */}
                    <div 
                      className={cn(
                        "absolute inset-0 rounded-2xl transition-all duration-600",
                        index === activeIndex 
                          ? "ring-1 ring-white ring-opacity-20" 
                          : "ring-1 ring-gray-600 ring-opacity-10"
                      )}
                    />
                  </div>
                ))}

                {/* Minimal Floating Elements - Reduced and subtle */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Progress Indicator - Clean and minimal */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-400",
                      index === activeIndex 
                        ? "bg-white opacity-100" 
                        : "bg-gray-500 opacity-40"
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
      `}</style>
    </section>
  )
}