"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

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
        {/* Page Title */}
        <section className="py-32 px-6 md:px-16 text-center" style={{ backgroundColor: '#000' }}>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white" style={{ textShadow: '0 0 20px #29CEF2' }}>
            ELEGANT WEDDING CEREMONY
          </h1>
          <p className="text-xl text-gray-300 mt-4 iceland-font">
            Capturing timeless moments of love and elegance
          </p>
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