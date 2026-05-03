"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      // Calculate position from -0.5 to 0.5 where 0 is center
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    const container = heroRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovered(true));
      container.addEventListener("mouseleave", () => {
        setIsHovered(false);
        // Reset to center when mouse leaves
        setMousePosition({ x: 0, y: 0 });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        // Clean up other anonymous functions too, best practice would be to use named ones but this suffices
      }
    };
  }, []);

  // Effect intensity multipliers
  const bgTranslateX = mousePosition.x * -40; // Parallax inverse
  const bgTranslateY = mousePosition.y * -40;
  
  const rotateX = mousePosition.y * -20; // 3D rotation
  const rotateY = mousePosition.x * 20;

  // Position for the glowing aura
  const cursorAuraTop = `${(mousePosition.y + 0.5) * 100}%`;
  const cursorAuraLeft = `${(mousePosition.x + 0.5) * 100}%`;

  return (
    <section 
      ref={heroRef}
      className="hero relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Moving Ambient Cursor Glow */}
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full z-10 pointer-events-none transition-all duration-700 ease-out blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(41,206,242,0.15) 0%, transparent 60%)',
          left: cursorAuraLeft,
          top: cursorAuraTop,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-[-5%] z-0 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgTranslateX}px, ${bgTranslateY}px) scale(1.05)` }}
      >
        <Image
          src="/hero-bg-mystical.png"
          alt="Mystical Hero Background"
          fill
          priority
          className="object-cover md:object-contain opacity-[0.85]"
          style={{ filter: "hue-rotate(15deg) saturate(180%) brightness(110%)" }}
          quality={100}
        />
        {/* Subtle overlay to enhance text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Hero Content with 3D Rotate Effect */}
      <div 
        className="z-20 flex flex-col items-center text-center mt-[-5vh] transition-transform duration-700 ease-out"
        style={{ 
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d' 
        }}
      >
        <h1 className={`${playfair.className} font-black uppercase text-white leading-[0.85] hero-title`}
            style={{ 
              fontSize: 'clamp(80px, 15vw, 220px)', 
              letterSpacing: '-0.02em',
              transform: 'translateZ(60px)' // Pops out from the card
            }}>
          AALIYAH<br />
          ILLUSIONS
        </h1>
        
        <p className="mt-8 text-white font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
           style={{ transform: 'translateZ(30px)' }}>
          WHERE EVERY IMAGE TELLS A STORY
        </p>

        <button className="mt-8 text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2]"
                style={{ transform: 'translateZ(40px)' }}>
          EXPLORE PORTFOLIO
        </button>
      </div>

      {/* Scrolling Text Banner - Bottom */}
      <div className="absolute bottom-[8vh] left-0 right-0 overflow-hidden z-10 py-4 bg-black/10 backdrop-blur-[2px]">
        <div className="animate-scroll-infinite whitespace-nowrap text-white/80 font-sans tracking-[0.25em] uppercase"
             style={{ fontSize: '10px' }}>
          SPECIALIZES IN CREATING STUNNING VISUALS AND ENGAGE YOUR AUDIENCE & DRIVE BUSINESS GROWTH&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          SPECIALIZES IN CREATING STUNNING VISUALS AND ENGAGE YOUR AUDIENCE & DRIVE BUSINESS GROWTH&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          SPECIALIZES IN CREATING STUNNING VISUALS AND ENGAGE YOUR AUDIENCE & DRIVE BUSINESS GROWTH&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-[3vh] left-0 right-0 text-center z-10">
        <p className="text-white/40 text-[9px] uppercase font-sans tracking-[0.25em]">
          SCROLL TO EXPLORE TESTIMONIALS
        </p>
      </div>

      {/* Bottom Gradient Overlay to transition into the next dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

      <style jsx>{`
        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }

        .hero-title {
          text-shadow: 
            0 0 15px rgba(41, 206, 242, 0.7),
            0 0 35px rgba(41, 206, 242, 0.4),
            0 0 70px rgba(41, 206, 242, 0.2);
        }

        .hero-btn {
          text-shadow: 0 0 8px rgba(41, 206, 242, 0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-infinite {
            animation: none;
          }
          /* You might also want to disable the parallax here if desired */
        }
      `}</style>
    </section>
  );
}
