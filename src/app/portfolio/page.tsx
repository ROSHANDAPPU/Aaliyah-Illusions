"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });


const portfolioItems = [
  {
    title: "Elegant Wedding Ceremony",
    // Dark moody bride & groom — dramatic candlelit ballroom
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=90&fit=crop&auto=format",
    description: "Capturing the timeless beauty of a coastal wedding—intimate moments and architectural elegance bathed in natural light.",
    category: "Photography",
    year: "2023",
    href: "/portfolio/elegant-wedding-ceremony",
    size: "tall",
  },
  {
    title: "Corporate Event Highlights",
    // Luxury gala conference crowd with stage lighting
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=90&fit=crop&auto=format",
    description: "Transforming a standard business conference into a visually compelling narrative through strategic videography and on-site printing.",
    category: "Videography",
    year: "2023",
    href: "/portfolio/corporate-event-highlights",
    size: "wide",
  },
  {
    title: "Product Launch Campaign",
    // Sleek minimal product photography on dark background
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=90&fit=crop&auto=format",
    description: "Dynamic visual storytelling combining high-end photography with social media strategy to drive engagement.",
    category: "SMM",
    year: "2023",
    href: "/portfolio/product-launch-campaign",
    size: "square",
  },
  {
    title: "Family Portrait Session",
    // Warm golden-hour family outdoors, candid & authentic
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&q=90&fit=crop&auto=format",
    description: "Authentic, candid moments preserved in a historic garden setting — the genuine emotions that define modern family life.",
    category: "Photography",
    year: "2023",
    href: "/portfolio/family-portrait-session",
    size: "wide",
  },
  {
    title: "Brand Identity Launch",
    // Dark-toned brand design / printing concept
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90&fit=crop&auto=format",
    description: "Crafting a visual identity that resonates with heritage and modernity through meticulous printing and presentation.",
    category: "Souvenir Printing",
    year: "2023",
    href: "/portfolio/brand-identity-launch",
    size: "square",
  },
  {
    title: "Festival Experience",
    // Vibrant concert crowd with dramatic stage lighting
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=90&fit=crop&auto=format",
    description: "Revealing the soul of a live festival through lens — capturing the interplay of light, energy, and human connection.",
    category: "Onsite Printing",
    year: "2023",
    href: "/portfolio/festival-experience",
    size: "tall",
  },
];


