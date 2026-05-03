"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const portfolioImages = [
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1516633630673-69bbad7a1047?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1510545934149-278a9d23a5e3?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1559030624-a4625b3a6289?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1524222724992-2202b3734142?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1515937213437-7f2d67460af4?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85&fit=crop",
];

function PhotoCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${index * 0.07}s, transform 0.8s ease ${index * 0.07}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={450}
        className="w-full h-auto object-cover"
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
          filter: "brightness(0.9)",
        }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
      {/* Cyan border on hover */}
      <div
        className="absolute inset-0 border border-[#29CEF2] pointer-events-none"
        style={{ opacity: hovered ? 0.5 : 0, transition: "opacity 0.3s" }}
      />
    </div>
  );
}

export default function PhotographyPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  const parallaxOffset = scrollY * 0.35;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050505" }}>
      <Navigation isScrolled={isScrolled} />

      <main className="text-white min-h-screen">

        {/* ── Hero Section ── */}
        <section className="relative h-screen flex items-end overflow-hidden" style={{ backgroundColor: "#050505" }}>

          {/* Back to Services Button */}
          <div className="absolute top-28 left-6 md:left-16 z-[60]">
            <Link
              href="/services"
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#29CEF2] transition-colors flex items-center gap-2 border border-white/10 hover:border-[#29CEF2]/50 px-5 py-2.5 rounded-full backdrop-blur-sm bg-black/20"
            >
              <span className="text-sm leading-none mb-[2px]">←</span> BACK TO SERVICES
            </Link>
          </div>

          {/* Background image with parallax */}
          <div
            className="absolute inset-[-8%] z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=90&fit=crop"
              alt="Photography Hero"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.96) 100%)"
          }} />

          {/* Subtle cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: "radial-gradient(ellipse 110% 75% at 80% 60%, rgba(41,206,242,0.07) 0%, transparent 60%)"
          }} />

          {/* Hero Content */}
          <div
            className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1.1s ease, transform 1.1s ease",
            }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">
              [ Photography ]
            </p>

            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: "clamp(72px, 12vw, 180px)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)",
              }}
            >
              PHOTO<br />
              <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)", color: "transparent" }}>GRAPHY</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                Capturing Moments in Light &amp; Shadow
              </p>
              <div className="hidden sm:flex items-center gap-2 ml-auto text-white/25 text-[10px] tracking-[0.2em] uppercase">
                <span className="w-5 h-[1px] bg-white/20" />
                {portfolioImages.length} Works
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="absolute bottom-[4.5rem] left-0 right-0 z-10 overflow-hidden py-3 border-t border-white/5">
            <div
              className="whitespace-nowrap text-white/30 text-[10px] tracking-[0.25em] uppercase"
              style={{ animation: "tickerScroll 28s linear infinite" }}
            >
              {Array(6).fill("PORTRAITURE  •  EVENTS  •  EDITORIAL  •  COMMERCIAL  •  LIFESTYLE  •  ").join("")}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-2">
            <div className="w-[1px] h-8 bg-white/20 animate-pulse" />
            <p className="text-white/25 text-[9px] uppercase tracking-[0.3em]">Scroll</p>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[3] pointer-events-none" />
        </section>

        {/* ── Gallery Grid ── */}
        <section className="px-6 md:px-16 pt-16 pb-32" style={{ backgroundColor: "#050505" }}>
          <div className="max-w-[1600px] mx-auto">
            {/* Section label */}
            <div className="border-t border-white/5 pt-10 flex items-center justify-between mb-12">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">Our Photography</p>
              <p className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-white/20">{portfolioImages.length} Works</p>
            </div>

            {/* Masonry-style grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {portfolioImages.map((src, idx) => (
                <div key={idx} className="break-inside-avoid mb-4">
                  <PhotoCard src={src} alt={`Photography work ${idx + 1}`} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style jsx global>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
