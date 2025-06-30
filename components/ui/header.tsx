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
      {/* Custom Font Styles for NUVIANSE */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800;900&family=Exo+2:wght@400;600;700;800;900&display=swap');
        
        .nuvianse-brand {
          font-family: 'Orbitron', 'Exo 2', monospace;
          font-weight: 900;
          letter-spacing: 0.15em;
          position: relative;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #e0e7ff 15%,
            #c7d2fe 30%,
            #a5b4fc 45%,
            #818cf8 60%,
            #6366f1 75%,
            #4f46e5 90%,
            #4338ca 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 4s ease-in-out infinite;
          text-transform: uppercase;
          text-shadow: none;
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.3));
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nuvianse-brand.scrolled {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f8fafc 10%,
            #e2e8f0 20%,
            #cbd5e1 30%,
            #94a3b8 40%,
            #64748b 50%,
            #475569 60%,
            #334155 70%,
            #1e293b 80%,
            #0f172a 90%,
            #020617 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShiftWhite 3s ease-in-out infinite;
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.4)) 
                  drop-shadow(0 0 24px rgba(255, 255, 255, 0.2));
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 30px rgba(255, 255, 255, 0.1);
        }
        
        .nuvianse-brand::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(99, 102, 241, 0.1) 50%,
            transparent 70%
          );
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .nuvianse-brand.scrolled::before {
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 70%
          );
        }
        
        .nuvianse-brand:hover::before {
          opacity: 1;
        }
        
        .nuvianse-brand::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          filter: blur(1px);
          opacity: 0.6;
          z-index: -1;
          animation: inherit;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
        
        @keyframes gradientShiftWhite {
          0%, 100% {
            background-position: 0% 50%;
          }
          33% {
            background-position: 100% 0%;
          }
          66% {
            background-position: 100% 100%;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) rotate(45deg);
          }
        }
        
        .nuvianse-brand:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 16px rgba(99, 102, 241, 0.5)) 
                  drop-shadow(0 0 32px rgba(99, 102, 241, 0.3));
        }
        
        .nuvianse-brand.scrolled:hover {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) 
                  drop-shadow(0 0 40px rgba(255, 255, 255, 0.4));
        }
        
        /* Responsive font sizing */
        @media (max-width: 768px) {
          .nuvianse-brand {
            font-size: 0.9rem;
            letter-spacing: 0.1em;
          }
        }
        
        @media (max-width: 480px) {
          .nuvianse-brand {
            font-size: 0.8rem;
            letter-spacing: 0.08em;
          }
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
                  "nuvianse-brand transition-all duration-700 ease-out",
                  showScrolledState ? "scrolled" : ""
                )}
                style={{
                  fontSize: `${16 - (scrollProgress * 2)}px`,
                  opacity: 1 - (scrollProgress * 0.05),
                }}
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