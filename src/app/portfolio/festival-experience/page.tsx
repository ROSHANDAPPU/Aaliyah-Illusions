"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const images = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516633630673-69bbad7a1047?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1515937213437-7f2d67460af4?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559030624-a4625b3a6289?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1510545934149-278a9d23a5e3?w=500&h=400&fit=crop",
];

export default function FestivalExperience() {
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex" style={{ backgroundColor: '#000' }}>
          {/* Left Side - Videography */}
          <div className="w-1/2 relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/corporate/6396162-uhd_2560_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
              <h1 className={`${playfair.className} text-6xl md:text-8xl font-black uppercase text-white mb-8`}
                style={{ textShadow: '0 0 12px rgba(41,206,242,0.45), 0 0 35px rgba(41,206,242,0.2)' }}>
                VIDEOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font text-center px-12">
                Immersive festival coverage that captures the energy and excitement of live events
              </p>
              <a href="/portfolio/festival-experience-videography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
                VIEW VIDEOS
              </a>
            </div>
          </div>

          {/* Right Side - Photography */}
          <div className="w-1/2 relative">
            <Image
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop"
              alt="Festival photography"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 px-12 text-center">
              <h1 className={`${playfair.className} text-6xl md:text-8xl font-black uppercase text-white mb-8`}
                style={{ textShadow: '0 0 12px rgba(41,206,242,0.45), 0 0 35px rgba(41,206,242,0.2)' }}>
                PHOTOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font">
                Vibrant photography bringing festival moments to life with stunning clarity
              </p>
              <a href="/portfolio/festival-experience-photography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
                VIEW PHOTOS
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {images.map((image, idx) => (
                <div key={idx} className="break-inside-avoid overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Festival image ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
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
      `}</style>
    </div>
  );
}