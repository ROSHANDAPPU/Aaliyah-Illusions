"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const services = [
  {
    id: "01",
    title: "Onsite Printing",
    tagline: "Instant Keepsakes",
    image: "https://images.unsplash.com/photo-1559030624-a4625b3a6289?w=1400&q=90&fit=crop",
    description: "Instant keepsakes: Our onsite printing services offer guests the opportunity to take home memorable photographs and mementos of their visit, creating lasting connections with your brand.",
    link: "/on-site-printing",
    ticker: "PHOTO BOOTHS  •  INSTANT PRINTS  •  EVENT PRINTING  •  SOUVENIR PHOTOS",
  },
  {
    id: "02",
    title: "Photography",
    tagline: "Capturing Light & Emotion",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=90&fit=crop",
    description: "Our photography service captures the essence of your moments, making them look as timeless as they feel — with cinematic precision and artistic intent.",
    link: "/photography",
    ticker: "PORTRAITURE  •  EDITORIAL  •  EVENTS  •  COMMERCIAL  •  LIFESTYLE",
  },
  {
    id: "03",
    title: "Videography",
    tagline: "Stories in Motion",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=90&fit=crop",
    description: "Turning moments into memories. Our videography service captures the heart and soul of your special occasions, creating lasting cinematic narratives.",
    link: "/videography",
    ticker: "CINEMATIC  •  BRAND FILMS  •  EVENTS  •  DOCUMENTARY  •  SOCIAL CONTENT",
  },
  {
    id: "04",
    title: "Social Media",
    tagline: "Your Digital Presence",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=90&fit=crop",
    description: "We manage your social media presence, creating engaging content and interacting with your audience to boost your online visibility and reputation.",
    link: "/contact",
    ticker: "CONTENT CREATION  •  STRATEGY  •  ENGAGEMENT  •  GROWTH  •  ANALYTICS",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="relative overflow-hidden group cursor-pointer"
      style={{
        height: "85vh",
        minHeight: "480px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.9s ease ${index * 0.12}s, transform 0.9s ease ${index * 0.12}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
          filter: "brightness(0.65)",
        }}
      />

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
          opacity: hovered ? 0.92 : 0.75,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Cyan border reveal on hover */}
      <div
        className="absolute inset-0 border border-[#29CEF2] pointer-events-none"
        style={{ opacity: hovered ? 0.4 : 0, transition: "opacity 0.4s ease" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-10">

        {/* Index number */}
        <span
          className="text-[#29CEF2]/30 text-[10px] tracking-[0.4em] uppercase font-medium mb-6 transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0.5 }}
        >
          [ {service.id} ]
        </span>

        {/* Tagline */}
        <p
          className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-light mb-3 transition-all duration-500"
          style={{ opacity: hovered ? 0.7 : 0.4 }}
        >
          {service.tagline}
        </p>

        {/* Title */}
        <h2
          className={`${playfair.className} font-black uppercase text-white mb-0`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.02em",
            textShadow: hovered ? "0 0 12px rgba(41,206,242,0.4), 0 0 30px rgba(41,206,242,0.15)" : "none",
            transition: "text-shadow 0.5s ease",
          }}
        >
          {service.title}
        </h2>

        {/* Description — revealed on hover */}
        <p
          className="text-white/55 text-sm leading-relaxed mt-5 font-light max-w-[560px] transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {service.description}
        </p>

        {/* CTA — revealed on hover */}
        <div
          className="mt-7 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-10px)",
          }}
        >
          <Link
            href={service.link}
            className="text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border-b border-white/30 hover:border-[#29CEF2] pb-1 inline-flex items-center gap-3"
          >
            EXPLORE SERVICE
            <span className="text-[#29CEF2] text-sm">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom ticker strip */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-2 border-t border-white/5 z-10 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <div
          className="whitespace-nowrap text-white/20 text-[9px] tracking-[0.3em] uppercase"
          style={{ animation: "tickerScroll 20s linear infinite" }}
        >
          {Array(4).fill(`${service.ticker}  •  `).join("")}
        </div>
      </div>
    </article>
  );
}

export default function Services() {
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
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=90&fit=crop"
              alt="Services Hero"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 z-[1]" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.97) 100%)"
          }} />

          {/* Subtle cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: "radial-gradient(ellipse 110% 75% at 60% 50%, rgba(41,206,242,0.07) 0%, transparent 60%)"
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
              [ What We Offer ]
            </p>

            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: "clamp(72px, 12vw, 180px)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)",
              }}
            >
              SER<br />
              <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)", color: "transparent" }}>VICES</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                Premium Creative Services Tailored for You
              </p>
              <div className="hidden sm:flex items-center gap-2 ml-auto text-white/25 text-[10px] tracking-[0.2em] uppercase">
                <span className="w-5 h-[1px] bg-white/20" />
                {services.length} Services
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="absolute bottom-[4.5rem] left-0 right-0 z-10 overflow-hidden py-3 border-t border-white/5">
            <div
              className="whitespace-nowrap text-white/30 text-[10px] tracking-[0.25em] uppercase"
              style={{ animation: "tickerScroll 30s linear infinite" }}
            >
              {Array(6).fill("PHOTOGRAPHY  •  VIDEOGRAPHY  •  ON-SITE PRINTING  •  BRAND IDENTITY  •  SOCIAL MEDIA  •  ").join("")}
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

        {/* ── Services Grid ── */}
        <section className="px-6 md:px-16 pt-16 pb-32" style={{ backgroundColor: "#050505" }}>
          <div className="max-w-[1600px] mx-auto">

            {/* Section label */}
            <div className="border-t border-white/5 pt-10 flex items-center justify-between mb-12">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">Our Services</p>
              <p className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-white/20">{services.length} Offered</p>
            </div>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="px-6 md:px-16 pb-32" style={{ backgroundColor: "#050505" }}>
          <div className="max-w-[1600px] mx-auto border-t border-white/5 pt-16 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/70 mb-6">Ready to Create?</p>
            <h2
              className={`${playfair.className} text-5xl md:text-7xl font-black uppercase text-white mb-10`}
              style={{
                textShadow: "0 0 12px rgba(41,206,242,0.3), 0 0 40px rgba(41,206,242,0.12)",
              }}
            >
              Let&apos;s Make<br />
              <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)", color: "transparent" }}>Something Great</span>
            </h2>
            <Link
              href="/contact"
              className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-10 py-3 hover:border-[#29CEF2] inline-block"
            >
              Get In Touch
            </Link>
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