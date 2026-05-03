"use client";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const videos = [
  "/corporate/6396169-uhd_2560_1080_25fps.mp4",
  // Adding placeholders to populate the gallery
  "/corporate/6396169-uhd_2560_1080_25fps.mp4",
  "/corporate/6396169-uhd_2560_1080_25fps.mp4"
];

export default function ProductLaunchVideography() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    const t = setTimeout(() => setHeroVisible(true), 120);

    const videoElements = document.querySelectorAll('.gallery-video');
    videoElements.forEach(video => {
      (video as HTMLVideoElement).play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
            style={{ zIndex: 0 }}
          >
            <source src="/corporate/6396169-uhd_2560_1080_25fps.mp4" type="video/mp4" />
          </video>
          {/* Cinematic overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.9) 100%)'
          }} />
          {/* Cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 50%, rgba(41,206,242,0.06) 0%, transparent 60%)'
          }} />
          {/* Content */}
          <div
            className="relative z-10 text-center px-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">[ Product Launch Videography ]</p>
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: 'clamp(60px, 10vw, 150px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)',
              }}
            >
              PRODUCT LAUNCH<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)', color: 'transparent' }}>VIDEOGRAPHY</span>
            </h1>
            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="w-12 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">Capturing the Energy of Brand Launches</p>
              <div className="w-12 h-[1px] bg-[#29CEF2]/50" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[3] pointer-events-none" />
        </section>

        {/* Video Gallery */}
        <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {videos.map((video, idx) => (
                <div key={idx} className="break-inside-avoid overflow-hidden rounded-lg">
                  <video
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 gallery-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
