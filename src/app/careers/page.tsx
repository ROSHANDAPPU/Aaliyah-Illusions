"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Careers() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ 
    firstName: '', lastName: '', email: '', phone: '', role: '', portfolio: '', message: '' 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const roles = [
    { id: 'photographer', title: 'Photographer' },
    { id: 'videographer', title: 'Videographer' },
    { id: 'editor', title: 'Photo/Video Editor' },
    { id: 'sales_ops', title: 'Sales & Field Ops' },
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
    if (!formState.role) e.role = 'Please select a role';
    if (!formState.message.trim()) e.message = 'Please tell us why you want to join';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xojrjdle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ firstName: '', lastName: '', email: '', phone: '', role: '', portfolio: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/10'} p-4 w-full text-white placeholder-white/30 focus:outline-none focus:border-[#29CEF2] transition-colors text-sm rounded-sm`;

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
              src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1800&q=90&fit=crop"
              alt="Careers Background"
              fill
              className="object-cover object-[center_top] opacity-50 grayscale-[30%]"
              priority
              quality={90}
            />
          </div>

          {/* ── Gradient Fades ── */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-[2] pointer-events-none" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-[2] pointer-events-none" />

          {/* Radial cyan glow behind text */}
          <div
            className="absolute inset-0 pointer-events-none z-[3]"
            style={{ background: 'radial-gradient(circle at 15% 80%, rgba(41,206,242,0.12) 0%, transparent 50%)' }}
          />

          {/* ── Text ── */}
          <div
            className="relative z-[10] w-full max-w-[1600px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1.1s ease, transform 1.1s ease',
            }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#29CEF2]/80 mb-6 font-medium">
              [ Build With Us ]
            </p>
            <h1
              className={`${playfair.className} font-black uppercase text-white leading-[0.88]`}
              style={{
                fontSize: 'clamp(60px, 10vw, 150px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 12px rgba(41,206,242,0.55), 0 0 40px rgba(41,206,242,0.25)',
              }}
            >
              JOIN<br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)', color: 'transparent' }}>OUR TEAM</span>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="w-16 h-[1px] bg-[#29CEF2]/50" />
              <p className="text-white/50 text-xs tracking-[0.28em] uppercase font-light">
                Become Part Of A System That Scales
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-[20] pointer-events-none" />
        </section>

        {/* Application Form Section */}
        <section className="py-24 px-6 md:px-16 bg-[#050505]">
          <div className="max-w-[800px] mx-auto">
            {status === 'success' ? (
              <div className="border border-[#29CEF2]/30 bg-[#29CEF2]/5 p-12 text-center rounded-sm">
                <p className="text-[#29CEF2] text-xs uppercase tracking-[0.3em] font-medium mb-4">Application Sent</p>
                <h3 className="text-3xl font-black uppercase text-white mb-4">Thank You!</h3>
                <p className="text-white/50 text-sm mb-8">We will review your details and reach out if there is a fit.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2] rounded-sm"
                >
                  Return
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Personal Info */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-6">Personal Information <span className="text-[#29CEF2]">*</span></label>
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
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={e => setFormState(s => ({ ...s, phone: e.target.value }))}
                        className={inputClass('phone')}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Role */}
                <div className="mb-10 pt-8 border-t border-white/10">
                  <label className="block text-white text-sm font-medium mb-4">Role of Interest <span className="text-[#29CEF2]">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roles.map(role => {
                      const isSelected = formState.role === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setFormState(s => ({ ...s, role: role.id }))}
                          className={`p-5 text-center rounded-md border transition-all duration-300 ${
                            isSelected 
                              ? 'border-[#29CEF2] bg-[#29CEF2]/10 shadow-[0_0_15px_rgba(41,206,242,0.15)]' 
                              : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                          }`}
                        >
                          <h4 className="text-white font-medium text-sm">{role.title}</h4>
                        </button>
                      );
                    })}
                  </div>
                  {errors.role && <p className="text-red-400 text-xs mt-2">{errors.role}</p>}
                </div>

                {/* 3. Portfolio */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-4">Portfolio / Reel Link (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formState.portfolio}
                    onChange={e => setFormState(s => ({ ...s, portfolio: e.target.value }))}
                    className={inputClass('portfolio')}
                  />
                </div>

                {/* 4. Why Join Us */}
                <div className="mb-10">
                  <label className="block text-white text-sm font-medium mb-4">Why Aaliyah Illusions? <span className="text-[#29CEF2]">*</span></label>
                  <textarea
                    placeholder="Tell us about your experience and why you're a good fit..."
                    rows={6}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className={inputClass('message')}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs mb-6 text-center">Something went wrong. Please try again.</p>
                )}

                <div className="text-center md:text-right">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="text-[10px] font-light tracking-[0.2em] uppercase text-white/80 transition-colors border border-white/20 px-10 py-3 hover:text-[#29CEF2] hover:border-[#29CEF2] disabled:opacity-50 w-full md:w-auto"
                  >
                    {status === 'sending' ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
