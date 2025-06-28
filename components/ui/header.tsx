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

  return (
    <header
      className="fixed z-50 top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out"
      style={{
        width: `${headerWidth}%`,
        maxWidth: isScrolled ? '80rem' : 'none',
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      <div 
        className={cn(
          "relative border transition-all duration-700 ease-out",
          isScrolled
            ? "border-gray-800/50 bg-black/80 shadow-2xl"
            : "border-transparent bg-white/60 shadow-sm"
        )}
        style={{
          borderRadius: `${borderRadius}px`,
          backgroundColor: isScrolled 
            ? `rgba(0, 0, 0, ${bgOpacity})` 
            : `rgba(255, 255, 255, ${bgOpacity})`,
        }}
      >
        <div className="relative flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out">
          {/* Logo */}
          <div className="flex items-center gap-2 transition-all duration-700 ease-out">
            <div 
              className="relative overflow-hidden transition-all duration-700 ease-out"
              style={{
                width: `${40 - (scrollProgress * 4)}px`,
                height: `${40 - (scrollProgress * 4)}px`,
                borderRadius: `${scrollProgress * 8}px`,
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
                fontSize: `${18 - (scrollProgress * 2)}px`,
                opacity: 1 - (scrollProgress * 0.1),
              }}
            >
              Hostpay
            </span>
          </div>

          {/* Navigation */}
          <nav 
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center transition-all duration-700 ease-out"
            style={{
              gap: `${24 - (scrollProgress * 4)}px`,
            }}
          >
            <Link 
              href="#" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white" : "text-black"
              )}
              style={{
                fontSize: `${14 - (scrollProgress * 1)}px`,
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
                fontSize: `${14 - (scrollProgress * 1)}px`,
              }}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${14 - (scrollProgress * 1)}px`,
              }}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${14 - (scrollProgress * 1)}px`,
              }}
            >
              FAQ
            </Link>
            <Link 
              href="#about" 
              className={cn(
                "font-medium hover:text-black transition-all duration-300 ease-out uppercase",
                isScrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
              )}
              style={{
                fontSize: `${14 - (scrollProgress * 1)}px`,
              }}
            >
              About
            </Link>
          </nav>

          {/* Buttons */}
          <div 
            className="flex items-center transition-all duration-700 ease-out"
            style={{
              gap: `${8 - (scrollProgress * 2)}px`,
            }}
          >
            <Link
              href="#login"
              className={cn(
                "rounded-full font-medium uppercase transition-all duration-300 ease-out border",
                isScrolled
                  ? "bg-white/90 text-black border-transparent hover:bg-white"
                  : "text-black border-gray-300 hover:bg-gray-100"
              )}
              style={{
                padding: `${4 - (scrollProgress * 1)}px ${16 - (scrollProgress * 2)}px`,
                fontSize: `${14 - (scrollProgress * 1)}px`,
                borderRadius: `${25 + (scrollProgress * 5)}px`,
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
                padding: `${4 - (scrollProgress * 1)}px ${16 - (scrollProgress * 2)}px`,
                fontSize: `${14 - (scrollProgress * 1)}px`,
                borderRadius: `${25 + (scrollProgress * 5)}px`,
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}