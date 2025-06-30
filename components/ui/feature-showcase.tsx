"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Globe,
  Smartphone
} from "lucide-react"

export function FeatureShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
            FEEL THE BEST EXPERIENCE
            <br />
            WITH OUR AI FEATURES
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enjoy intelligent, autonomous features for effortless talent acquisition. Track candidates in real-time and handle recruitment seamlessly on one easy-to-use platform.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className={cn(
                "relative transition-all duration-1000 ease-out",
                isVisible 
                  ? "opacity-100 translate-y-0 rotate-0" 
                  : "opacity-0 translate-y-12 rotate-6"
              )}
            >
              {/* Phone Container */}
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                
                {/* Phone Screen */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/50 rounded-sm">
                        <div className="w-3/4 h-full bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-4 border-b border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">TalentAI</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="p-6 space-y-6">
                    
                    {/* Hero Card */}
                    <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl p-6 border border-emerald-500/20">
                      <h3 className="text-white text-xl font-bold mb-2">
                        Discover The Key
                        <br />
                        to Your AI Hiring
                        <br />
                        Future
                      </h3>
                      
                      {/* Stats Display */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Active Agents</span>
                          <span className="text-white font-bold text-2xl">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Candidates Sourced</span>
                          <span className="text-emerald-400 font-bold text-2xl">1,247</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Success Rate</span>
                          <span className="text-blue-400 font-bold text-2xl">94%</span>
                        </div>
                      </div>

                      {/* Progress Indicators */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-300">AI Sourcing Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <span className="text-xs text-gray-300">Screening in Progress</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                        <Target className="w-6 h-6 text-emerald-400 mb-2" />
                        <span className="text-white text-sm font-medium">Deploy Agent</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                        <BarChart3 className="w-6 h-6 text-blue-400 mb-2" />
                        <span className="text-white text-sm font-medium">View Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Highlights */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            
            {/* Feature 1 */}
            <div 
              className={cn(
                "flex items-start gap-4 transition-all duration-700 delay-200",
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              )}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Candidate Tracking</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get instant notifications on candidate interactions, application status, and interview progress, ensuring you're always in control of your hiring pipeline.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div 
              className={cn(
                "flex items-start gap-4 transition-all duration-700 delay-400",
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              )}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Integrated Communication Hub</h3>
                <p className="text-gray-300 leading-relaxed">
                  Manage all candidate communications effortlessly through multiple channels, whether it's email outreach, LinkedIn messages, or interview scheduling.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div 
              className={cn(
                "flex items-start gap-4 transition-all duration-700 delay-600",
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-8"
              )}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Secure AI Agent Access</h3>
                <p className="text-gray-300 leading-relaxed">
                  Protect your recruitment data with advanced security features like role-based access, audit trails, and encrypted candidate information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          
          {/* Smart Matching */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30 mb-4">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Candidate Matching</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI algorithms analyze job requirements and candidate profiles to deliver 95% accurate matches, reducing time-to-hire by 60%.
            </p>
          </div>

          {/* Automated Workflows */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-1000 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Automated Workflows</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Set up custom recruitment workflows that automatically handle screening, scheduling, and follow-ups without manual intervention.
            </p>
          </div>

          {/* Performance Analytics */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-1200 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Track AI agent performance, sourcing effectiveness, and hiring metrics with comprehensive dashboards and actionable insights.
            </p>
          </div>

          {/* Global Talent Pool */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-1400 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30 mb-4">
              <Globe className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Talent Access</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Access talent from 50+ platforms worldwide including LinkedIn, GitHub, Stack Overflow, and specialized job boards.
            </p>
          </div>

          {/* Mobile Optimization */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-1600 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 mb-4">
              <Smartphone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mobile-First Design</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Manage your AI recruitment agents on-the-go with our fully responsive mobile app and real-time notifications.
            </p>
          </div>

          {/* Quality Assurance */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 delay-1800 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built-in quality checks ensure every candidate meets your standards before reaching your pipeline, maintaining high hiring quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}