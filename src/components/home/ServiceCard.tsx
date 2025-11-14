"use client";
import React, { useState } from "react";
import { LucideProps } from "lucide-react";

interface ServiceCardProps {
    icon: React.ComponentType<LucideProps>;
    title: string;
    description: string;
    image: string;
}

export default function ServiceCard({ icon: Icon, title, description, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden cursor-pointer bg-black"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-10">
        <div
          className={`transition-all duration-500 ${
            isHovered ? 'translate-y-0' : 'translate-y-3'
          }`}
        >
          <Icon className="w-14 h-14 text-[#29CEF2] mb-6 transition-transform duration-500" 
                style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
          
          <h3 className="text-4xl font-black uppercase tracking-tight mb-3 leading-none">
            {title}
          </h3>
          
          <p
            className={`text-gray-400 text-sm mb-6 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {description}
          </p>
          
          <div
            className={`flex items-center text-[#29CEF2] font-medium text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <span>SEE PORTFOLIO</span>
            <span className="ml-3">→</span>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div
        className={`absolute inset-0 border-2 border-[#29CEF2] transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
