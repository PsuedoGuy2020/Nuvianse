"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const features = [
	{
		title: "AI-Powered Financial Insights",
		description:
			"Experience cutting-edge AI technology that analyzes your financial data in real-time, providing personalized insights and recommendations for smarter financial decisions.",
		image: "/features/EscEfHEmktq7nJ98EIguFYMmQHY.avif",
	},
	{
		title: "Smart Portfolio Management",
		description:
			"Manage your investment portfolio with our intelligent platform that adapts to market changes and your financial goals, ensuring optimal performance and risk management.",
		image: "/features/bXnqKuzpRhuVmy09PcGS1Yn6Q.avif",
	},
	{
		title: "Secure Payment Processing",
		description:
			"Process payments with confidence using our state-of-the-art security measures. End-to-end encryption and fraud protection keep your transactions safe.",
		image: "/features/payment-dashboard.jpg",
	},
	{
		title: "Enhanced Security Features",
		description:
			"Protect your financial data with advanced security features including two-factor authentication, biometric verification, and real-time fraud monitoring.",
		image: "/features/security-dashboard.jpg",
	},
]

export function ParallaxFeatures() {
	const [activeIndex, setActiveIndex] = useState(0)
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return

			const containerRect = containerRef.current.getBoundingClientRect()
			const containerTop = containerRect.top
			const viewportHeight = window.innerHeight

			// Only process scroll events when the container is in view
			if (
				containerTop <= viewportHeight &&
				containerTop + containerRect.height >= 0
			) {
				// Find which section is currently most visible
				let maxVisibleSection = 0
				let maxVisibleHeight = 0

				sectionRefs.current.forEach((sectionRef, index) => {
					if (!sectionRef) return

					const rect = sectionRef.getBoundingClientRect()
					const visibleHeight =
						Math.min(rect.bottom, viewportHeight) -
						Math.max(rect.top, 0)

					if (visibleHeight > maxVisibleHeight) {
						maxVisibleHeight = visibleHeight
						maxVisibleSection = index
					}
				})

				setActiveIndex(maxVisibleSection)
			}
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll() // Initial check

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div
			ref={containerRef}
			className="relative flex flex-row min-h-[80vh] lg:min-h-[100vh] w-full"
		>
			{/* Left: Features */}
			<div className="w-full lg:w-1/2 flex flex-col">
				{features.map((feature, index) => (
					<div
						key={index}
						ref={(el) => {
							sectionRefs.current[index] = el
						}}
						className="min-h-[50vh] flex items-center px-4 lg:px-16"
					>
						<div
							className={cn(
								"transition-all duration-500 transform py-8",
								index === activeIndex
									? "opacity-100 translate-y-0"
									: "opacity-30 translate-y-4"
							)}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								{feature.title}
							</h2>
							<p className="text-lg text-white/70 max-w-xl">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Right: Grid and images */}
			<div className="hidden lg:block w-1/2 relative">
				<div className="w-4/5 mx-auto absolute inset-0">
					{/* Scrollable grid that extends full height */}
					<div
						className="absolute inset-0 rounded-2xl overflow-hidden"
						style={{
							backgroundImage: `
              linear-gradient(to right, rgba(168,85,247,0.7) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(236,72,153,0.7) 2px, transparent 2px)
            `,
							backgroundSize: "32px 32px",
							minHeight: "200vh",
						}}
					>
						{/* Spaceship on grid */}
						<svg
							className="absolute left-0 w-full h-[200px]"
							style={{ top: "calc(100vh + 340px)" }}
							viewBox="0 0 320 480"
							fill="none"
						>
							{/* ...existing spaceship SVG code... */}
						</svg>

						{/* Stars */}
						<div className="absolute inset-0">
							{[...Array(24)].map((_, i) => (
								<div
									key={i}
									className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
									style={{
										top: `${Math.random() * 100}%`,
										left: `${Math.random() * 100}%`,
										animationDelay: `${Math.random() * 3}s`,
										opacity: Math.random() * 0.5 + 0.25,
									}}
								/>
							))}
						</div>
					</div>

					{/* Fixed images that align with text */}
					<div className="sticky top-[6rem]">
						<div className="relative h-[340px] rounded-2xl overflow-hidden shadow-2xl">
							{features.map((feature, index) => (
								<div
									key={index}
									className={cn(
										"absolute inset-0 transition-opacity duration-700 parallax-image-transition",
										index === activeIndex ? "opacity-100" : "opacity-0"
									)}
								>
									<img
										src={feature.image}
										alt={feature.title}
										className="object-cover w-full h-full scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
