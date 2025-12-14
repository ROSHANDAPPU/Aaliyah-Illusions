"use client";
import { useState, useEffect, useRef } from "react";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 100%)' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="hero relative h-screen flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: '#000' }}>
          <div className="hero-text absolute text-center font-black uppercase text-white mix-blend-mode-screen opacity-80" style={{ fontSize: '15vw', letterSpacing: '-2vw' }}>
            CONTACT
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#222] to-transparent"></div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 md:px-16" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 50%, #000 100%)' }}>
          <div className="max-w-[800px] mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Your Name" className="bg-gray-800 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29CEF2]" />
                <input type="email" placeholder="Your Email" className="bg-gray-800 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29CEF2]" />
              </div>
              <textarea placeholder="Your Message" rows={6} className="bg-gray-800 p-4 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[#29CEF2]"></textarea>
              <div className="text-center">
                <button type="submit" className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <div style={{ marginTop: '0', paddingTop: '0' }}>
        <Footer />
      </div>
      <style jsx global>{`
        .footer_footer {
          position: relative;
          z-index: 0;
          margin-top: 0 !important;
        }
      `}</style>

      <style jsx>{`
        .hero-text {
          animation: floatText 12s ease-in-out infinite alternate;
        }
        @keyframes floatText {
          0% { transform: translateY(-20px) rotate(-2deg); }
          50% { transform: translateY(20px) rotate(2deg); }
          100% { transform: translateY(-20px) rotate(-2deg); }
        }
        @media (max-width: 768px) {
          .hero-text {
            font-size: 25vw !important;
            letter-spacing: -4vw !important;
          }
        }
      `}</style>
    </div>
  );
}
