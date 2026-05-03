"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85&fit=crop", alt: "Wedding photography" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85&fit=crop", alt: "Corporate event" },
  { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop", alt: "Product photography" },
  { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85&fit=crop", alt: "Family portrait" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop", alt: "Brand identity" },
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=85&fit=crop", alt: "Festival" },
  { src: "https://images.unsplash.com/photo-1516633630673-69bbad7a1047?w=800&q=85&fit=crop", alt: "Event photography" },
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=85&fit=crop", alt: "Photography work" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=85&fit=crop", alt: "Creative shoot" },
];

function GalleryCard({ src, alt, index }: { src: string; alt: string; index: number }) {
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
        transform: visible ? "translateY(0)" : "translateY(36px)",
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
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
          filter: "brightness(0.88)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s ease",
        }}
      />
      <div
        className="absolute inset-0 border border-[#29CEF2] pointer-events-none"
        style={{ opacity: hovered ? 0.45 : 0, transition: "opacity 0.3s" }}
      />
    </div>
  );
}

export default function Gallery() {
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

          {/* Background image with parallax */}
          <div
            className="absolute inset-[-8%] z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1800&q=90&fit=crop"
              alt="Gallery Hero"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.97) 100%)"
          }} />

          {/* Subtle cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: "radial-gradient(ellipse 110% 75% at 30% 60%, rgba(41,206,242,0.07) 0%, transparent 60%)"
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
              [ Our Gallery ]
            </p>

            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: "clamp(72px, 12vw, 180px)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)",
              }}
            >
              GAL<span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)", color: "transparent" }}>LERY</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                A Visual Journey Through Our Work
              </p>
              <div className="hidden sm:flex items-center gap-2 ml-auto text-white/25 text-[10px] tracking-[0.2em] uppercase">
                <span className="w-5 h-[1px] bg-white/20" />
                {galleryImages.length} Images
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="absolute bottom-[4.5rem] left-0 right-0 z-10 overflow-hidden py-3 border-t border-white/5">
            <div
              className="whitespace-nowrap text-white/30 text-[10px] tracking-[0.25em] uppercase"
              style={{ animation: "tickerScroll 30s linear infinite" }}
            >
              {Array(6).fill("PHOTOGRAPHY  •  VIDEOGRAPHY  •  EVENTS  •  WEDDINGS  •  PORTRAITS  •  BRAND SHOOTS  •  ").join("")}
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
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">Selected Images</p>
              <p className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-white/20">{galleryImages.length} Images</p>
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="break-inside-avoid mb-4">
                  <GalleryCard src={img.src} alt={img.alt} index={idx} />
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
