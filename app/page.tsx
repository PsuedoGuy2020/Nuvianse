import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  FileText,
  type LucideIcon,
  Menu,
  Search,
  Shield,
  Users,
  Brain,
  Target,
  Zap,
  UserCheck,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import { InfiniteGrid } from "@/components/ui/infinite-grid"
import { FeaturesShowcase } from "@/components/ui/features-showcase"
import { AICapabilitiesGrid } from "@/components/ui/ai-capabilities-grid"
import { PopupTrigger } from "@/components/ui/popup-trigger"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white text-center overflow-hidden">
        <InfiniteGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-20">
            <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-emerald-400"></div>
            <div className="absolute top-3/4 right-1/4 h-2 w-2 rounded-full bg-blue-400"></div>
            <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-purple-400"></div>
            <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-emerald-400"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            REVOLUTIONIZE YOUR HIRING WITH AI AGENTS
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg px-4">
            Deploy intelligent AI agents that autonomously source, screen, and engage top talent 24/7. Transform your recruitment process with cutting-edge artificial intelligence that never sleeps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <PopupTrigger 
              title="Deploy AI Agents Now"
              description="Start your free trial and experience the future of recruitment. Our AI agents will begin sourcing candidates within minutes."
              className="w-full sm:w-auto"
            >
              <div className="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 font-medium text-white hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg hover:shadow-xl text-center cursor-pointer">
                Deploy AI Agents
              </div>
            </PopupTrigger>
            <PopupTrigger 
              title="Watch AI Agents in Action"
              description="See how our AI agents discover, screen, and engage with top talent. Get a personalized demo tailored to your hiring needs."
              className="w-full sm:w-auto"
            >
              <div className="rounded-full border-2 border-gray-200 px-6 sm:px-8 py-3 sm:py-4 font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto transition-colors text-center cursor-pointer">
                Watch Demo
              </div>
            </PopupTrigger>
          </div>
        </div>
      </section>

      {/* AI Recruitment Dashboard Preview Section - Overlapping the white grid background */}
      <section className="relative -mt-16 sm:-mt-24 lg:-mt-32 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="rounded-2xl sm:rounded-3xl border border-gray-800 bg-gray-900/95 backdrop-blur-sm p-3 sm:p-4 lg:p-6 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-emerald-500/20">
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 sm:h-3 sm:w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-lg sm:text-xl font-semibold text-purple-400">NUVIANSE</span>
              </div>

              <div className="hidden md:flex items-center gap-3 lg:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="rounded-full bg-gray-800 pl-10 pr-4 py-2 text-sm w-48 lg:w-64 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 lg:px-4 py-2">
                  <span className="font-medium text-sm">1,247 Active</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <div className="relative h-8 w-8">
                    <Bell className="h-5 w-5 text-gray-400" />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
                      3
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden">
                    <div className="h-full w-full bg-gray-600 flex items-center justify-center text-xs">HR</div>
                  </div>
                  <span className="text-sm hidden lg:block">Sarah Chen</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Sidebar */}
              <div className="lg:w-16 flex lg:flex-col items-center justify-between rounded-xl lg:rounded-2xl bg-gray-800 p-2 lg:p-3">
                <div className="flex lg:flex-col gap-4 lg:gap-6 lg:gap-8">
                  <SidebarIcon icon={BarChart3} active />
                  <SidebarIcon icon={Users} />
                  <SidebarIcon icon={UserCheck} />
                  <SidebarIcon icon={Brain} />
                  <SidebarIcon icon={Calendar} />
                </div>
                <div className="hidden lg:block">
                  <Menu className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 sm:mb-6 gap-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">AI Recruitment Dashboard</h2>
                    <p className="text-xs sm:text-sm text-gray-400">Autonomous talent acquisition powered by intelligent agents</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 sm:px-4 py-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-xs sm:text-sm">Last 30 Days</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <PopupTrigger 
                      title="Deploy New AI Agent"
                      description="Configure and deploy a new AI agent tailored to your specific hiring needs. Choose from our library of specialized recruitment agents."
                    >
                      <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-600/20 text-emerald-500 px-3 sm:px-4 py-2 cursor-pointer hover:bg-emerald-600/30 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">Deploy Agent</span>
                      </button>
                    </PopupTrigger>
                  </div>
                </div>

                {/* AI Performance Chart with Filled Line Graph */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-base sm:text-lg font-medium">AI Agent Performance</h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-xs sm:text-sm text-gray-400">Candidates Sourced</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                        <span className="text-xs sm:text-sm text-gray-400">Quality Matches</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-48 sm:h-56 lg:h-64 w-full">
                    <div className="flex h-full">
                      {/* Y-axis labels */}
                      <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
                        <span>120</span>
                        <span>100</span>
                        <span>80</span>
                        <span>60</span>
                        <span>40</span>
                        <span>20</span>
                        <span>0</span>
                      </div>

                      {/* Chart with SVG Line Graph */}
                      <div className="flex-1 relative">
                        {/* Background bars */}
                        <div className="flex h-full items-end justify-between absolute inset-0 z-10">
                          {months.map((month, i) => (
                            <div key={month} className="flex flex-col items-center gap-1 w-full">
                              <div className="flex flex-col gap-1 w-3/5 sm:w-4/5">
                                <div
                                  className="w-full bg-purple-500/80 rounded-md"
                                  style={{ height: `${candidateHeights[i]}%` }}
                                ></div>
                                <div
                                  className="w-full bg-emerald-500/80 rounded-md"
                                  style={{ height: `${qualityHeights[i]}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500">{month}</span>
                            </div>
                          ))}
                        </div>

                        {/* SVG Line Graph Overlay */}
                        <svg className="absolute inset-0 w-full h-full z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                            </linearGradient>
                            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          
                          {/* Filled area under the line */}
                          <path
                            d={`M 0 ${100 - lineData[0]} ${lineData.map((point, index) => 
                              `L ${(index / (lineData.length - 1)) * 100} ${100 - point}`
                            ).join(' ')} L 100 100 L 0 100 Z`}
                            fill="url(#fillGradient)"
                            opacity="0.6"
                          />
                          
                          {/* Main line */}
                          <path
                            d={`M 0 ${100 - lineData[0]} ${lineData.map((point, index) => 
                              `L ${(index / (lineData.length - 1)) * 100} ${100 - point}`
                            ).join(' ')}`}
                            stroke="url(#lineGradient)"
                            strokeWidth="0.8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Data points */}
                          {lineData.map((point, index) => (
                            <circle
                              key={index}
                              cx={(index / (lineData.length - 1)) * 100}
                              cy={100 - point}
                              r="1"
                              fill="#ffffff"
                              stroke="url(#lineGradient)"
                              strokeWidth="0.5"
                            />
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Agents Status */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-medium">Active AI Agents</h3>
                    <button>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12v.01M8 12v.01M16 12v.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="grid gap-3 sm:gap-4">
                    <AIAgentCard 
                      color="emerald" 
                      name="Senior Developer Hunter" 
                      type="Technical Sourcing Agent" 
                      status="47 candidates sourced today"
                      performance="+23%"
                    />

                    <AIAgentCard 
                      color="blue" 
                      name="Executive Search Pro" 
                      type="Leadership Recruitment Agent" 
                      status="12 C-level prospects identified"
                      performance="+18%"
                    />

                    <AIAgentCard 
                      color="purple" 
                      name="Culture Fit Analyzer" 
                      type="Screening & Assessment Agent" 
                      status="89% accuracy in cultural matching"
                      performance="+31%"
                    />

                    <PopupTrigger 
                      title="Deploy New AI Agent"
                      description="Choose from our library of specialized AI agents or create a custom agent tailored to your unique hiring requirements."
                    >
                      <button className="w-full rounded-xl bg-emerald-600/20 py-3 text-emerald-500 font-medium text-sm sm:text-base hover:bg-emerald-600/30 transition-colors cursor-pointer">
                        Deploy New AI Agent
                      </button>
                    </PopupTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feel the Best Experience Section */}
      <FeaturesShowcase />

      {/* AI Agent Capabilities Section */}
      <AICapabilitiesGrid />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

// Helper Components
function SidebarIcon({ icon: Icon, active = false }: { icon: LucideIcon; active?: boolean }) {
  return (
    <div className={`rounded-xl p-2 ${active ? "bg-gray-700" : ""}`}>
      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${active ? "text-white" : "text-gray-500"}`} />
    </div>
  )
}

function AIAgentCard({
  color,
  name,
  type,
  status,
  performance,
}: {
  color: "emerald" | "blue" | "purple"
  name: string
  type: string
  status: string
  performance: string
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-800 p-3 sm:p-4">
      <div
        className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg ${
          color === "emerald" 
            ? "bg-emerald-500/20 text-emerald-500" 
            : color === "blue"
            ? "bg-blue-500/20 text-blue-500"
            : "bg-purple-500/20 text-purple-500"
        }`}
      >
        <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm sm:text-base truncate">{name}</h4>
        <p className="text-xs sm:text-sm text-gray-400 truncate">{type}</p>
        <div className="mt-1 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs text-gray-400 truncate">{status}</span>
        </div>
      </div>

      <div className="text-right flex-shrink-0">
        <span className="font-medium text-emerald-400 text-sm sm:text-base">{performance}</span>
        <div className="text-xs text-gray-400">efficiency</div>
      </div>
    </div>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  )
}

// Sample data for chart
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const candidateHeights = [65, 85, 45, 75, 55, 65, 50, 60, 45, 80, 70, 55]
const qualityHeights = [45, 65, 35, 55, 40, 50, 35, 45, 30, 60, 50, 40]

// Line graph data for the SVG overlay (values from 0-100 representing percentage of chart height)
const lineData = [45, 62, 38, 58, 42, 55, 40, 48, 35, 65, 58, 45]