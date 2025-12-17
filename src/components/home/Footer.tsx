import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedBrandText } from "@/components/ui/animated-brand-text";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/aaliyahillusions" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100082687053196" },
    { name: "TikTok", url: "https://www.tiktok.com/@aaliyahillusions" },
    { name: "Twitter", url: "https://twitter.com/aaliyahillusions" }
  ];

  return (
    <footer className="footer_footer" style={{ background: '#000', borderTop: 'none', marginTop: '0' }}>
      <picture className="footer_bg">
        {/* Background image or gradient can be added here */}
      </picture>
      <div className="container_container footer_container">
        <div className="footer_top grid">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
            {/* Social Links - Left */}
            <div className="flex flex-wrap gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-light tracking-[0.2em] uppercase text-white hover:text-[#29CEF2] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Link - Right */}
            <a
              href="#contact"
              className="text-[#29CEF2] font-black text-xl uppercase tracking-wider hover:text-[#3DD8FC] transition-all group flex items-center"
            >
              LET'S TALK
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        <div className="footer_middle">
          <AnimatedBrandText text="Aaliyah Illusions" className="text-6xl md:text-8xl lg:text-9xl text-center font-black uppercase" style={{ fontFamily: 'Metal Mania, cursive', letterSpacing: '-0.05em', lineHeight: 0.8 }} />
        </div>

        <div className="footer_bottom flex">
          {/* Copyright */}
          <span className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Aaliyah Illusions. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
