"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dara Mirjahangiry",
      position: "Sei Less Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      quote: "Masters the art of compelling visuals to captivate your audience & boost business growth effectively.",
    },
    {
      name: "Ben An",
      position: "Kimoto Rooftop General Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
      quote: "Outstanding photography service that truly captures the essence of our venue and atmosphere.",
    },
    {
      name: "Luis Vasquez",
      position: "Sofrito Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
      quote: "Professional team that delivers exceptional results every single time. Highly recommended!",
    },
    {
      name: "Luis Flores",
      position: "Cantina Rooftop General Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
      quote: "The quality of work and attention to detail is simply unmatched in the industry.",
    },
    {
      name: "Sal Rosenberg",
      position: "230 Fifth Rooftop Director of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
      quote: "Aaliyah Illusions transformed our visual identity and helped us connect with our audience better.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-40 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-light tracking-[0.4em] uppercase text-gray-600 mb-6">
            [ TESTIMONIALS ]
          </h2>
          <h3 className="font-black uppercase tracking-tight mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1 }}>
            FIND OUT WHAT OUR<br/>CLIENTS SAY
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Masters the art of compelling visuals to captivate your audience & boost business growth effectively.
          </p>
        </div>
      </div>
    </section>
  );
}
