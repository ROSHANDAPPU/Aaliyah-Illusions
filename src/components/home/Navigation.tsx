"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "SERVICES", href: "/services" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tight">
            <span className="text-primary">VIS</span>
            <span className="text-neutral-text-light">≡</span>
            <span className="text-neutral-text-light">NTA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#29CEF2] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/sign-in"
              className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2]"
            >
              SIGN IN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              href="/sign-in"
              className="block text-sm font-light tracking-[0.2em] uppercase text-center border border-white/20 px-6 py-3 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors"
            >
              SIGN IN
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
