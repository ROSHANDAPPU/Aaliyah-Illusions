"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ 
    firstName: '', lastName: '', email: '', phone: '', serviceType: '', location: '', timeline: '', heardAbout: '', message: '' 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const services = [
    { id: 'wedding_photo', title: 'Wedding Photography', price: 2500, label: 'Starting at $2,500' },
    { id: 'wedding_video', title: 'Wedding Videography', price: 3000, label: 'Starting at $3,000' },
    { id: 'corporate', title: 'Corporate Events', price: 1500, label: 'Starting at $1,500' },
    { id: 'portrait', title: 'Portrait Sessions', price: 400, label: 'Starting at $400' },
    { id: 'brand', title: 'Brand Identity & Commercial', price: 1200, label: 'Starting at $1,200' },
    { id: 'custom', title: 'Custom Project', price: 0, label: 'Custom Pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - left) / width - 0.5) * 20,
        y: ((e.clientY - top) / height - 0.5) * 20,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(t);
    };
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.firstName.trim()) e.firstName = 'First Name is required';
    if (!formState.lastName.trim()) e.lastName = 'Last Name is required';
    if (!formState.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) e.email = 'Enter a valid email';
    if (!formState.serviceType) e.serviceType = 'Please select a service type';
    if (!formState.location.trim()) e.location = 'Project location is required';
    if (!formState.message.trim()) e.message = 'Project details are required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      // Send to Formspree (free, no backend needed) — replace FORM_ID with your actual Formspree endpoint
      const res = await fetch('https://formspree.io/f/mlgzgblr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ firstName: '', lastName: '', email: '', phone: '', serviceType: '', location: '', timeline: '', heardAbout: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/10'} p-4 w-full text-white placeholder-white/30 focus:outline-none focus:border-[#29CEF2] transition-colors text-sm rounded-sm`;

  const selectClass = "bg-[#111] border border-white/10 p-4 w-full text-white focus:outline-none focus:border-[#29CEF2] transition-colors text-sm rounded-sm appearance-none";

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden" style={{ backgroundColor: '#050505' }}>

          {/* ── Cinematic Image Backdrop ── */}
          <div
            className="absolute inset-[-5%] z-[1] pointer-events-none"
            style={{
              transform: `translateX(${mousePos.x * 0.3}px) translateY(${mousePos.y * 0.2}px)`,
              transition: 'transform 0.8s cubic-bezier(0.25,1,0.5,1)',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=1800&q=90&fit=crop"
              alt="Contact Background"
              fill
              className="object-cover object-[75%_center] opacity-60"
              priority
              quality={90}
            />
          </div>

          {/* ── Gradient Fades ── */}
          {/* Top fade for navigation */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-[2] pointer-events-none" />
          
          {/* Solid dark on left, fading to transparent on right */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050505] via-[#050505] via-20% to-transparent pointer-events-none" />
          
          {/* Bottom fade into the form section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-[2] pointer-events-none" />

          {/* Radial cyan glow behind text */}
          <div
            className="absolute inset-0 pointer-events-none z-[3]"
            style={{ background: 'radial-gradient(circle at 15% 80%, rgba(41,206,242,0.12) 0%, transparent 50%)' }}
          />

          {/* ── Text — on top of the visual ── */}
          <div
            className="relative z-[10] w-full max-w-[1600px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">
              [ Get In Touch ]
            </p>
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: 'clamp(72px, 12vw, 180px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25), 0 0 80px rgba(41,206,242,0.12)',
              }}
            >
              CON<span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)', color: 'transparent' }}>TACT</span>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                Let&apos;s Create Something Great
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-[20] pointer-events-none" />
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 md:px-16 bg-[#050505]">
          <div className="max-w-[800px] mx-auto">
            {/* Header removed from here to make it match the screenshot which starts right with the form */}
            
            {/* Success State */}
            {status === 'success' ? (
              <div className="border border-[#29CEF2]/30 bg-[#29CEF2]/5 p-12 text-center rounded-sm">
                <p className="text-[#29CEF2] text-xs uppercase tracking-[0.3em] font-medium mb-4">Message Sent</p>
                <h3 className="text-3xl font-black uppercase text-white mb-4">Thank You!</h3>
                <p className="text-white/50 text-sm mb-8">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2] rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Personal Info */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-6">Contact Information <span className="text-[#29CEF2]">*</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name *"
                        value={formState.firstName}
                        onChange={e => setFormState(s => ({ ...s, firstName: e.target.value }))}
                        className={inputClass('firstName')}
                      />
                      {errors.firstName && <p className="text-red-400 text-xs mt-2">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name *"
                        value={formState.lastName}
                        onChange={e => setFormState(s => ({ ...s, lastName: e.target.value }))}
                        className={inputClass('lastName')}
                      />
                      {errors.lastName && <p className="text-red-400 text-xs mt-2">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email *"
                        value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (optional)"
                        value={formState.phone}
                        onChange={e => setFormState(s => ({ ...s, phone: e.target.value }))}
                        className={inputClass('phone')}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Service Type Grid */}
                <div className="mb-10 pt-8 border-t border-white/10">
                  <label className="block text-white text-sm font-medium mb-4">Service Type <span className="text-[#29CEF2]">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(svc => {
                      const isSelected = formState.serviceType === svc.id;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => setFormState(s => ({ ...s, serviceType: svc.id }))}
                          className={`p-6 text-center rounded-md border transition-all duration-300 ${
                            isSelected 
                              ? 'border-[#29CEF2] bg-[#29CEF2]/10 shadow-[0_0_15px_rgba(41,206,242,0.15)]' 
                              : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                          }`}
                        >
                          <h4 className="text-white font-medium text-sm mb-2">{svc.title}</h4>
                          <p className={`text-xs ${isSelected ? 'text-[#29CEF2]' : 'text-white/40'}`}>{svc.label}</p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.serviceType && <p className="text-red-400 text-xs mt-2">{errors.serviceType}</p>}
                </div>

                {/* 3. Project Location */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-4">Project Location <span className="text-[#29CEF2]">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter the address or city where your project is located"
                    value={formState.location}
                    onChange={e => setFormState(s => ({ ...s, location: e.target.value }))}
                    className={inputClass('location')}
                  />
                  {errors.location && <p className="text-red-400 text-xs mt-2">{errors.location}</p>}
                </div>

                {/* 4. Starting From Banner */}
                {formState.serviceType && (
                  <div className="mb-10 border border-[#29CEF2]/40 bg-gradient-to-b from-[#29CEF2]/10 to-transparent p-8 rounded-md text-center transition-all duration-500 ease-in-out">
                    <p className="text-[#29CEF2] text-xs uppercase tracking-[0.2em] font-bold mb-3">Starting From</p>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                      {services.find(s => s.id === formState.serviceType)?.price === 0 
                        ? 'Custom' 
                        : `$${services.find(s => s.id === formState.serviceType)?.price.toLocaleString()}`}
                    </h3>
                    <p className="text-white/40 text-xs mt-4">Final pricing depends on project scope and specifications</p>
                  </div>
                )}

                {/* 5. Dropdowns (Timeline & Referral) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div>
                    <label className="block text-white text-sm font-medium mb-4">Preferred Timeline</label>
                    <div className="relative">
                      <select 
                        className={selectClass}
                        value={formState.timeline}
                        onChange={e => setFormState(s => ({ ...s, timeline: e.target.value }))}
                      >
                        <option value="" disabled className="bg-[#111] text-white/50">Select Timeline</option>
                        <option value="asap" className="bg-[#111]">As soon as possible</option>
                        <option value="1-3_months" className="bg-[#111]">1 - 3 months</option>
                        <option value="3-6_months" className="bg-[#111]">3 - 6 months</option>
                        <option value="6+_months" className="bg-[#111]">6+ months</option>
                        <option value="flexible" className="bg-[#111]">Flexible</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-4">How did you hear about us?</label>
                    <div className="relative">
                      <select 
                        className={selectClass}
                        value={formState.heardAbout}
                        onChange={e => setFormState(s => ({ ...s, heardAbout: e.target.value }))}
                      >
                        <option value="" disabled className="bg-[#111] text-white/50">Select Option</option>
                        <option value="google" className="bg-[#111]">Google Search</option>
                        <option value="instagram" className="bg-[#111]">Instagram</option>
                        <option value="tiktok" className="bg-[#111]">TikTok</option>
                        <option value="referral" className="bg-[#111]">Friend / Referral</option>
                        <option value="other" className="bg-[#111]">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Project Details */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-4">Project Details <span className="text-[#29CEF2]">*</span></label>
                  <textarea
                    placeholder="Tell us about your event or project specifications..."
                    rows={6}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className={inputClass('message')}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs mb-6 text-center">Something went wrong. Please try again or email us directly.</p>
                )}

                <div className="text-center md:text-right">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 transition-colors border border-white/20 px-10 py-3 hover:text-[#29CEF2] hover:border-[#29CEF2] disabled:opacity-50 w-full md:w-auto"
                  >
                    {status === 'sending' ? 'SENDING...' : 'SUBMIT REQUEST'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes visualFloat {
          0%   { transform: translateY(0px) rotate(-1deg) scale(1); }
          50%  { transform: translateY(-18px) rotate(1deg) scale(1.02); }
          100% { transform: translateY(0px) rotate(-1deg) scale(1); }
        }
        .visual-float {
          animation: visualFloat 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


