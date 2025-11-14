"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import AboutSection from "../components/home/AboutSection";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background-dark text-neutral-text-light min-h-screen overflow-hidden">
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
