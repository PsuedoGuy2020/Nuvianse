"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  return (
    <header
      className={cn(
        "fixed z-50 top-4 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out",
        isScrolled
          ? "w-[90%] max-w-5xl rounded-full shadow-xl border border-gray-800 bg-black/80 backdrop-blur"
          : "w-full border-b border-transparent bg-white/60 backdrop-blur"
      )}
    >
      <div className="relative flex items-center justify-between h-16 px-6 sm:px-8 lg:px-12 transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden">
            <Image
              src={
                isScrolled
                  ? "/Screenshot_2025-06-26_at_1.15.07_AM-removebg-preview.png"
                  : "/ChatGPT_Image_Jun_27__2025__03_27_29_AM-removebg-preview.png"
              }
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-semibold text-purple-400 uppercase">Hostpay</span>
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-8">
          <Link href="#" className="text-base font-medium text-black hover:text-black transition-colors uppercase">
            Home
          </Link>
          <Link href="#features" className="text-base font-medium text-black/70 hover:text-black transition-colors uppercase">
            Features
          </Link>
          <Link href="#pricing" className="text-base font-medium text-black/70 hover:text-black transition-colors uppercase">
            Pricing
          </Link>
          <Link href="#faq" className="text-base font-medium text-black/70 hover:text-black transition-colors uppercase">
            FAQ
          </Link>
          <Link href="#about" className="text-base font-medium text-black/70 hover:text-black transition-colors uppercase">
            About
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className={cn(
              "rounded-full px-5 py-1.5 text-base font-medium uppercase transition-colors border",
              isScrolled
                ? "bg-white/90 text-black border-transparent hover:bg-white"
                : "text-black border-gray-300 hover:bg-gray-100"
            )}
          >
            Login
          </Link>
          <Link
            href="#signup"
            className={cn(
              "rounded-full px-5 py-1.5 text-base font-medium uppercase transition-colors",
              isScrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            )}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
