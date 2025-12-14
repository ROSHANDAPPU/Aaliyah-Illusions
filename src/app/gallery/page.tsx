"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1516633630673-69bbad7a1047?w=500&h=400&fit=crop", alt: "Gallery image 1" },
  { src: "https://images.unsplash.com/photo-1515937213437-7f2d67460af4?w=500&h=400&fit=crop", alt: "Gallery image 2" },
  { src: "https://images.unsplash.com/photo-1510545934149-278a9d23a5e3?w=500&h=400&fit=crop", alt: "Gallery image 3" },
  { src: "https://images.unsplash.com/photo-1524222724992-2202b3734142?w=500&h=400&fit=crop", alt: "Gallery image 4" },
  { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop", alt: "Gallery image 5" },
  { src: "https://images.unsplash.com/photo-1559030624-a4625b3a6289?w=500&h=400&fit=crop", alt: "Gallery image 6" },
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop", alt: "Gallery image 7" },
  { src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop", alt: "Gallery image 8" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=400&fit=crop", alt: "Gallery image 9" },
];

export default function Gallery() {
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
            GALLERY
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#222] to-transparent"></div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 px-6 md:px-16" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 50%, #000 100%)' }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
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
