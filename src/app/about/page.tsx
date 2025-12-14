"use client";
import { useState, useEffect, useRef } from "react";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";
import Image from "next/image";

export default function About() {
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
            ABOUT US
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#222] to-transparent"></div>
        </section>

        {/* About Content Section */}
        <section className="py-24 px-6 md:px-16" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 50%, #000 100%)' }}>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-lg">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-4">
                Aaliyah Illusions is a creative powerhouse specializing in capturing and creating unforgettable moments. Our passion is to blend artistry with technology to deliver stunning visual experiences.
              </p>
              <p className="mb-4">
                Founded on the principles of creativity, innovation, and client satisfaction, we have grown into a multidisciplinary team of photographers, videographers, designers, and social media experts.
              </p>
              <p>
                We believe that every brand, event, and story is unique. That's why we offer a tailored approach to each project, ensuring that our work not only meets but exceeds your expectations.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=600&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
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
