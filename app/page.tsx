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
} from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import { InfiniteGrid } from "@/components/ui/infinite-grid"
import { ProductFeatures } from "@/components/ui/product-features"

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
            SIMPLIFY YOUR FINANCIAL MANAGEMENT
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Enjoy intuitive tools that empower you to manage, transfer, and track your funds effortlessly, all while
            ensuring the highest level of data protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 font-medium text-white hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Open an Account
            </Link>
            <Link
              href="#"
              className="rounded-full border-2 border-gray-200 px-8 py-4 font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Gemini_Generated_Image_b5mbyzb5mbyzb5mb.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Product Features</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover the powerful features that make Hostpay the perfect solution for your financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all">
              <Shield className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-white/70">
                Bank-grade encryption and security protocols to protect your financial data
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all">
              <BarChart3 className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-white/70">
                Comprehensive insights and reporting tools to track your financial performance
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all">
              <CreditCard className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
              <p className="text-white/70">
                Seamless payment processing with support for multiple payment methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <div className="rounded-3xl border border-gray-800 bg-gray-900/50 p-6 overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-emerald-500/20">
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xl font-semibold text-purple-400">Hostpay</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="rounded-full bg-gray-800 pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <span className="font-medium">$40,000</span>
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
                    1
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden">
                  <div className="h-full w-full bg-gray-600 flex items-center justify-center text-xs">N</div>
                </div>
                <span className="text-sm">Novak Roka</span>
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
                <SidebarIcon icon={CreditCard} />
                <SidebarIcon icon={FileText} />
                <SidebarIcon icon={Users} />
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
                  <h2 className="text-xl font-semibold">Dashboard</h2>
                  <p className="text-sm text-gray-400">An easy way to manage sales with care and precision</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
                  <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">January 2024 - May 2024</span>
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
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Cashflow Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Cashflows</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-gray-400">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                      <span className="text-sm text-gray-400">Outcome</span>
                    </div>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <div className="flex h-full">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
                      <span>60</span>
                      <span>50</span>
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                      <span>10</span>
                      <span>0</span>
                    </div>

                    {/* Chart */}
                    <div className="flex-1">
                      <div className="flex h-full items-end justify-between">
                        {months.map((month, i) => (
                          <div key={month} className="flex flex-col items-center gap-1 w-full">
                            <div
                              className="w-4/5 bg-purple-500/80 rounded-md"
                              style={{ height: `${barHeights[i]}%` }}
                            ></div>
                            <span className="text-xs text-gray-500">{month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Accounts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Bank Accounts</h3>
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
                  <BankAccount color="emerald" name="Main Bank Account" type="Bank of America" amount="$34,000.00" />

                  <BankAccount color="blue" name="Main Bank Account" type="Wells Fargo" amount="$44,000.00" />

                  <BankAccount color="emerald" name="Main Australia" type="Green Bank" amount="$34,000.00" />

                  <button className="w-full rounded-xl bg-emerald-600/20 py-3 text-emerald-500 font-medium">
                    Connect New Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Product Features Section */}
      <ProductFeatures />
      
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

function BankAccount({
  color,
  name,
  type,
  amount,
}: {
  color: "emerald" | "blue"
  name: string
  type: string
  amount: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-800 p-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          color === "emerald" ? "bg-emerald-500/20 text-emerald-500" : "bg-blue-500/20 text-blue-500"
        }`}
      >
        <CreditCard className="h-5 w-5" />
      </div>

      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-400">{type}</p>
        <div className="mt-1 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs text-gray-400">Active</span>
        </div>
      </div>

      <div className="text-right">
        <span className="font-medium">{amount}</span>
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
const barHeights = [45, 65, 25, 55, 35, 45, 30, 40, 25, 60, 50, 35]