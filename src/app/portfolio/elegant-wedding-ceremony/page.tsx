"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const images = [
  "/wedding/pexels-alexander-mass-748453803-35107235.jpg",
  "/wedding/pexels-alexander-mass-748453803-35107245.jpg",
  "/wedding/pexels-alexander-mass-748453803-35107593.jpg",
  "/wedding/pexels-alexander-mass-748453803-35107596.jpg",
  "/wedding/pexels-alinaskazka-14822266.jpg",
  "/wedding/pexels-emma-bauso-1183828-3585806.jpg",
  "/wedding/pexels-fidel-2814808.jpg",
  "/wedding/pexels-grish-petrosyan-3756797-16573361.jpg",
  "/wedding/pexels-leeloothefirst-4544722.jpg",
  "/wedding/pexels-mastercowley-1128783.jpg",
  "/wedding/pexels-moralestorres98-35237379.jpg",
  "/wedding/pexels-mraflih12-35246700.jpg",
  "/wedding/pexels-panditwiguna-2788494.jpg",
  "/wedding/pexels-panditwiguna-2788495.jpg",
  "/wedding/pexels-pixabay-372176.jpg",
  "/wedding/pexels-toan-vo-van-2150581972-35233887.jpg",
  "/wedding/pexels-turkan-bakirli-1557694-16999320.jpg",
];

export default function ElegantWeddingCeremony() {
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
              <source src="/wedding-videos/wedding-cover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
              <h1 className={`${playfair.className} text-6xl md:text-8xl font-black uppercase text-white mb-8`}
                style={{ textShadow: '0 0 12px rgba(41,206,242,0.45), 0 0 35px rgba(41,206,242,0.2)' }}>
                VIDEOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font text-center">
                Capturing dynamic moments and storytelling through cinematic videography
              </p>
              <a href="/portfolio/elegant-wedding-videography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
                VIEW VIDEOS
              </a>
            </div>
          </div>

          {/* Right Side - Photography */}
          <div className="w-1/2 relative">
            <Image
              src="https://dawneicherphotography.com/wp-content/uploads/2022/09/HawaiiElopement-29.jpg"
              alt="Wedding photography"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
              <h1 className={`${playfair.className} text-6xl md:text-8xl font-black uppercase text-white mb-8`}
                style={{ textShadow: '0 0 12px rgba(41,206,242,0.45), 0 0 35px rgba(41,206,242,0.2)' }}>
                PHOTOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font text-center">
                Professional photography capturing timeless moments of love
              </p>
              <a href="/portfolio/elegant-wedding-photography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
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
                    alt={`Wedding image ${idx + 1}`}
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