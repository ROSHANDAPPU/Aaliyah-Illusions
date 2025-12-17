import React from 'react';

export default function CTABanner() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[108px] md:text-[144px] font-bold mb-4 text-white hover:text-[#29CEF2] transition-colors">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90 iceland-font">
          Let's create something extraordinary together. Contact us today and let's make magic happen.
        </p>
        <a
          href="/contact"
          className="inline-block text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-[#29CEF2] transition-colors border border-white/20 px-6 py-2 hover:border-[#29CEF2]"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}