function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
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
      className="relative overflow-hidden cursor-pointer bg-[#0a0a0a] group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed Image */}
      <div className="relative w-full h-full overflow-hidden" style={{ aspectRatio: item.size === 'tall' ? '3/4' : item.size === 'wide' ? '16/9' : '1/1' }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out"
          style={{ transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Base dark gradient — always visible at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover overlay — darkens more + reveals content */}
        <div
          className="absolute inset-0 bg-black/50 transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Cyan border reveal on hover */}
        <div
          className="absolute inset-0 border-2 border-[#29CEF2] pointer-events-none transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Content always anchored at bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">

          {/* Meta label */}
          <div
            className="flex items-center gap-3 mb-4 transition-all duration-500"
            style={{ opacity: hovered ? 1 : 0.6, transform: hovered ? 'translateY(0)' : 'translateY(4px)' }}
          >
            <span className="text-[#29CEF2] text-[10px] tracking-[0.3em] uppercase font-medium">{item.category}</span>
            <span className="text-white/30 text-[10px]">—</span>
            <span className="text-white/40 text-[10px] tracking-[0.2em]">{item.year}</span>
          </div>

          {/* Title */}
          <h3
            className="iceland-font text-white uppercase leading-tight mb-0 transition-all duration-500"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              letterSpacing: '0.04em',
              transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            }}
          >
            {item.title}
          </h3>

          {/* Description — hidden until hover */}
          <p
            className="text-gray-400 text-sm leading-relaxed mt-4 font-light transition-all duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(12px)',
              maxWidth: '90%',
            }}
          >
            {item.description}
          </p>

          {/* View Project CTA */}
          <div
            className="mt-6 flex items-center gap-3 transition-all duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-12px)',
            }}
          >
            <Link
              href={item.href}
              className="text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border-b border-white/30 hover:border-[#29CEF2] pb-1"
              onClick={(e) => e.stopPropagation()}
            >
              VIEW PROJECT
            </Link>
            <span className="text-[#29CEF2] text-sm">→</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger entrance animation
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      <Navigation isScrolled={isScrolled} />

      <main className="text-white min-h-screen">

        {/* ── Hero Section ── */}
        <section className="relative h-screen flex items-end overflow-hidden" style={{ backgroundColor: '#050505' }}>

          {/* Background image with parallax */}
          <div
            className="absolute inset-[-8%] z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="/pexels-murat-akpinar-2063247431-34099679.jpg"
              alt="Portfolio Hero"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Dark cinematic overlay — heavier at top/bottom, lighter in center */}
          <div className="absolute inset-0 z-[1]" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.95) 100%)'
          }} />

          {/* Subtle cyan vignette */}
          <div className="absolute inset-0 z-[2] pointer-events-none" style={{
            background: 'radial-gradient(ellipse 120% 80% at 20% 60%, rgba(41,206,242,0.06) 0%, transparent 60%)'
          }} />

          {/* Hero Content — left-anchored, sitting above bottom gradient */}
          <div
            className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            {/* Eyebrow label */}
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">
              [ Selected Works ]
            </p>

            {/* Main title */}
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: 'clamp(72px, 12vw, 180px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)',
              }}
            >
              PORT<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)', color: 'transparent' }}>FOLIO</span>
            </h1>

            {/* Divider + subtitle row */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                Where Every Image Tells a Story
              </p>
              <div className="hidden sm:flex items-center gap-2 ml-auto text-white/25 text-[10px] tracking-[0.2em] uppercase">
                <span className="w-5 h-[1px] bg-white/20" />
                {portfolioItems.length} Projects
              </div>
            </div>
          </div>

          {/* Scrolling ticker — bottom strip */}
          <div className="absolute bottom-[4.5rem] left-0 right-0 z-10 overflow-hidden py-3 border-t border-white/5">
            <div
              className="whitespace-nowrap text-white/30 text-[10px] tracking-[0.25em] uppercase"
              style={{ animation: 'tickerScroll 30s linear infinite' }}
            >
              {Array(6).fill('PHOTOGRAPHY  •  VIDEOGRAPHY  •  ON-SITE PRINTING  •  BRAND IDENTITY  •  SOCIAL MEDIA  •  ').join('')}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-2">
            <div className="w-[1px] h-8 bg-white/20 animate-pulse" />
            <p className="text-white/25 text-[9px] uppercase tracking-[0.3em]">Scroll</p>
          </div>

        </section>

        {/* ── Grid intro label ── */}
        <section className="px-6 md:px-16 pt-16 pb-12" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto border-t border-white/5 pt-10 flex items-center justify-between">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">Our Work</p>
            <p className="hidden md:block text-[10px] tracking-[0.25em] uppercase text-white/20">{portfolioItems.length} Projects</p>
          </div>
        </section>

        {/* ── Portfolio Grid ── */}
        <section className="px-6 md:px-16 pb-32" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">

            {/* Row 1: tall left + 2 stacked right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="md:row-span-2">
                <PortfolioCard item={portfolioItems[0]} index={0} />
              </div>
              <PortfolioCard item={portfolioItems[1]} index={1} />
              <PortfolioCard item={portfolioItems[2]} index={2} />
            </div>

            {/* Row 2: full-width */}
            <div className="mb-4">
              <PortfolioCard item={portfolioItems[3]} index={3} />
            </div>

            {/* Row 3: two equal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PortfolioCard item={portfolioItems[4]} index={4} />
              <PortfolioCard item={portfolioItems[5]} index={5} />
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
