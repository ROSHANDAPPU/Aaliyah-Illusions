"use client";
import { useState, useEffect } from "react";
import Navigation from "../../../components/home/Navigation";
import Footer from "../../../components/home/Footer";

const videos = [
  "/corporate/6396162-uhd_2560_1080_25fps.mp4",
  "/corporate/6396169-uhd_2560_1080_25fps.mp4",
  "/corporate/6396173-uhd_2560_1080_25fps.mp4",
  "/corporate/6396177-uhd_2560_1080_25fps.mp4",
  "/corporate/6396213-uhd_2560_1080_25fps.mp4",
  "/corporate/6396219-uhd_2560_1080_25fps.mp4",
  "/corporate/6396285-uhd_2560_1080_25fps.mp4",
  "/corporate/6395974-uhd_2560_1080_25fps.mp4",
  "/corporate/6396171-uhd_2560_1080_25fps.mp4",
  "/corporate/6396172-uhd_2560_1080_25fps.mp4",
  "/corporate/6396302-uhd_2560_1080_25fps.mp4",
  "/corporate/6396319-hd_1920_1080_25fps.mp4",
  "/corporate/3188988-hd_1920_1080_25fps.mp4",
  "/corporate/6395959-hd_1080_1920_30fps.mp4",
  "/corporate/6395965-hd_1080_1920_30fps.mp4",
  "/corporate/6396113-hd_1080_1920_25fps.mp4",
];

export default function CorporateVideography() {
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
            CORPORATE VIDEOGRAPHY
          </h1>
          <p className="text-xl text-gray-300 iceland-font">
            Capturing dynamic moments and storytelling through cinematic videography
          </p>
        </section>

        {/* Video Gallery */}
        <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">
            {/* Showcase Video */}
            <div className="mb-16">
              <div className="relative overflow-hidden rounded-lg">
                <video
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={videos[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Other Videos Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {videos.slice(1).map((video, idx) => (
                <div key={idx} className="break-inside-avoid overflow-hidden rounded-lg">
                  <video
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}