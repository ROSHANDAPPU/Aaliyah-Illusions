import React from "react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-40 px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#29CEF2]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Label */}
        <div className="text-[10px] font-light tracking-[0.4em] uppercase text-gray-600 mb-12">
          [ ABOUT US ]
        </div>

        {/* Animated Headlines */}
        <div className="mb-16 space-y-4">
          <h2 className="font-black uppercase leading-[0.9] tracking-tight animate-text-reveal"
              style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>
            PASSIONATE ABOUT BOOSTING
          </h2>
          <h2 className="font-black uppercase leading-[0.9] tracking-tight animate-text-reveal-delay"
              style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>
            YOUR BUSINESS THROUGH
          </h2>
          <h2 className="font-black uppercase leading-[0.9] tracking-tight animate-text-reveal-delay-2"
              style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>
            VISUAL STORYTELLING
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Our team excels in crafting captivating visuals to showcase creations, engaging audiences, and business growth
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-[#29CEF2] text-black hover:bg-[#3DD8FC] font-black text-sm px-10 py-6 uppercase tracking-wider transition-all hover:shadow-[0_12px_40px_rgba(41,206,242,0.2)] hover:scale-105"
        >
          READ MORE
        </Button>

        {/* Scrolling Text Loop */}
        <div className="mt-32 overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll-loop-slow font-black uppercase tracking-tighter text-gray-900/10"
               style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
            <span className="mx-12">Aaliyah Illusions</span>
            <span className="mx-12">•</span>
            <span className="mx-12">PHOTOGRAPHY</span>
            <span className="mx-12">•</span>
            <span className="mx-12">Aaliyah Illusions</span>
            <span className="mx-12">•</span>
            <span className="mx-12">PHOTOGRAPHY</span>
            <span className="mx-12">•</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-reveal {
            animation: text-reveal 1s ease-out forwards;
        }
        .animate-text-reveal-delay {
            animation: text-reveal 1s ease-out 0.2s forwards;
        }
        .animate-text-reveal-delay-2 {
            animation: text-reveal 1s ease-out 0.4s forwards;
        }
        @keyframes scroll-loop-slow {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-scroll-loop-slow {
            animation: scroll-loop-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
