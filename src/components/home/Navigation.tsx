"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function Navigation({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/LOGO MAIN.JPG");
  const pathname = usePathname();
  const isPortfolioSubpage = pathname.startsWith('/portfolio/') && pathname !== '/portfolio';

  useEffect(() => {
    setLogoSrc(isScrolled ? "/LOGO1.png" : "/LOGO MAIN.JPG");
  }, [isScrolled]);

  const menuItems = [
    { name: "SERVICES", href: "/services" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Desktop Menu */}
          {isPortfolioSubpage ? (
            <div className="hidden md:flex flex-1 items-center">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="text-white hover:text-[#29CEF2] transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Centered Logo */}
              <div className="flex-1 flex justify-center">
                <a href="/">
                  <img src={logoSrc} alt="Aaliyah Illusions Logo" className="h-8 w-auto" />
                </a>
              </div>

              {/* Spacer for balance */}
              <div className="w-6"></div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center">
              {/* Left Menu Items */}
              <div className="flex items-center gap-12">
                <a
                  href="/services"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
                >
                  SERVICES
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="/portfolio"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
                >
                  PORTFOLIO
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
                </a>
                 <a
                  href="/gallery"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
                >
                  GALLERY
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
                </a>

              </div>

              {/* Centered Logo */}
              <div className="flex-1 flex justify-center">
                <a href="/">
                  <img src={logoSrc} alt="Aaliyah Illusions Logo" className="h-8 w-auto" />
                </a>
              </div>

              {/* Right Menu Items */}
              <div className="flex items-center gap-12">
                <a
                  href="/about"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
                >
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="/contact"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
                >
                  CONTACT
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="/login"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2]"
                >
                  LOGIN
                </a>
              </div>
            </div>
          )}

          {/* Mobile Menu Button and Logo */}
          {isPortfolioSubpage ? (
            <div className="md:hidden flex justify-between items-center w-full">
              <button
                onClick={() => window.history.back()}
                className="text-white hover:text-[#29CEF2] transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <a href="/">
                <img src={logoSrc} alt="Aaliyah Illusions Logo" className="h-8 w-auto" />
              </a>
              <div className="w-6"></div>
            </div>
          ) : (
            <div className="md:hidden flex justify-between items-center w-full">
              <a href="/">
                <img src={logoSrc} alt="Aaliyah Illusions Logo" className="h-8 w-auto" />
              </a>
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-6 bg-black/95 backdrop-blur-md">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-light tracking-[0.2em] uppercase hover:text-[#29CEF2] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/login"
              className="block text-sm font-light tracking-[0.2em] uppercase text-center border border-white/20 px-6 py-3 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors"
            >
              LOGIN
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
