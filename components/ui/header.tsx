"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
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
  }, [lastScrollY]);

  // Enhanced smooth transition calculations with easing
  const scrollProgress = Math.min(scrollY / 80, 1); // Faster transition over 80px
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3); // Smooth easing function
  const easedProgress = easeOutCubic(scrollProgress);
  
  // Progressive values with smooth curves
  const borderRadius = easedProgress * 24; // Max 24px for more subtle rounding
  const headerWidth = 100 - (easedProgress * 8); // From 100% to 92%
  const backdropBlur = 6 + (easedProgress * 14); // From 6px to 20px blur
  const bgOpacity = isScrolled ? 0.85 + (easedProgress * 0.1) : 0.7; // More opaque when collapsed
  
  // Enhanced shadow and glow effects
  const shadowOpacity = easedProgress * 0.4;
  const glowIntensity = easedProgress * 0.3;
  const borderOpacity = easedProgress * 0.6;

  return (
    <header
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out",
        isVisible ? "top-3 opacity-100 translate-y-0" : "top-0 opacity-90 -translate-y-2"
      )}
      style={{
        width: `${headerWidth}%`,
        maxWidth: isScrolled ? '72rem' : 'none',
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${backdropBlur}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${backdropBlur}px) saturate(180%)`,
        // Enhanced multi-layered shadows with better depth
        boxShadow: isScrolled ? `
          0 0 0 1px rgba(255, 255, 255, ${borderOpacity * 0.8}),
          0 0 20px rgba(255, 255, 255, ${glowIntensity * 0.6}),
          0 0 40px rgba(255, 255, 255, ${glowIntensity * 0.3}),
          0 0 80px rgba(255, 255, 255, ${glowIntensity * 0.1}),
          0 8px 32px rgba(0, 0, 0, 0.15),
          0 4px 16px rgba(0, 0, 0, 0.1),
          0 2px 8px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.6}),
          inset 0 -1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.2})
        ` : `
          0 2px 8px rgba(0, 0, 0, 0.04),
          0 1px 4px rgba(0, 0, 0, 0.02)
        `,
        transform: `translateX(-50%) scale(${0.98 + (easedProgress * 0.02)})`, // Subtle scale effect
      }}
    >
      <div 
        className={cn(
          "relative border transition-all duration-500 ease-out overflow-hidden",
          isScrolled
            ? "border-white/30"
            : "border-white/10"
        )}
        style={{
          borderRadius: `${borderRadius}px`,
          backgroundColor: isScrolled 
            ? `rgba(15, 15, 15, ${bgOpacity})` 
            : `rgba(255, 255, 255, ${bgOpacity})`,
          // Enhanced inner glow with gradient borders
          boxShadow: isScrolled ? `
            inset 0 0 0 1px rgba(255, 255, 255, ${borderOpacity * 0.4}),
            inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.5}),
            inset 0 -1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.2})
          ` : `
            inset 0 1px 0 rgba(255, 255, 255, 0.3)
          `,
        }}
      >
        {/* Enhanced gradient overlay with animated shimmer effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            background: isScrolled ? `
              linear-gradient(135deg, 
                rgba(255, 255, 255, ${shadowOpacity * 0.15}) 0%, 
                transparent 30%, 
                rgba(255, 255, 255, ${shadowOpacity * 0.05}) 70%,
                transparent 100%),
              radial-gradient(circle at 30% 20%, 
                rgba(255, 255, 255, ${shadowOpacity * 0.1}) 0%, 
                transparent 50%)
            ` : `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%)
            `,
            borderRadius: `${borderRadius}px`,
            opacity: easedProgress,
          }}
        />
        
        {/* Subtle animated border highlight */}
        {isScrolled && (
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                transparent 0deg, 
                rgba(255, 255, 255, ${glowIntensity * 0.3}) 90deg, 
                transparent 180deg, 
                rgba(255, 255, 255, ${glowIntensity * 0.2}) 270deg, 
                transparent 360deg)`,
              borderRadius: `${borderRadius}px`,
              mask: `radial-gradient(circle at center, transparent 98%, black 100%)`,
              WebkitMask: `radial-gradient(circle at center, transparent 98%, black 100%)`,
              opacity: easedProgress * 0.6,
            }}
          />
        )}
        
        <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out"
             style={{ height: `${48 - (easedProgress * 4)}px` }}>
          {/* Logo with enhanced animations */}
          <div className="flex items-center transition-all duration-500 ease-out"
               style={{ gap: `${8 - (easedProgress * 2)}px` }}>
            <div 
              className="relative overflow-hidden transition-all duration-500 ease-out"
              style={{
                width: `${40 - (easedProgress * 4)}px`,
                height: `${40 - (easedProgress * 4)}px`,
                borderRadius: `${6 + (easedProgress * 6)}px`,
                // Enhanced logo glow with pulsing effect
                boxShadow: isScrolled ? `
                  0 0 12px rgba(255, 255, 255, ${glowIntensity * 0.4}),
                  0 0 24px rgba(255, 255, 255, ${glowIntensity * 0.2}),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                ` : 'none',
                filter: `brightness(${1 + (easedProgress * 0.1)}) contrast(${1 + (easedProgress * 0.05)})`,
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
                className="object-cover transition-all duration-500 ease-out"
                priority
              />
            </div>
            <span 
              className={cn(
                "font-semibold uppercase transition-all duration-500 ease-out",
                isScrolled ? "text-purple-300" : "text-purple-400"
              )}
              style={{
                fontSize: `${18 - (easedProgress * 2)}px`,
                opacity: 1 - (easedProgress * 0.05),
                letterSpacing: `${0.5 + (easedProgress * 0.5)}px`,
                // Enhanced text glow with color transition
                textShadow: isScrolled ? `
                  0 0 8px rgba(168, 85, 247, ${glowIntensity * 0.8}),
                  0 0 16px rgba(168, 85, 247, ${glowIntensity * 0.4})
                ` : 'none',
                transform: `translateY(${easedProgress * -1}px)`,
              }}
            >
              Hostpay
            </span>
          </div>

          {/* Navigation with staggered animations */}
          <nav 
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center transition-all duration-500 ease-out"
            style={{
              gap: `${20 - (easedProgress * 4)}px`,
              transform: `translateY(${easedProgress * -0.5}px) scale(${1 - (easedProgress * 0.02)})`,
            }}
          >
            {[
              { href: "#", text: "Home", active: true },
              { href: "#features", text: "Features" },
              { href: "#pricing", text: "Pricing" },
              { href: "#faq", text: "FAQ" },
              { href: "#about", text: "About" }
            ].map((item, index) => (
              <Link 
                key={item.text}
                href={item.href} 
                className={cn(
                  "font-medium transition-all duration-300 ease-out uppercase relative",
                  isScrolled 
                    ? item.active 
                      ? "text-white" 
                      : "text-white/80 hover:text-white" 
                    : item.active 
                      ? "text-black" 
                      : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${13 - (easedProgress * 1)}px`,
                  textShadow: isScrolled ? `0 0 4px rgba(255, 255, 255, ${glowIntensity * 0.3})` : 'none',
                  transitionDelay: `${index * 50}ms`,
                  transform: `translateY(${easedProgress * -0.5}px)`,
                }}
              >
                {item.text}
                {/* Active indicator */}
                {item.active && (
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-500 ease-out"
                    style={{
                      background: isScrolled 
                        ? `linear-gradient(90deg, transparent, rgba(255,255,255,${glowIntensity}), transparent)`
                        : `linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)`,
                      opacity: easedProgress,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Buttons with enhanced effects */}
          <div 
            className="flex items-center transition-all duration-500 ease-out"
            style={{
              gap: `${6 - (easedProgress * 1)}px`,
              transform: `translateY(${easedProgress * -0.5}px)`,
            }}
          >
            <Link
              href="#login"
              className={cn(
                "rounded-full font-medium uppercase transition-all duration-300 ease-out border relative overflow-hidden",
                isScrolled
                  ? "bg-white/10 text-white border-white/30 hover:bg-white/20"
                  : "text-black border-gray-300 hover:bg-gray-100"
              )}
              style={{
                padding: `${6 - (easedProgress * 1)}px ${14 - (easedProgress * 2)}px`,
                fontSize: `${13 - (easedProgress * 1)}px`,
                borderRadius: `${20 + (easedProgress * 8)}px`,
                backdropFilter: isScrolled ? `blur(${4 + (easedProgress * 4)}px)` : 'none',
                boxShadow: isScrolled ? `
                  0 0 8px rgba(255, 255, 255, ${glowIntensity * 0.3}),
                  0 0 16px rgba(255, 255, 255, ${glowIntensity * 0.1}),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                ` : 'none',
              }}
            >
              Login
            </Link>
            <Link
              href="#signup"
              className={cn(
                "rounded-full font-medium uppercase transition-all duration-300 ease-out relative overflow-hidden",
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-500"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              )}
              style={{
                padding: `${6 - (easedProgress * 1)}px ${14 - (easedProgress * 2)}px`,
                fontSize: `${13 - (easedProgress * 1)}px`,
                borderRadius: `${20 + (easedProgress * 8)}px`,
                boxShadow: isScrolled ? `
                  0 0 12px rgba(16, 185, 129, ${glowIntensity * 0.6}),
                  0 0 24px rgba(16, 185, 129, ${glowIntensity * 0.3}),
                  0 0 48px rgba(16, 185, 129, ${glowIntensity * 0.1}),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                ` : `
                  0 2px 8px rgba(16, 185, 129, 0.2)
                `,
                transform: `scale(${1 + (easedProgress * 0.02)})`,
              }}
            >
              Sign up
              {/* Subtle shine effect */}
              <div 
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(135deg, 
                    transparent 0%, 
                    rgba(255,255,255,${glowIntensity * 0.2}) 50%, 
                    transparent 100%)`,
                  borderRadius: `${20 + (easedProgress * 8)}px`,
                  opacity: easedProgress,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}