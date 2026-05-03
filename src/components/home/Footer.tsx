"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/aaliyahillusions" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100082687053196" },
  { name: "TikTok", url: "https://www.tiktok.com/@aaliyahillusions" },
  { name: "Twitter", url: "https://twitter.com/aaliyahillusions" },
];

export default function Footer() {
  return (
    <footer className="footer_footer" style={{ background: '#000', borderTop: 'none', marginTop: '0' }}>

      {/* Cinematic radial glow — fixed: using a div, not <picture> */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(41, 206, 242, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 50% 100%, rgba(41, 206, 242, 0.07) 0%, transparent 70%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div className="container_container footer_container">

        {/* Top Row: nav links left + CTA right */}
        <div className="footer_top">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">

            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2 font-medium">Navigate</p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-light tracking-[0.2em] uppercase text-white/60 hover:text-[#29CEF2] transition-colors duration-200 relative group w-fit"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#29CEF2] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Social + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-10">
              <div className="flex flex-col lg:items-end gap-3">
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-2 font-medium">Follow</p>
                <div className="flex flex-wrap gap-6 lg:justify-end">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-light tracking-[0.2em] uppercase text-white/60 hover:text-[#29CEF2] transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#29CEF2] group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="text-[#29CEF2] font-black text-xl uppercase tracking-wider hover:text-white transition-all duration-300 group flex items-center gap-3 border border-[#29CEF2]/30 px-8 py-4 hover:border-[#29CEF2] hover:bg-[#29CEF2]/5"
              >
                LET&apos;S TALK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand name — Transparent Outline Style */}
        <div className="footer_middle mt-20 md:mt-24">
          <h2
            className={playfair.className}
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 11rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 0.9,
              textAlign: 'center',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.35)',
              width: '100%',
              userSelect: 'none',
            }}
          >
            Aaliyah Illusions
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="footer_bottom flex">
          <span className="text-white/25 text-[11px] font-light tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} Aaliyah Illusions LLC. All Rights Reserved.
          </span>
          <span className="text-white/15 text-[11px] font-light tracking-[0.15em] uppercase ml-auto">
            Premium Event Photography
          </span>
        </div>

      </div>
    </footer>
  );
}
