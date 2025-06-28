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
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
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

  // Smooth easing function for better transitions
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Calculate smooth transition values with custom easing
  const rawProgress = Math.min(scrollY / 120, 1); // Transition over 120px for smoother feel
  const scrollProgress = easeOutCubic(rawProgress);
  const morphProgress = easeInOutCubic(rawProgress);
  
  // Progressive values with smooth curves
  const borderRadius = morphProgress * 50;
  const headerWidth = 100 - (morphProgress * 12);
  const headerMaxWidth = isScrolled ? '75rem' : 'none';
  const backdropBlur = 6 + (scrollProgress * 16);
  const bgOpacity = isScrolled ? 0.85 + (scrollProgress * 0.1) : 0.65;
  
  // Enhanced shadow and glow effects
  const shadowOpacity = scrollProgress * 0.4;
  const glowIntensity = scrollProgress * 0.25;
  const innerGlow = scrollProgress * 0.15;

  return (
    <header
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
        isVisible ? "top-3 opacity-100 translate-y-0" : "top-0 opacity-90 -translate-y-2"
      )}
      style={{
        width: `${headerWidth}%`,
        maxWidth: headerMaxWidth,
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${backdropBlur}px) saturate(1.2)`,
        WebkitBackdropFilter: `blur(${backdropBlur}px) saturate(1.2)`,
        transform: `translateX(-50%) translateY(${isVisible ? 0 : -8}px)`,
        // Multi-layered shadow system for depth
        boxShadow: isScrolled ? `
          0 0 0 1px rgba(255, 255, 255, ${shadowOpacity * 0.6}),
          0 0 20px rgba(255, 255, 255, ${glowIntensity * 0.8}),
          0 0 40px rgba(255, 255, 255, ${glowIntensity * 0.4}),
          0 0 80px rgba(255, 255, 255, ${glowIntensity * 0.2}),
          0 8px 32px rgba(0, 0, 0, 0.15),
          0 4px 16px rgba(0, 0, 0, 0.1),
          0 2px 8px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, ${innerGlow})
        ` : '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div 
        className={cn(
          "relative border transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden",
          isScrolled
            ? "border-white/25"
            : "border-white/10"
        )}
        style={{
          borderRadius: `${borderRadius}px`,
          backgroundColor: isScrolled 
            ? `rgba(0, 0, 0, ${bgOpacity})` 
            : `rgba(255, 255, 255, ${bgOpacity})`,
          // Enhanced inner glow with multiple layers
          boxShadow: isScrolled ? `
            inset 0 0 0 1px rgba(255, 255, 255, ${shadowOpacity * 0.4}),
            inset 0 1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.6}),
            inset 0 -1px 0 rgba(255, 255, 255, ${shadowOpacity * 0.2})
          ` : 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            background: isScrolled ? `
              linear-gradient(135deg, 
                rgba(255, 255, 255, ${shadowOpacity * 0.12}) 0%, 
                transparent 30%, 
                rgba(255, 255, 255, ${shadowOpacity * 0.06}) 70%,
                transparent 100%)
            ` : `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%, 
                rgba(255, 255, 255, 0.05) 100%)
            `,
            borderRadius: `${borderRadius}px`,
            opacity: scrollProgress,
          }}
        />

        {/* Subtle animated border highlight */}
        {isScrolled && (
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-[1000ms] ease-out"
            style={{
              background: `conic-gradient(from 0deg, 
                rgba(255, 255, 255, ${glowIntensity * 0.3}), 
                transparent 90deg, 
                rgba(255, 255, 255, ${glowIntensity * 0.2}) 180deg, 
                transparent 270deg, 
                rgba(255, 255, 255, ${glowIntensity * 0.3}) 360deg)`,
              borderRadius: `${borderRadius}px`,
              padding: '1px',
              mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              maskComposite: 'xor',
              WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              WebkitMaskComposite: 'xor',
              opacity: scrollProgress * 0.6,
            }}
          />
        )}
        
        <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
             style={{ height: `${48 - (scrollProgress * 4)}px` }}>
          
          {/* Logo with smooth morphing */}
          <div className="flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
               style={{ gap: `${8 - (scrollProgress * 2)}px` }}>
            <div 
              className="relative overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                width: `${44 - (scrollProgress * 6)}px`,
                height: `${44 - (scrollProgress * 6)}px`,
                borderRadius: `${6 + (scrollProgress * 6)}px`,
                boxShadow: isScrolled ? `
                  0 0 12px rgba(255, 255, 255, ${glowIntensity * 0.6}),
                  0 0 24px rgba(255, 255, 255, ${glowIntensity * 0.3})
                ` : 'none',
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
                className="object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  filter: isScrolled ? `brightness(1.1) contrast(1.05)` : 'none',
                }}
                priority
              />
            </div>
            <span 
              className={cn(
                "font-semibold uppercase transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                isScrolled ? "text-purple-300" : "text-purple-400"
              )}
              style={{
                fontSize: `${20 - (scrollProgress * 3)}px`,
                opacity: 1 - (scrollProgress * 0.15),
                letterSpacing: `${0.5 + (scrollProgress * 0.5)}px`,
                textShadow: isScrolled ? `
                  0 0 8px rgba(168, 85, 247, ${glowIntensity * 0.8}),
                  0 0 16px rgba(168, 85, 247, ${glowIntensity * 0.4})
                ` : 'none',
              }}
            >
              Hostpay
            </span>
          </div>

          {/* Navigation with staggered animations */}
          <nav 
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              gap: `${28 - (scrollProgress * 6)}px`,
              opacity: 1 - (scrollProgress * 0.1),
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
                  "font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] uppercase relative",
                  isScrolled 
                    ? item.active 
                      ? "text-white" 
                      : "text-white/80 hover:text-white" 
                    : item.active 
                      ? "text-black" 
                      : "text-black/70 hover:text-black"
                )}
                style={{
                  fontSize: `${15 - (scrollProgress * 1.5)}px`,
                  textShadow: isScrolled ? `0 0 6px rgba(255, 255, 255, ${glowIntensity * 0.4})` : 'none',
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {item.text}
                {/* Active indicator */}
                {item.active && (
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    style={{
                      background: isScrolled 
                        ? `linear-gradient(90deg, rgba(255,255,255,${glowIntensity}) 0%, rgba(255,255,255,${glowIntensity * 0.5}) 100%)`
                        : `linear-gradient(90deg, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.4) 100%)`,
                      borderRadius: '2px',
                      boxShadow: isScrolled ? `0 0 4px rgba(255,255,255,${glowIntensity * 0.6})` : 'none',
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Buttons with enhanced animations */}
          <div 
            className="flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              gap: `${10 - (scrollProgress * 2)}px`,
            }}
          >
            <Link
              href="#login"
              className={cn(
                "font-medium uppercase transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border relative overflow-hidden",
                isScrolled
                  ? "bg-white/90 text-black border-white/40 hover:bg-white hover:border-white/60"
                  : "text-black border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              )}
              style={{
                padding: `${6 - (scrollProgress * 1.5)}px ${20 - (scrollProgress * 3)}px`,
                fontSize: `${15 - (scrollProgress * 1.5)}px`,
                borderRadius: `${28 + (scrollProgress * 8)}px`,
                boxShadow: isScrolled ? `
                  0 0 12px rgba(255, 255, 255, ${glowIntensity * 0.5}),
                  0 0 24px rgba(255, 255, 255, ${glowIntensity * 0.2}),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                ` : '0 2px 4px rgba(0,0,0,0.1)',
                backdropFilter: isScrolled ? 'blur(8px)' : 'none',
              }}
            >
              Login
            </Link>
            <Link
              href="#signup"
              className={cn(
                "font-medium uppercase transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative overflow-hidden",
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-500"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              )}
              style={{
                padding: `${6 - (scrollProgress * 1.5)}px ${20 - (scrollProgress * 3)}px`,
                fontSize: `${15 - (scrollProgress * 1.5)}px`,
                borderRadius: `${28 + (scrollProgress * 8)}px`,
                boxShadow: isScrolled ? `
                  0 0 16px rgba(16, 185, 129, ${glowIntensity * 0.8}),
                  0 0 32px rgba(16, 185, 129, ${glowIntensity * 0.4}),
                  0 0 48px rgba(16, 185, 129, ${glowIntensity * 0.2}),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                ` : '0 4px 8px rgba(16, 185, 129, 0.3)',
              }}
            >
              Sign up
              {/* Animated shine effect */}
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
                  transform: 'translateX(-100%)',
                  animation: isScrolled ? 'shine 2s infinite' : 'none',
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Add keyframes for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </header>
  );
}