"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const images = [
  "/corporate/pexels-pavel-danilyuk-6405771.jpg",
  "/corporate/pexels-pavel-danilyuk-6405754.jpg",
  "/corporate/pexels-pavel-danilyuk-6405751.jpg",
  "/corporate/pexels-pavel-danilyuk-6405750.jpg",
  "/corporate/pexels-rdne-6518881.jpg",
  "/corporate/pexels-rdne-6518892.jpg",
  "/corporate/pexels-rdne-6519151.jpg",
  "/corporate/pexels-rdne-6519217.jpg",
  "/corporate/pexels-rdne-6519229.jpg",
  "/corporate/pexels-rdne-6519411.jpg",
  "/corporate/pexels-rdne-6518865.jpg",
];

export default function CorporatePhotography() {
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
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            CORPORATE PHOTOGRAPHY
          </h1>
          <p className="text-xl text-gray-300 iceland-font">
            Professional photography capturing corporate excellence
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
                    alt={`Corporate photo ${idx + 1}`}
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
    </div>
  );
}