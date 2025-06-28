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
  const scrollProgress = Math.min(scrollY / 100, 1);
  const borderRadius = scrollProgress * 50;
  const headerWidth = 100 - (scrollProgress * 8);
  const backdropBlur = 12 + (scrollProgress * 16);
  const bgOpacity = 0.7 + (scrollProgress * 0.25);

  return (
    <header
      className="fixed z-50 top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out"
      style={{
        width: `${headerWidth}%`,
        maxWidth: isScrolled ? '75rem' : 'none',
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      {/* Gradient border wrapper */}
      <div 
        className="relative p-[1px] transition-all duration-700 ease-out"
        style={{
          borderRadius: `${borderRadius}px`,
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.5))'
            : 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.25))',
        }}
      >
        <div 
          className="relative transition-all duration-700 ease-out overflow-hidden"
          style={{
            borderRadius: `${borderRadius}px`,
            background: isScrolled 
              ? `linear-gradient(135deg, 
                  rgba(15, 23, 42, ${bgOpacity}) 0%, 
                  rgba(30, 41, 59, ${bgOpacity * 0.95}) 50%, 
                  rgba(15, 23, 42, ${bgOpacity}) 100%)`
              : `linear-gradient(135deg, 
                  rgba(255, 255, 255, ${bgOpacity}) 0%, 
                  rgba(248, 250, 252, ${bgOpacity * 0.98}) 50%, 
                  rgba(255, 255, 255, ${bgOpacity}) 100%)`,
            boxShadow: isScrolled 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Subtle animated background pattern */}
          <div 
            className="absolute inset-0 opacity-30 transition-opacity duration-700"
            style={{
              background: isScrolled 
                ? 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
                : 'radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
            }}
          />

          <div className="relative flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out">
            {/* Logo */}
            <div className="flex items-center gap-3 transition-all duration-700 ease-out">
              <div 
                className="relative overflow-hidden transition-all duration-700 ease-out ring-2 ring-offset-1"
                style={{
                  width: `${42 - (scrollProgress * 4)}px`,
                  height: `${42 - (scrollProgress * 4)}px`,
                  borderRadius: `${12 + (scrollProgress * 8)}px`,
                  ringColor: isScrolled ? 'rgba(99, 102, 241, 0.3)' : 'rgba(16, 185, 129, 0.2)',
                  ringOffsetColor: isScrolled ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.8)',
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
                {/* Logo glow effect */}
                <div 
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: isScrolled 
                      ? 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                    opacity: scrollProgress * 0.6,
                  }}
                />
              </div>
              <span 
                className="font-bold uppercase tracking-wider transition-all duration-700 ease-out"
                style={{
                  fontSize: `${19 - (scrollProgress * 2)}px`,
                  background: isScrolled 
                    ? 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)'
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: isScrolled 
                    ? '0 0 20px rgba(99, 102, 241, 0.3)'
                    : '0 0 15px rgba(16, 185, 129, 0.2)',
                }}
              >
                Hostpay
              </span>
            </div>

            {/* Navigation */}
            <nav 
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center transition-all duration-700 ease-out"
              style={{
                gap: `${28 - (scrollProgress * 6)}px`,
              }}
            >
              {[
                { href: "#", label: "Home", active: true },
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
                { href: "#about", label: "About" }
              ].map((item, index) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="relative font-semibold uppercase tracking-wide transition-all duration-300 ease-out group"
                  style={{
                    fontSize: `${13 - (scrollProgress * 0.5)}px`,
                    color: isScrolled 
                      ? (item.active ? '#e2e8f0' : '#94a3b8')
                      : (item.active ? '#1e293b' : '#475569'),
                  }}
                >
                  {item.label}
                  {/* Hover underline effect */}
                  <span 
                    className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 ease-out group-hover:w-full"
                    style={{
                      background: isScrolled 
                        ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                        : 'linear-gradient(90deg, #10b981, #3b82f6)',
                    }}
                  />
                  {/* Active indicator */}
                  {item.active && (
                    <span 
                      className="absolute -bottom-1 left-0 h-0.5 w-full transition-all duration-700 ease-out"
                      style={{
                        background: isScrolled 
                          ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                          : 'linear-gradient(90deg, #10b981, #3b82f6)',
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Buttons */}
            <div 
              className="flex items-center transition-all duration-700 ease-out"
              style={{
                gap: `${10 - (scrollProgress * 2)}px`,
              }}
            >
              <Link
                href="#login"
                className="relative font-semibold uppercase tracking-wide transition-all duration-300 ease-out group overflow-hidden"
                style={{
                  padding: `${6 - (scrollProgress * 1)}px ${20 - (scrollProgress * 2)}px`,
                  fontSize: `${13 - (scrollProgress * 0.5)}px`,
                  borderRadius: `${28 + (scrollProgress * 7)}px`,
                  background: isScrolled 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
                  border: isScrolled 
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  color: isScrolled ? '#e2e8f0' : '#374151',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="relative z-10">Login</span>
                {/* Hover effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isScrolled 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'
                      : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
                  }}
                />
              </Link>
              
              <Link
                href="#signup"
                className="relative font-semibold uppercase tracking-wide transition-all duration-300 ease-out group overflow-hidden"
                style={{
                  padding: `${6 - (scrollProgress * 1)}px ${20 - (scrollProgress * 2)}px`,
                  fontSize: `${13 - (scrollProgress * 0.5)}px`,
                  borderRadius: `${28 + (scrollProgress * 7)}px`,
                  background: isScrolled 
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    : 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  boxShadow: isScrolled 
                    ? '0 8px 25px -8px rgba(99, 102, 241, 0.4)'
                    : '0 8px 25px -8px rgba(16, 185, 129, 0.4)',
                }}
              >
                <span className="relative z-10">Sign up</span>
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isScrolled 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}