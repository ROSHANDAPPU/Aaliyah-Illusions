"use client";
import React from "react";

export default function HeroSection() {

  return (
    <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
      {/* Noise Background Texture */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Hero Copy */}
      <div className="z-40 max-w-[900px] text-center flex flex-col items-center" style={{ gap: '15px' }}>
        <h1 className="font-black uppercase hero-text" style={{ fontSize: 'clamp(100px, 18vw, 250px)', letterSpacing: '-0.05em', lineHeight: 0.8, margin: 0, color: 'white' }}>
          AALIYAH<br />ILLUSIONS
        </h1>
        <p className="tagline iceland-font" style={{ fontSize: '20px', margin: 0 }}>
          WHERE EVERY IMAGE TELLS A STORY
        </p>
      </div>

      {/* Scrolling Text Banner - Bottom */}
      <div className="absolute bottom-[10vh] left-0 right-0 overflow-hidden z-10">
        <div className="animate-scroll-infinite whitespace-nowrap text-gray-700 font-light tracking-[0.3em] uppercase"
             style={{ fontSize: 'clamp(10px, 1vw, 14px)' }}>
          SPECIALIZES IN CREATING STUNNING VISUALS AND ENGAGE YOUR AUDIENCE & DRIVE BUSINESS GROWTH&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          SPECIALIZES IN CREATING STUNNING VISUALS AND ENGAGE YOUR AUDIENCE & DRIVE BUSINESS GROWTH&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(0.3deg); }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-float {
          /* animation: float 8s ease-in-out infinite; */
        }

        .animate-fade-in {
          /* animation: fade-in 1s ease-out forwards; */
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }

        @keyframes pulse-shadow {
          0%, 100% {
            text-shadow: 0 0 20px #29CEF2;
          }
          50% {
            text-shadow: 0 0 40px #29CEF2, 0 0 80px #29CEF2, 0 0 120px #29CEF2;
          }
        }

        .hero-text {
          transition: text-shadow 0.3s ease;
        }

        .hero-text:hover {
          animation: pulse-shadow 2s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-scroll-infinite {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
