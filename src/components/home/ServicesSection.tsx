import React from "react";
import { Camera, Video, Printer } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: Camera,
      title: "PHOTOGRAPHY",
      description: "Professional photography services for all occasions",
      image: "/Photo service.jpeg",
      mediaType: "image",
    },
    {
      icon: Video,
      title: "VIDEOGRAPHY",
      description: "Cinematic video production and storytelling",
      image: "/video service.mp4",
      mediaType: "video",
    },
    {
      icon: Printer,
      title: "ON-SITE PRINTING",
      description: "Instant high-quality prints at your event",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=800",
    },
  ];

  return (
    <section id="services" className="relative py-40 px-6 lg:px-8 bg-[#050505]">
      {/* Subtle glow effects */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#29CEF2]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#29CEF2]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-32">
          <div className="text-center space-y-3 mb-12">
            <div className="font-light tracking-wide" style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}>
              <span className="text-gray-600">Our</span>{' '}
              <span className="text-white">company provides a wide</span>
            </div>
            <div className="font-light tracking-wide" style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}>
              <span className="text-[#29CEF2]">range</span>{' '}
              <span className="text-gray-600">of quality services</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center text-[10px] font-light tracking-[0.25em] uppercase text-gray-600 hover:text-[#29CEF2] transition-colors group"
            >
              ALL SERVICES
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
