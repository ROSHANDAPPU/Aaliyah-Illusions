"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const images = [
  "/corporate/pexels-pavel-danilyuk-6405771.jpg",
  "/corporate/pexels-pavel-danilyuk-6405754.jpg",
  "/corporate/pexels-pavel-danilyuk-6405751.jpg",
  "/corporate/pexels-pavel-danilyuk-6405750.jpg",
  "/corporate/pexels-rdne-6518881.jpg",
  "/corporate/pexels-rdne-6518892.jpg",
  "/corporate/pexels-rdne-6519151.jpg",
  "/corporate/pexels-rdne-6519217.jpg",
  "/corporate/pexels-rdne-6519229.jpg",
  "/corporate/pexels-rdne-6519411.jpg",
  "/corporate/pexels-rdne-6518865.jpg",
];

export default function CorporatePhotography() {
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
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative h-screen flex items-end overflow-hidden" style={{ backgroundColor: '#050505' }}>

          {/* Background with parallax */}
          <div className="absolute inset-[-8%] z-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
            <Image
              src="/corporate/pexels-pavel-danilyuk-6405771.jpg"
              alt="Corporate Photography Hero"
              fill priority
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Cinematic overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.97) 100%)'
          }} />

          {/* Cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: 'radial-gradient(ellipse 110% 75% at 70% 50%, rgba(41,206,242,0.07) 0%, transparent 60%)'
          }} />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">[ Corporate Photography ]</p>
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: 'clamp(60px, 10vw, 160px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)',
              }}
            >
              CORPORATE<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)', color: 'transparent' }}>PHOTOGRAPHY</span>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">Professional Photography Capturing Corporate Excellence</p>
            </div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[3] pointer-events-none" />
        </section>

        {/* Gallery */}
        <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {images.map((image, idx) => (
                <div key={idx} className="break-inside-avoid overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Corporate photo ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}