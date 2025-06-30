"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // Calculate smooth transition values based on scroll position
  // Only use actual scroll values when mounted, otherwise use default (non-scrolled) state
  const scrollProgress = mounted ? Math.min(scrollY / 100, 1) : 0;
  const borderRadius = scrollProgress * 50;
  const headerWidth = 100 - (scrollProgress * 10);
  const backdropBlur = 8 + (scrollProgress * 12);
  const bgOpacity = 0.6 + (scrollProgress * 0.2);
  
  // Shadow intensity based on scroll progress
  const shadowOpacity = scrollProgress * 0.3;
  const glowIntensity = scrollProgress * 0.2;

  // Use mounted state to determine if we should show scrolled state
  const showScrolledState = mounted && isScrolled;

  return (
    <>
      {/* Ultra-Premium Font Styles for NUVIANSE */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&family=Exo+2:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .nuvianse-brand {
          font-family: 'Orbitron', 'Space Grotesk', 'Exo 2', 'Rajdhani', monospace;
          font-weight: 900;
          letter-spacing: 0.2em;
          position: relative;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f8fafc 8%,
            #e2e8f0 16%,
            #cbd5e1 24%,
            #94a3b8 32%,
            #64748b 40%,
            #475569 48%,
            #334155 56%,
            #1e293b 64%,
            #0f172a 72%,
            #020617 80%,
            #000000 88%,
            #1a1a1a 96%,
            #ffffff 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ultraGradientFlow 6s ease-in-out infinite;
          text-transform: uppercase;
          text-shadow: none;
          filter: 
            drop-shadow(0 0 12px rgba(0, 0, 0, 0.8))
            drop-shadow(0 0 24px rgba(0, 0, 0, 0.6))
            drop-shadow(0 0 36px rgba(0, 0, 0, 0.4));
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .nuvianse-brand.scrolled {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f1f5f9 5%,
            #e2e8f0 10%,
            #cbd5e1 15%,
            #94a3b8 20%,
            #64748b 25%,
            #475569 30%,
            #334155 35%,
            #1e293b 40%,
            #0f172a 45%,
            #020617 50%,
            #000000 55%,
            #1a1a1a 60%,
            #333333 65%,
            #4d4d4d 70%,
            #666666 75%,
            #808080 80%,
            #999999 85%,
            #b3b3b3 90%,
            #cccccc 95%,
            #ffffff 100%
          );
          background-size: 500% 500%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ultraGradientFlowWhite 4s ease-in-out infinite;
          filter: 
            drop-shadow(0 0 16px rgba(255, 255, 255, 0.9))
            drop-shadow(0 0 32px rgba(255, 255, 255, 0.7))
            drop-shadow(0 0 48px rgba(255, 255, 255, 0.5))
            drop-shadow(0 0 64px rgba(255, 255, 255, 0.3));
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.2);
        }
        
        /* Ultra-Premium Glow Effects */
        .nuvianse-brand::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(
            45deg,
            transparent 20%,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.3) 70%,
            transparent 80%
          );
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          animation: ultraShimmer 3s ease-in-out infinite;
          filter: blur(2px);
        }
        
        .nuvianse-brand.scrolled::before {
          background: linear-gradient(
            45deg,
            transparent 20%,
            rgba(255, 255, 255, 0.2) 30%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.2) 70%,
            transparent 80%
          );
          filter: blur(3px);
        }
        
        .nuvianse-brand:hover::before {
          opacity: 1;
          animation-play-state: paused;
        }
        
        /* Ultra-Premium Shadow Layer */
        .nuvianse-brand::after {
          content: 'NUVIANSE';
          position: absolute;
          inset: 0;
          background: inherit;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          filter: blur(2px);
          opacity: 0.4;
          z-index: -2;
          animation: inherit;
          transform: translateZ(-10px) scale(1.02);
        }
        
        /* Premium Gradient Animations */
        @keyframes ultraGradientFlow {
          0%, 100% {
            background-position: 0% 50%;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          20% {
            background-position: 100% 0%;
            transform: perspective(1000px) rotateX(2deg) rotateY(-1deg);
          }
          40% {
            background-position: 100% 100%;
            transform: perspective(1000px) rotateX(-1deg) rotateY(2deg);
          }
          60% {
            background-position: 0% 100%;
            transform: perspective(1000px) rotateX(1deg) rotateY(-2deg);
          }
          80% {
            background-position: 0% 0%;
            transform: perspective(1000px) rotateX(-2deg) rotateY(1deg);
          }
        }
        
        @keyframes ultraGradientFlowWhite {
          0%, 100% {
            background-position: 0% 50%;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          25% {
            background-position: 100% 0%;
            transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.02);
          }
          50% {
            background-position: 100% 100%;
            transform: perspective(1000px) rotateX(-1deg) rotateY(1deg) scale(1.01);
          }
          75% {
            background-position: 0% 100%;
            transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.02);
          }
        }
        
        @keyframes ultraShimmer {
          0% {
            transform: translateX(-200%) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: translateX(0%) rotate(45deg) scale(1);
          }
          100% {
            transform: translateX(200%) rotate(45deg) scale(0.8);
            opacity: 0;
          }
        }
        
        /* Ultra-Premium Hover Effects */
        .nuvianse-brand:hover {
          transform: scale(1.08) perspective(1000px) rotateX(5deg) rotateY(-5deg);
          filter: 
            drop-shadow(0 0 20px rgba(0, 0, 0, 1))
            drop-shadow(0 0 40px rgba(0, 0, 0, 0.8))
            drop-shadow(0 0 60px rgba(0, 0, 0, 0.6));
          animation-play-state: paused;
          letter-spacing: 0.25em;
        }
        
        .nuvianse-brand.scrolled:hover {
          transform: scale(1.08) perspective(1000px) rotateX(-3deg) rotateY(3deg);
          filter: 
            drop-shadow(0 0 24px rgba(255, 255, 255, 1))
            drop-shadow(0 0 48px rgba(255, 255, 255, 0.8))
            drop-shadow(0 0 72px rgba(255, 255, 255, 0.6))
            drop-shadow(0 0 96px rgba(255, 255, 255, 0.4));
          letter-spacing: 0.25em;
        }
        
        /* Ultra-Premium Pulsing Effect */
        .nuvianse-brand {
          animation: 
            ultraGradientFlow 6s ease-in-out infinite,
            ultraPulse 4s ease-in-out infinite;
        }
        
        .nuvianse-brand.scrolled {
          animation: 
            ultraGradientFlowWhite 4s ease-in-out infinite,
            ultraPulseWhite 3s ease-in-out infinite;
        }
        
        @keyframes ultraPulse {
          0%, 100% {
            text-shadow: 
              0 0 5px rgba(0, 0, 0, 0.8),
              0 0 10px rgba(0, 0, 0, 0.6),
              0 0 15px rgba(0, 0, 0, 0.4);
          }
          50% {
            text-shadow: 
              0 0 10px rgba(0, 0, 0, 1),
              0 0 20px rgba(0, 0, 0, 0.8),
              0 0 30px rgba(0, 0, 0, 0.6),
              0 0 40px rgba(0, 0, 0, 0.4);
          }
        }
        
        @keyframes ultraPulseWhite {
          0%, 100% {
            text-shadow: 
              0 0 8px rgba(255, 255, 255, 0.8),
              0 0 16px rgba(255, 255, 255, 0.6),
              0 0 24px rgba(255, 255, 255, 0.4);
          }
          50% {
            text-shadow: 
              0 0 12px rgba(255, 255, 255, 1),
              0 0 24px rgba(255, 255, 255, 0.8),
              0 0 36px rgba(255, 255, 255, 0.6),
              0 0 48px rgba(255, 255, 255, 0.4);
          }
        }
        
        /* Ultra-Premium Responsive Design */
        @media (max-width: 768px) {
          .nuvianse-brand {
            font-size: 1rem;
            letter-spacing: 0.15em;
            font-weight: 800;
          }
          
          .nuvianse-brand:hover {
            transform: scale(1.05) perspective(800px) rotateX(3deg) rotateY(-3deg);
            letter-spacing: 0.18em;
          }
        }
        
        @media (max-width: 480px) {
          .nuvianse-brand {
            font-size: 0.9rem;
            letter-spacing: 0.12em;
            font-weight: 700;
          }
          
          .nuvianse-brand:hover {
            transform: scale(1.03) perspective(600px) rotateX(2deg) rotateY(-2deg);
            letter-spacing: 0.15em;
          }
        }
        
        /* Ultra-Premium Loading State */
        .nuvianse-brand.loading {
          animation: 
            ultraGradientFlow 6s ease-in-out infinite,
            ultraPulse 4s ease-in-out infinite,
            ultraLoading 2s ease-in-out infinite;
        }
        
        @keyframes ultraLoading {
          0%, 100% {
            opacity: 0.8;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        /* Ultra-Premium Focus State */
        .nuvianse-brand:focus {
          outline: none;
          transform: scale(1.1) perspective(1000px) rotateX(8deg) rotateY(-8deg);
          filter: 
            drop-shadow(0 0 30px rgba(0, 0, 0, 1))
            drop-shadow(0 0 60px rgba(0, 0, 0, 0.8));
        }
        
        .nuvianse-brand.scrolled:focus {
          transform: scale(1.1) perspective(1000px) rotateX(-5deg) rotateY(5deg);
          filter: 
            drop-shadow(0 0 36px rgba(255, 255, 255, 1))
            drop-shadow(0 0 72px rgba(255, 255, 255, 0.8));
        }
      `}</style>

      <header
        suppressHydrationWarning
        className="fixed z-50 top-2 sm:top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out"
        style={{
          width: `${headerWidth}%`,
          maxWidth: showScrolledState ? '80rem' : 'none',
          borderRadius: `${borderRadius}px`,
          backdropFilter: `blur(${backdropBlur}px)`,
          // Add multiple layered shadows for depth and glow effect
          boxShadow: showScrolledState ? `
            0 0 0 1px rgba(255, 255, 255, ${shadowOpacity * 0.8}),
            0 0 20px rgba(255, 255, 255, ${glowIntensity}),
            0 0 40px rgba(255, 255, 255, ${glowIntensity * 0.6}),
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 4px 16px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.5})
          ` : 'none',
        }}
      >
        <div 
          className={cn(
            "relative border transition-all duration-700 ease-out overflow-hidden",
            showScrolledState
              ? "border-white/20"
              : "border-transparent"
          )}
          style={{
            borderRadius: `${borderRadius}px`,
            backgroundColor: showScrolledState 
              ? `rgba(0, 0, 0, ${bgOpacity})` 
              : `rgba(255, 255, 255, ${bgOpacity})`,
            // Inner border glow
            boxShadow: showScrolledState ? `
              inset 0 0 0 1px rgba(255, 255, 255, ${shadowOpacity * 0.3}),
              inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.4})
            ` : 'none',
          }}
        >
          {/* Subtle gradient overlay for extra depth */}
          {showScrolledState && (
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, ${shadowOpacity * 0.1}) 0%, 
                  transparent 50%, 
                  rgba(255, 255, 255, ${shadowOpacity * 0.05}) 100%)`,
                borderRadius: `${borderRadius}px`,
                opacity: scrollProgress,
              }}
            />
          )}
          
          <div className="relative flex items-center justify-between h-10 sm:h-12 px-3 sm:px-4 lg:px-8 transition-all duration-700 ease-out">
            {/* Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 transition-all duration-700 ease-out">
              <div 
                className="relative overflow-hidden transition-all duration-700 ease-out"
                style={{
                  width: `${32 - (scrollProgress * 4)}px`,
                  height: `${32 - (scrollProgress * 4)}px`,
                  borderRadius: `${scrollProgress * 8}px`,
                  // Add subtle glow to logo when collapsed
                  boxShadow: showScrolledState ? `0 0 8px rgba(255, 255, 255, ${glowIntensity * 0.5})` : 'none',
                }}
              >
                <Image
                  src={
                    showScrolledState
                      ? "/Screenshot_2025-06-26_at_1.15.07_AM-removebg-preview.png"
                      : "/ChatGPT_Image_Jun_27__2025__03_27_29_AM-removebg-preview.png"
                  }
                  alt="Logo"
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                  priority
                />
              </div>
              <span 
                className={cn(
                  "nuvianse-brand transition-all duration-700 ease-out cursor-pointer",
                  showScrolledState ? "scrolled" : "",
                  !mounted ? "loading" : ""
                )}
                style={{
                  fontSize: `${18 - (scrollProgress * 2)}px`,
                  opacity: 1 - (scrollProgress * 0.05),
                }}
                tabIndex={0}
                role="button"
                aria-label="NUVIANSE Brand"
              >
                NUVIANSE
              </span>
            </div>

            {/* Navigation */}
            <nav 
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center transition-all duration-700 ease-out"
              style={{
                gap: `${20 - (scrollProgress * 4)}px`,
              }}
            >
              <Link 
                href="#" 
                className={cn(
                  "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                  showScrolledState ? "text-white" : "text-black"
                )}
                style={{
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  textShadow: showScrolledState ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.3})` : 'none',
                }}
              >
                Home
              </Link>
              <Link 
                href="#features" 
                className={cn(
                  "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                  showScrolledState ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  textShadow: showScrolledState ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
                }}
              >
                AI Agents
              </Link>
              <Link 
                href="#pricing" 
                className={cn(
                  "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                  showScrolledState ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  textShadow: showScrolledState ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
                }}
              >
                Pricing
              </Link>
              <Link 
                href="#demo" 
                className={cn(
                  "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                  showScrolledState ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  textShadow: showScrolledState ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
                }}
              >
                Demo
              </Link>
              <Link 
                href="#about" 
                className={cn(
                  "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                  showScrolledState ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  textShadow: showScrolledState ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
                }}
              >
                About
              </Link>
            </nav>

            {/* Buttons */}
            <div 
              className="flex items-center transition-all duration-700 ease-out"
              style={{
                gap: `${6 - (scrollProgress * 2)}px`,
              }}
            >
              <Link
                href="#login"
                className={cn(
                  "rounded-full font-medium uppercase transition-all duration-300 ease-out border",
                  showScrolledState
                    ? "bg-white/90 text-black border-white/30 hover:bg-white"
                    : "text-black border-gray-300 hover:bg-gray-100"
                )}
                style={{
                  padding: `${3 - (scrollProgress * 1)}px ${12 - (scrollProgress * 2)}px`,
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  borderRadius: `${20 + (scrollProgress * 5)}px`,
                  boxShadow: showScrolledState ? `
                    0 0 8px rgba(255, 255, 255, ${glowIntensity * 0.4}),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  ` : 'none',
                }}
              >
                Login
              </Link>
              <Link
                href="#signup"
                className={cn(
                  "rounded-full font-medium uppercase transition-all duration-300 ease-out",
                  showScrolledState
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                )}
                style={{
                  padding: `${3 - (scrollProgress * 1)}px ${12 - (scrollProgress * 2)}px`,
                  fontSize: `${12 - (scrollProgress * 1)}px`,
                  borderRadius: `${20 + (scrollProgress * 5)}px`,
                  boxShadow: showScrolledState ? `
                    0 0 12px rgba(16, 185, 129, ${glowIntensity * 0.6}),
                    0 0 24px rgba(16, 185, 129, ${glowIntensity * 0.3}),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  ` : 'none',
                }}
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}