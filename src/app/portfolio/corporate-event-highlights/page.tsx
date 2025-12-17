"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const images = [
  "/corporate/pexels-a-darmel-8134103.jpg",
  "/corporate/pexels-bertellifotografia-18999573.jpg",
  "/corporate/pexels-cottonbro-3171820.jpg",
  "/corporate/pexels-cottonbro-3201720.jpg",
  "/corporate/pexels-cottonbro-3201724.jpg",
  "/corporate/pexels-pavel-danilyuk-6405750.jpg",
  "/corporate/pexels-pavel-danilyuk-6405751.jpg",
  "/corporate/pexels-pavel-danilyuk-6405754.jpg",
  "/corporate/pexels-pavel-danilyuk-6405771.jpg",
  "/corporate/pexels-rdne-6518865.jpg",
  "/corporate/pexels-rdne-6518881.jpg",
  "/corporate/pexels-rdne-6518892.jpg",
  "/corporate/pexels-rdne-6519151.jpg",
  "/corporate/pexels-rdne-6519217.jpg",
  "/corporate/pexels-rdne-6519229.jpg",
  "/corporate/pexels-rdne-6519411.jpg",
  "/corporate/pexels-reneterp-2505056.jpg",
];

export default function CorporateEventHighlights() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex" style={{ backgroundColor: '#000' }}>
          {/* Left Side - Videography */}
          <div className="w-1/2 relative flex flex-col justify-center items-center p-16">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/corporate/6396285-uhd_2560_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center">
              <h1 className="text-6xl md:text-8xl font-black uppercase text-white mb-8">
                VIDEOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font text-center">
                Capturing dynamic moments and storytelling through cinematic videography
              </p>
              <a href="/portfolio/corporate-videography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
                VIEW VIDEOS
              </a>
            </div>
          </div>

          {/* Right Side - Photography */}
          <div className="w-1/2 relative">
            <Image
              src="/corporate/pexels-pavel-danilyuk-6405771.jpg"
              alt="Corporate photography"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
              <h1 className="text-6xl md:text-8xl font-black uppercase text-white mb-8">
                PHOTOGRAPHY
              </h1>
              <p className="text-xl text-gray-300 mb-8 iceland-font text-center">
                Professional photography capturing corporate excellence
              </p>
              <a href="/portfolio/corporate-photography" className="text-[10px] font-light tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2 hover:border-[#29CEF2] hover:text-[#29CEF2] transition-colors">
                VIEW PHOTOS
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}