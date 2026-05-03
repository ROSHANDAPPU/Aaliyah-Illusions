"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "700", "900"], style: ['normal', 'italic'] });

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  
  // Intersection Observers for section reveals
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger hero entrance
    const t = setTimeout(() => setHeroVisible(true), 100);

    // Set up intersection observers for fade-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const parallaxOffset = scrollY * 0.4;
  const slowParallax = scrollY * 0.15;

  return (
    <div className="min-h-screen selection:bg-[#29CEF2] selection:text-black" style={{ backgroundColor: "#050505" }}>
      <Navigation isScrolled={isScrolled} />

      <main className="text-white min-h-screen overflow-hidden">

        {/* ── 1. Hero Section (Premium Editorial) ── */}
        <section className="relative h-[110vh] flex flex-col justify-center px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
          
          {/* Background image with smooth parallax */}
          <div className="absolute inset-[-5%] z-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&q=90&fit=crop"
              alt="About Us Hero"
              fill
              priority
              className="object-cover opacity-40 grayscale-[50%]"
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
          </div>

          {/* Huge Hollow Watermark Text (Fixed in bg) */}
          <div 
            className={`${playfair.className} absolute top-[20%] left-[-5%] text-[15vw] font-black uppercase leading-none opacity-5 pointer-events-none whitespace-nowrap`}
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          >
            AALIYAH ILLUSIONS
          </div>

          {/* Hero Content container */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto mt-20">
            
            {/* Subtle Top Label */}
            <div 
              className="overflow-hidden mb-8"
              style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 1s ease 0.2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#29CEF2]" />
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] font-bold">
                  The Operation
                </p>
              </div>
            </div>

            {/* Massive Heading */}
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.85] mb-12`}
              style={{
                fontSize: "clamp(50px, 9vw, 140px)",
                letterSpacing: "-0.02em",
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(50px)",
                transition: "opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s, transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
              }}
            >
              <div className="overflow-hidden"><span className="block" style={{ transform: heroVisible ? "translateY(0)" : "translateY(100%)", transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s" }}>SYSTEMS.</span></div>
              <div className="overflow-hidden"><span className="block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)", transform: heroVisible ? "translateY(0)" : "translateY(100%)", transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s" }}>SCALE.</span></div>
              <div className="overflow-hidden"><span className="block" style={{ transform: heroVisible ? "translateY(0)" : "translateY(100%)", transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s" }}>EXECUTION.</span></div>
            </h1>

            {/* Sub-content Area - Grid Layout */}
            <div 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1.2s ease 0.8s, transform 1.2s ease 0.8s",
              }}
            >
              <div className="md:col-span-4 hidden md:block">
                {/* Visual anchor */}
                <div className="w-full h-[1px] bg-white/20 mb-4" />
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll to explore</p>
              </div>

              <div className="md:col-span-8 border-l border-[#29CEF2]/30 pl-6 md:pl-10">
                <h2 className={`${playfair.className} text-2xl md:text-4xl font-medium text-white leading-snug mb-6`}>
                  Aaliyah Illusions is a full-spectrum production company. <br className="hidden md:block" />
                  <span className="text-white/40 italic">We don't just capture moments; we build end-to-end visual systems.</span>
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl font-light">
                    From high-end weddings and corporate event highlights to massive festival experiences, on-site printing, and software-driven digital growth—we operate at the highest level of structured execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 2. Who We Are (Sticky Left, Scroll Right) ── */}
        <section className="relative z-20 bg-[#050505] px-6 md:px-16 pb-32">
          {/* Structural Top Border */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-40">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-8 font-bold">
                  [ Origin ]
                </p>
                <h3 className={`${playfair.className} text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8`}>
                  Built From The <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>Ground Up.</span>
                </h3>
                {/* Decorative Line Art */}
                <div className="hidden lg:block w-[1px] h-32 bg-gradient-to-b from-[#29CEF2] to-transparent ml-2 mt-8" />
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 space-y-24 lg:pt-32 pb-32">
              
              <div className="reveal-fade-up" ref={addToRefs}>
                <p className="text-[#29CEF2] text-3xl font-light leading-relaxed iceland-font max-w-2xl">
                  "Aaliyah Illusions was built from the ground up inside real venues, not studios."
                </p>
              </div>

              <div className="reveal-fade-up border-l border-white/10 pl-8" ref={addToRefs}>
                <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                  What started as a simple idea—capturing moments in high-energy environments—quickly turned into something much bigger. We realized this wasn’t just about photography. It was about creating an experience, building a system, and turning moments into real, measurable value.
                </p>
              </div>

              <div className="reveal-fade-up" ref={addToRefs}>
                <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl mb-12">
                  Today, Aaliyah Illusions operates as a full-scale production powerhouse. We integrate high-end photography, cinematic videography, real-time printing, and software-backed growth strategies. Every shift, every frame, and every sale is tracked, optimized, and improved.
                </p>
                <div className="bg-[#0a0a0a] border border-white/5 p-10 max-w-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#29CEF2] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                  <p className="iceland-font text-white text-[24px] font-medium leading-relaxed italic">
                    We don’t rely on luck or talent alone. <br />
                    <span className="text-[#29CEF2] not-italic font-sans font-bold text-[10px] tracking-[0.3em] uppercase mt-4 block">We run on systems.</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── 3. The Aaliyah Edge (Overlapping Sticky Cards) ── */}
        <section className="bg-[#020202] py-32 px-6 md:px-16 relative">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 reveal-fade-up" ref={addToRefs}>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-6 font-bold">
                  [ The Edge ]
                </p>
                <h3 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white`}>
                  What Makes <br /> Us Different.
                </h3>
              </div>
              <p className="text-white/40 mt-8 md:mt-0 font-light uppercase tracking-[0.2em] text-xs max-w-xs text-right">
                It's not just how we shoot. It's how we operate.
              </p>
            </div>

            {/* Sticky Stacking Cards */}
            <div className="relative pb-32">
              {[
                {
                  title: "The Live Print System",
                  desc: "Customers don’t wait days for photos. We deploy real-time printing infrastructure inside high-energy venues, turning moments into instant physical revenue.",
                  num: "01",
                  img: "https://images.unsplash.com/photo-1551316679-9c6ae9ea4d1b?w=800&q=90&fit=crop"
                },
                {
                  title: "Cinematic Production",
                  desc: "From elegant weddings to massive festival experiences, our videography and photography teams produce high-end, editorial-quality content at scale.",
                  num: "02",
                  img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=90&fit=crop"
                },
                {
                  title: "Growth & Software (SaaS)",
                  desc: "We don’t stop at content. We integrate Social Media Management and our own SaaS solutions to scale your digital presence and optimize your operations.",
                  num: "03",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop"
                },
                {
                  title: "System-Driven Execution",
                  desc: "Every shift, every frame, and every campaign is tracked. We eliminate the chaos of creative work by running on rigid, predictable systems.",
                  num: "04",
                  img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=90&fit=crop"
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="sticky w-full flex justify-end mb-8 transition-transform duration-700 ease-out group/wrapper"
                  style={{ top: `${150 + idx * 40}px`, zIndex: idx }}
                >
                  {/* The 3D Animated Arrow that appears in the empty left space on hover */}
                  <div className="hidden lg:flex w-[15%] h-full absolute left-0 top-0 items-center justify-center pointer-events-none perspective-[1000px] z-50">
                    <div className="opacity-0 translate-x-[-60px] group-hover/wrapper:opacity-100 group-hover/wrapper:translate-x-0 transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] flex items-center justify-center">
                      <div className="relative flex items-center justify-center" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(15deg) scale(1.1)' }}>
                        {/* Glow layer */}
                        <div className="absolute w-[80px] h-[80px] bg-[#29CEF2]/20 rounded-full blur-[30px]" />
                        
                        {/* Custom 3D Arrow SVG */}
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_20px_rgba(41,206,242,0.5)]">
                          {/* Trail */}
                          <path d="M2 12h14" stroke="url(#cyanGradient)" strokeWidth="0.5" strokeLinecap="round" />
                          {/* Foreground Arrow */}
                          <path d="m11 5 7 7-7 7" stroke="#29CEF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Midground Arrow */}
                          <path d="m7 5 7 7-7 7" stroke="rgba(41,206,242,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Background Arrow */}
                          <path d="m3 5 7 7-7 7" stroke="rgba(41,206,242,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          
                          <defs>
                            <linearGradient id="cyanGradient" x1="2" y1="12" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="transparent" />
                              <stop offset="1" stopColor="#29CEF2" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-[85%] bg-[#080808] border border-white/5 p-8 md:p-16 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group flex flex-col items-start min-h-[400px] justify-center">
                    
                    {/* Full Card Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      />
                      {/* Gradients to keep text readable */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/20" />
                      <div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-[#050505]/10 transition-colors duration-[1.5s]" />
                    </div>
                    
                    {/* Huge Number Watermark */}
                    <span className={`${playfair.className} absolute -bottom-10 -right-10 text-[150px] md:text-[200px] font-black text-white/[0.04] group-hover:text-white/[0.08] leading-none pointer-events-none transition-all duration-1000 group-hover:scale-110 z-10`}>
                      {item.num}
                    </span>

                    {/* Content */}
                    <div className="relative z-20 w-full md:w-2/3">
                      <p className="text-[#29CEF2] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Phase {item.num}</p>
                      <h4 className={`${playfair.className} text-white font-medium text-3xl md:text-5xl mb-6 tracking-wide leading-tight group-hover:text-white transition-colors duration-700`}>
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-base leading-relaxed font-light iceland-font text-[22px] max-w-lg group-hover:text-white/90 transition-colors duration-700">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 4. What We Do & How It Works (Split View Parallax) ── */}
        <section className="bg-[#050505] relative border-t border-white/5">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            {/* Left Side: What We Do */}
            <div className="p-12 md:p-24 lg:p-32 lg:border-r border-white/5 flex flex-col justify-center">
              <div className="reveal-fade-up" ref={addToRefs}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-8 font-bold">
                  [ Capabilities ]
                </p>
                <h3 className={`${playfair.className} text-5xl font-bold text-white mb-10 leading-tight`}>
                  High-Impact <br /> Production
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-12 font-light max-w-md">
                  We operate across multiple verticals, focusing entirely on environments that demand speed, quality, and engagement. Our service lines cover every aspect of visual media and growth.
                </p>
                
                {/* Visible Pills for 10 Services */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Weddings", "Portraits", "Graduation", "Videography", "SMM", "SaaS", 
                    "On-Site Printing", "Corporate Events", "Festival Experience", "Brand Identity"
                  ].map((service, i) => (
                    <div key={i} className="border border-white/10 rounded-full px-5 py-2 text-[11px] uppercase tracking-widest text-white/70 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors cursor-default bg-white/5">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: How It Works */}
            <div className="p-12 md:p-24 lg:p-32 bg-[#020202] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#29CEF2]/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="reveal-fade-up relative z-10" ref={addToRefs}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-8 font-bold">
                  [ Protocol ]
                </p>
                <h3 className={`${playfair.className} text-5xl font-bold text-white mb-12 leading-tight`}>
                  Built For Real <br /> Environments
                </h3>
                
                <div className="relative pl-8 border-l border-white/10 space-y-16">
                  {[
                    { step: "01", text: "We deploy highly trained production teams to your event, venue, or brand." },
                    { step: "02", text: "We capture and produce high-end, engaging moments at scale." },
                    { step: "03", text: "We execute our growth strategies—from real-time printing to SaaS integrations." },
                    { step: "04", text: "The experience creates measurable impact, retention, and revenue." },
                  ].map((item, i) => (
                    <div key={i} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[37px] top-2 w-[10px] h-[10px] bg-[#050505] border border-white/30 rounded-full group-hover:border-[#29CEF2] group-hover:bg-[#29CEF2] transition-colors duration-500" />
                      
                      <span className="block text-[#29CEF2] text-[10px] tracking-[0.3em] font-bold mb-3 uppercase">Step {item.step}</span>
                      <p className="text-white/80 font-light text-xl leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 5. Results & Proof (Massive Typography) ── */}
        <section className="py-40 px-6 md:px-16 border-y border-white/5 bg-[#050505] relative overflow-hidden">
          {/* Decorative background typography */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
            <span className={`${playfair.className} text-[16vw] font-black text-white/[0.02] leading-none whitespace-nowrap`}>
              RESULTS
            </span>
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="text-center mb-24 reveal-fade-up" ref={addToRefs}>
              <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
                This is not theory. <br />
                <span className="text-[#29CEF2] italic">This is already working.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="text-center p-8 reveal-fade-up" ref={addToRefs}>
                <p className="text-[#29CEF2] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Operations</p>
                <h4 className={`${playfair.className} text-white font-black text-[clamp(3rem,6vw,100px)] leading-none mb-8 tracking-tighter`}>
                  PROVEN
                </h4>
                <p className="text-white/40 text-sm font-light iceland-font text-[20px] max-w-xs mx-auto">
                  Generating consistent, proven value on the floor.
                </p>
              </div>
              
              <div className="text-center p-8 reveal-fade-up" ref={addToRefs} style={{ transitionDelay: "100ms" }}>
                <p className="text-[#29CEF2] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Frames Sold</p>
                <h4 className={`${playfair.className} text-white font-black text-[clamp(3rem,6vw,100px)] leading-none mb-8 tracking-tighter`}>
                  800<span className="text-[#29CEF2]">+</span>
                </h4>
                <p className="text-white/40 text-sm font-light iceland-font text-[20px] max-w-xs mx-auto">
                  Creating physical memories and instant gratification.
                </p>
              </div>
              
              <div className="text-center p-8 reveal-fade-up" ref={addToRefs} style={{ transitionDelay: "200ms" }}>
                <p className="text-[#29CEF2] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Active Venues</p>
                <h4 className={`${playfair.className} text-white font-black text-[clamp(3rem,6vw,100px)] leading-none mb-8 tracking-tighter`}>
                  MULTI
                </h4>
                <p className="text-white/40 text-sm font-light iceland-font text-[20px] max-w-xs mx-auto">
                  Trusted by proven, high-traffic locations like Trophy.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── 6. Behind The Lens (Cinematic Portrait Parallax) ── */}
        <section className="bg-[#020202] py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Content (Left) */}
            <div className="order-2 lg:order-1 relative z-10 reveal-fade-up" ref={addToRefs}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-[#29CEF2]" />
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">
                  [ The People ]
                </p>
              </div>
              
              <h3 className={`${playfair.className} text-5xl md:text-7xl text-white font-black leading-[1.1] mb-12`}>
                Built on trust. <br />
                <span className="italic font-light text-[#29CEF2]">Run as one.</span>
              </h3>
              
              <div className="space-y-8 border-l border-white/10 pl-8 ml-4">
                <p className="text-white/80 font-light leading-relaxed text-xl max-w-md">
                  Aaliyah Illusions exists because two people believed in the same vision before there was anything to show for it.
                </p>
                <p className="text-white/50 font-light leading-relaxed text-base max-w-md">
                  Saad leads from the front — on the floor, in the venues, with the team. He is the operational backbone of everything this company delivers. Every shift that runs clean, every client that leaves satisfied, every photographer that shows up ready — that's Saad.
                </p>
                <p className="text-white/50 font-light leading-relaxed text-base max-w-md">
                  Roshan builds the foundation Saad stands on — the systems, the strategy, the architecture for what this company is becoming. The long game, the structure, the vision behind the vision.
                </p>
                <p className="text-white font-medium text-sm tracking-widest uppercase pt-6">
                  Neither role works without the other. <br /> That's not a talking point — that's how this company was designed.
                </p>
              </div>
            </div>

            {/* Image Parallax (Right - Dual Portraits) */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-8 relative h-[60vh] md:h-[80vh] w-full reveal-fade-up" ref={addToRefs}>
              
              {/* Roshan Offset Portrait */}
              <div className="relative w-full h-[90%] mt-auto overflow-hidden border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=90&fit=crop&crop=faces" // Professional portrait placeholder
                  alt="Roshan Dappu - Co-Founder"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
                <div className="absolute bottom-6 md:bottom-10 left-6">
                  <p className="text-[#29CEF2] text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Strategy & Systems</p>
                  <p className={`${playfair.className} text-xl md:text-3xl text-white font-medium uppercase tracking-wide`}>ROSHAN DAPPU</p>
                </div>
              </div>

              {/* SAAD Offset Portrait */}
              <div className="relative w-full h-[90%] mb-auto overflow-hidden border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&q=90&fit=crop&crop=faces" // Professional portrait placeholder
                  alt="SAAD Sheikh - Co-Founder"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
                <div className="absolute bottom-6 md:bottom-10 left-6">
                  <p className="text-[#29CEF2] text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Operations & Field Leadership</p>
                  <p className={`${playfair.className} text-xl md:text-3xl text-white font-medium uppercase tracking-wide`}>SAAD SHEIKH</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 7. Behind The Scenes (Staggered Masonry) ── */}
        <section className="py-32 md:py-48 px-6 md:px-16 bg-[#050505]">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-24 reveal-fade-up" ref={addToRefs}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-6 font-bold">
                [ The Reality ]
              </p>
              <h3 className={`${playfair.className} text-5xl md:text-6xl font-bold text-white mb-8 leading-tight`}>
                Where the work <br className="hidden md:block" /> actually happens.
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-lg">
                From late nights in crowded venues to setting up equipment, managing inventory, and handling real-time sales. What you see as a photo is backed by a full operational system.
              </p>
            </div>

            {/* Asymmetric Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
              
              {/* Main large image */}
              <div className="md:col-span-7 relative h-[400px] md:h-full overflow-hidden group reveal-fade-up" ref={addToRefs}>
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <Image
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=90&fit=crop"
                  alt="BTS 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                />
              </div>

              {/* Stacked smaller images */}
              <div className="md:col-span-5 grid grid-rows-2 gap-6 h-[600px] md:h-full">
                <div className="relative overflow-hidden group reveal-fade-up" ref={addToRefs} style={{ transitionDelay: "100ms" }}>
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <Image
                    src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?w=1000&q=90&fit=crop"
                    alt="BTS 2"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  />
                </div>
                <div className="relative overflow-hidden group reveal-fade-up" ref={addToRefs} style={{ transitionDelay: "200ms" }}>
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <Image
                    src="https://images.unsplash.com/photo-1588252277025-a13125272a74?w=1000&q=90&fit=crop"
                    alt="BTS 3"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── 8. Our Vision & Call To Action (Massive Footer Intro) ── */}
        <section className="py-40 md:py-60 px-6 md:px-16 relative overflow-hidden bg-[#020202]">
          
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2000&q=90&fit=crop"
              alt="Background texture"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-[#020202]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center reveal-fade-up" ref={addToRefs}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2] mb-12 font-bold">
              [ The Future ]
            </p>
            
            <h2 className={`${playfair.className} text-[clamp(4rem,8vw,100px)] font-black text-white mb-12 leading-[0.85] tracking-tighter`}>
              BUILDING <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>MORE THAN</span> <br />
              A BRAND.
            </h2>
            
            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-4xl mx-auto iceland-font">
              Our goal is to become the most recognized production company in Dallas. When venues, businesses, creators, and event organizers need flawless execution at scale, they call Aaliyah Illusions.
            </p>
            
            <div className="flex justify-center mb-24">
              <div className="h-[100px] w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
            </div>

            {/* CTA Buttons */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-light mb-10">
                Work with us. Partner with us. Build with us.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-[#29CEF2] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-12 py-5 hover:bg-white hover:scale-105 transition-all duration-500 w-full sm:w-auto text-center"
                >
                  Book A Session
                </Link>
                <Link
                  href="/contact"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 transition-all duration-500 border border-white/20 px-12 py-5 hover:text-[#29CEF2] hover:border-[#29CEF2] hover:-translate-y-1 w-full sm:w-auto text-center"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/careers"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 transition-all duration-500 border border-white/20 px-12 py-5 hover:text-[#29CEF2] hover:border-[#29CEF2] hover:-translate-y-1 w-full sm:w-auto text-center"
                >
                  Join Our Team
                </Link>
              </div>
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

        /* Premium Scroll Reveals */
        .reveal-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
