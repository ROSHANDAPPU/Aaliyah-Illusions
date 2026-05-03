"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Iceland, Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ['normal'] });
const iceland = Iceland({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "800", "900"] });

interface Testimonial {
  id: string;
  title: string;
  name: string;
  position: string;
  imageSrc: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 'MILA-1', 
    title: 'MILA', 
    name: 'Michael Chen',
    position: 'General Manager',
    imageSrc: '/mila_lounge.png', 
    text: '"Aaliyah Illusions brought an amazing energy to our space. Our guests loved the experience, and branded photos added real value."' 
  },
  { 
    id: 'MILA-2', 
    title: 'MILA', 
    name: 'Sarah Jenkins',
    position: 'Event Coordinator',
    imageSrc: '/mila_lounge.png', 
    text: '"The photography experience created unforgettable moments. People stayed longer, interacted more, and left with smiles."' 
  },
  { 
    id: 'TROPHY-1', 
    title: 'TROPHY', 
    name: 'David Rossi',
    position: 'Managing Partner',
    imageSrc: '/trophy_club.png', 
    text: '"This service adds something unique. Guests appreciate the extra touch, and it strengthens our brand recall significantly."' 
  },
  { 
    id: 'TROPHY-2', 
    title: 'TROPHY', 
    name: 'Jessica Thorne',
    position: 'VIP Host Manager',
    imageSrc: '/trophy_club.png', 
    text: '"Getting a framed high-quality photo made the night feel special. It\'s something we actually keep, not just another phone picture."' 
  },
  { 
    id: 'CACTUS-1', 
    title: 'CACTUS', 
    name: 'Marcus Bell',
    position: 'Operations Director',
    imageSrc: '/cactus_lounge.png', 
    text: '"Their team was professional, seamless, and respectful. The quality of the dramatic imagery is absolutely unmatched."' 
  },
  { 
    id: 'CACTUS-2', 
    title: 'CACTUS', 
    name: 'Elena Rodriguez',
    position: 'Marketing Director',
    imageSrc: '/cactus_lounge.png', 
    text: '"Aaliyah Illusions perfectly captured the vibrant energy of our lounge. A truly premium service that our guests rave about."' 
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = testimonials.length + 1; // Header + 6 cards

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // How far into the section we've scrolled (from when top of section hits top of viewport)
      const scrolled = scrollY - sectionTop;
      const scrollableDistance = sectionHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Map continuous progress to crisp stepping points
      const mappedIndex = Math.round(progress * (totalSlides - 1));
      setActiveIndex(mappedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculate
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  return (
    <section ref={sectionRef} className="bg-[#050505] relative w-full h-[700vh] z-10">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* Horizontal Track with Step Transitions */}
        <div 
          className="flex h-full items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            width: `${totalSlides * 100}vw`,
            transform: `translateX(-${activeIndex * 100}vw)`,
          }}
        >
          {/* Slide 1: Cyrclo-style Header */}
          <div className="w-[100vw] h-full flex flex-col items-center justify-center flex-shrink-0 px-6 lg:px-12 relative">
            <div className={`max-w-[1400px] w-full flex flex-col items-center justify-center transition-opacity duration-700 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-8">
                Client Testimonials
              </p>
              <h2 className={`${playfair.className} text-[clamp(3rem,8vw,128px)] font-black mb-8 text-center uppercase leading-[1.1]`}>
                <span className="text-white text-shadow-glow">GROWTH IN</span> <span className="text-[#29CEF2] text-shadow-glow-cyan">ACTION</span>
              </h2>
              <div className="w-full max-w-4xl mx-auto border-t border-white/10 pt-6 mt-4 flex justify-between items-center text-white/50 text-xs md:text-sm font-medium tracking-[0.1em] uppercase">
                 <span>Proven Results©</span>
                 <span>(2025/26)</span>
              </div>
            </div>
          </div>

          {/* Rest of the Slides: Cards List */}
          {testimonials.map((t, i) => {
            const isSlideActive = activeIndex === i + 1;
            
            return (
              <div key={`${t.id}-${i}`} className="w-[100vw] h-screen flex items-center justify-center flex-shrink-0 px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden group">
                
                {/* Background Blurred Image Layer */}
                <div className="absolute inset-0 z-0">
                   <Image 
                     src={t.imageSrc} 
                     alt={`${t.title} background`} 
                     fill 
                     priority={i < 2}
                     className={`object-cover blur-[80px] opacity-40 group-hover:opacity-60 transition-all duration-1000 ease-out ${isSlideActive ? 'scale-110' : 'scale-[1.3]'}`} 
                   />
                   <div className="absolute inset-0 bg-[#050505]/40" />
                </div>

                {/* Giant Cinematic Venue Watermark */}
                <div className="absolute inset-x-0 top-[8%] lg:top-[10%] z-[5] flex items-center justify-center pointer-events-none overflow-hidden">
                   <h3 
                     className={`${inter.className} text-[24vw] md:text-[18vw] lg:text-[14vw] font-black uppercase tracking-[0.1em] leading-none whitespace-nowrap select-none transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isSlideActive ? 'scale-100 opacity-100 blur-0 translate-y-0' : 'scale-[0.85] opacity-0 blur-xl -translate-y-12'}`}
                     style={{ 
                       color: 'transparent', 
                       WebkitTextStroke: '3px rgba(255, 255, 255, 0.3)',
                     }}
                   >
                     {t.title}
                   </h3>
                </div>

                {/* Inner Floating Content Layer */}
                <div className="relative z-10 flex flex-col items-center justify-start pt-[30vh] sm:pt-[25vh] md:pt-[28vh] w-full h-[85vh] min-h-[700px] max-h-[900px] pointer-events-auto">

                   {/* Sleek Dark Glass Card */}
                   <div className={`bg-[#0a0a0a]/50 backdrop-blur-3xl border border-white/5 rounded-[40px] p-6 sm:p-8 md:p-10 w-full max-w-[1100px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${isSlideActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-50 translate-y-12'}`}>
                       
                       {/* Left side: Small Sharp Image */}
                       <div className="relative w-full md:w-[45%] h-[250px] sm:h-[350px] lg:h-[400px] shrink-0 rounded-[28px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                           <Image 
                             src={t.imageSrc} 
                             alt={t.title} 
                             fill 
                             className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.08]" 
                           />
                       </div>

                       {/* Right side: Text Content */}
                       <div className="w-full md:w-[55%] flex flex-col">
                           
                           {/* Card Header (Name --- Position) */}
                           <div className="flex items-center text-[10px] sm:text-xs text-[#29CEF2] tracking-[0.25em] font-medium mb-8 uppercase opacity-90">
                              <span>( {t.name}</span>
                              <div className="flex-1 mx-4 sm:mx-6 border-t border-dashed border-[#29CEF2]/30"></div>
                              <span className="whitespace-nowrap">{t.position} )</span>
                           </div>

                           {/* Testimonial Quote */}
                           <div className="pr-4 md:pr-8">
                             <p className={`${iceland.className} text-white/90 text-[1.4rem] sm:text-3xl lg:text-[2.2rem] xl:text-4xl leading-[1.6] lg:leading-[1.7] text-left tracking-wide`}>
                                 {t.text}
                             </p>
                           </div>
                       </div>
                   </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
