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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white text-center overflow-hidden">
        <InfiniteGrid />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-20">
            <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-emerald-400"></div>
            <div className="absolute top-3/4 right-1/4 h-2 w-2 rounded-full bg-blue-400"></div>
            <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-purple-400"></div>
            <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-emerald-400"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            REVOLUTIONIZE YOUR HIRING WITH AI AGENTS
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Deploy intelligent AI agents that autonomously source, screen, and engage top talent 24/7. Transform your recruitment process with cutting-edge artificial intelligence that never sleeps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 font-medium text-white hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Deploy AI Agents
            </Link>
            <Link
              href="#"
              className="rounded-full border-2 border-gray-200 px-8 py-4 font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto transition-colors"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* AI Recruitment Dashboard Preview Section - Overlapping the white background */}
      <section className="relative -mt-32 z-20">
        <div className="container mx-auto px-4 py-16 mb-16">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/95 backdrop-blur-sm p-6 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full bg-emerald-500/20">
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-xl font-semibold text-purple-400">TalentAI</span>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="rounded-full bg-gray-800 pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                  <span className="font-medium">1,247 Active</span>
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
                  <span className="text-sm">Sarah Chen</span>
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
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar */}
              <div className="lg:w-16 flex lg:flex-col items-center justify-between rounded-2xl bg-gray-800 p-3">
                <div className="flex lg:flex-col gap-6 lg:gap-8">
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
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">AI Recruitment Dashboard</h2>
                    <p className="text-sm text-gray-400">Autonomous talent acquisition powered by intelligent agents</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
                    <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Last 30 Days</span>
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

                    <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-600/20 text-emerald-500 px-4 py-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Deploy Agent</span>
                    </button>
                  </div>
                </div>

                {/* AI Performance Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">AI Agent Performance</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm text-gray-400">Candidates Sourced</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-gray-400">Quality Matches</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-64 w-full">
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

                      {/* Chart */}
                      <div className="flex-1">
                        <div className="flex h-full items-end justify-between">
                          {months.map((month, i) => (
                            <div key={month} className="flex flex-col items-center gap-1 w-full">
                              <div className="flex flex-col gap-1 w-4/5">
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Agents Status */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Active AI Agents</h3>
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

                  <div className="grid gap-4">
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

                    <button className="w-full rounded-xl bg-emerald-600/20 py-3 text-emerald-500 font-medium">
                      Deploy New AI Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

// Helper Components
function SidebarIcon({ icon: Icon, active = false }: { icon: LucideIcon; active?: boolean }) {
  return (
    <div className={`rounded-xl p-2 ${active ? "bg-gray-700" : ""}`}>
      <Icon className={`h-5 w-5 ${active ? "text-white" : "text-gray-500"}`} />
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
    <div className="flex items-center gap-4 rounded-xl border border-gray-800 p-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          color === "emerald" 
            ? "bg-emerald-500/20 text-emerald-500" 
            : color === "blue"
            ? "bg-blue-500/20 text-blue-500"
            : "bg-purple-500/20 text-purple-500"
        }`}
      >
        <Brain className="h-5 w-5" />
      </div>

      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-400">{type}</p>
        <div className="mt-1 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs text-gray-400">{status}</span>
        </div>
      </div>

      <div className="text-right">
        <span className="font-medium text-emerald-400">{performance}</span>
        <div className="text-xs text-gray-400">efficiency</div>
      </div>
    </div>
  )
}

// Sample data for chart
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const candidateHeights = [65, 85, 45, 75, 55, 65, 50, 60, 45, 80, 70, 55]
const qualityHeights = [45, 65, 35, 55, 40, 50, 35, 45, 30, 60, 50, 40]