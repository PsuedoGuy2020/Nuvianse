"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
  }, []);

  // Calculate smooth transition values based on scroll position
  const scrollProgress = Math.min(scrollY / 100, 1); // Transition over 100px
  const borderRadius = scrollProgress * 50; // Max 50px border radius
  const headerWidth = 100 - (scrollProgress * 10); // From 100% to 90%
  const backdropBlur = 8 + (scrollProgress * 12); // From 8px to 20px blur
  const bgOpacity = 0.6 + (scrollProgress * 0.2); // From 0.6 to 0.8 opacity
  
  // Shadow intensity based on scroll progress
  const shadowOpacity = scrollProgress * 0.3; // Max 0.3 opacity for subtle effect
  const glowIntensity = scrollProgress * 0.2; // Max 0.2 for glow effect

  return (
    <header
      suppressHydrationWarning
      className="fixed z-50 top-2 sm:top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out"
      style={{
        width: `${headerWidth}%`,
        maxWidth: isScrolled ? '80rem' : 'none',
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${backdropBlur}px)`,
        // Add multiple layered shadows for depth and glow effect
        boxShadow: isScrolled ? `
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
          isScrolled
            ? "border-white/20"
            : "border-transparent"
        )}
        style={{
          borderRadius: `${borderRadius}px`,
          backgroundColor: isScrolled 
            ? `rgba(0, 0, 0, ${bgOpacity})` 
            : `rgba(255, 255, 255, ${bgOpacity})`,
          // Inner border glow
          boxShadow: isScrolled ? `
            inset 0 0 0 1px rgba(255, 255, 255, ${shadowOpacity * 0.3}),
            inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.4})
          ` : 'none',
        }}
      >
        {/* Subtle gradient overlay for extra depth */}
        {isScrolled && (
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
                boxShadow: isScrolled ? `0 0 8px rgba(255, 255, 255, ${glowIntensity * 0.5})` : 'none',
              }}
            >
              <Image
                src={
                  isScrolled
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
                "font-semibold text-purple-400 uppercase transition-all duration-700 ease-out",
                isScrolled ? "text-purple-300" : "text-purple-400"
              )}
              style={{
                fontSize: `${14 - (scrollProgress * 2)}px`,
                opacity: 1 - (scrollProgress * 0.1),
                // Add text glow when collapsed
                textShadow: isScrolled ? `0 0 8px rgba(168, 85, 247, ${glowIntensity})` : 'none',
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
                isScrolled ? "text-white" : "text-black"
              )}
              style={{
                fontSize: `${12 - (scrollProgress * 1)}px`,
                textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.3})` : 'none',
              }}
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${12 - (scrollProgress * 1)}px`,
                textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
              }}
            >
              AI Agents
            </Link>
            <Link 
              href="#pricing" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${12 - (scrollProgress * 1)}px`,
                textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
              }}
            >
              Pricing
            </Link>
            <Link 
              href="#demo" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${12 - (scrollProgress * 1)}px`,
                textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
              }}
            >
              Demo
            </Link>
            <Link 
              href="#about" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${12 - (scrollProgress * 1)}px`,
                textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.2})` : 'none',
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
                isScrolled
                  ? "bg-white/90 text-black border-white/30 hover:bg-white"
                  : "text-black border-gray-300 hover:bg-gray-100"
              )}
              style={{
                padding: `${3 - (scrollProgress * 1)}px ${12 - (scrollProgress * 2)}px`,
                fontSize: `${12 - (scrollProgress * 1)}px`,
                borderRadius: `${20 + (scrollProgress * 5)}px`,
                boxShadow: isScrolled ? `
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
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              )}
              style={{
                padding: `${3 - (scrollProgress * 1)}px ${12 - (scrollProgress * 2)}px`,
                fontSize: `${12 - (scrollProgress * 1)}px`,
                borderRadius: `${20 + (scrollProgress * 5)}px`,
                boxShadow: isScrolled ? `
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
  );
}