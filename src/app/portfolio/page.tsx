"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const portfolioItems = [
  {
    title: "Elegant Wedding Ceremony",
    image: "https://images.unsplash.com/photo-1516633630673-69bbad7a1047?w=800&h=600&fit=crop",
    description: "Capturing the timeless beauty of a coastal wedding, where natural light and ocean breezes created an unforgettable atmosphere. Our photography highlighted the intimate moments and architectural elegance of the venue.",
    category: "Photography",
    year: "2023",
  },
  {
    title: "Corporate Event Highlights",
    image: "https://images.unsplash.com/photo-1515937213437-7f2d67460af4?w=800&h=600&fit=crop",
    description: "Transforming a standard business conference into a visually compelling narrative. Through strategic videography and on-site printing, we amplified the brand's message and created lasting impressions for attendees.",
    category: "Videography",
    year: "2023",
  },
  {
    title: "Product Launch Campaign",
    image: "https://images.unsplash.com/photo-1510545934149-278a9d23a5e3?w=800&h=600&fit=crop",
    description: "Showcasing innovation through dynamic visual storytelling. Our comprehensive approach combined high-end photography with social media management to build anticipation and drive engagement.",
    category: "SMM",
    year: "2023",
  },
  {
    title: "Family Portrait Session",
    image: "https://images.unsplash.com/photo-1524222724992-2202b3734142?w=800&h=600&fit=crop",
    description: "Preserving family bonds through authentic, candid moments. In a historic garden setting, we captured the genuine emotions and connections that define modern family life.",
    category: "Photography",
    year: "2023",
  },
  {
    title: "Festival Experience",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    description: "Immortalizing the vibrant energy of cultural celebration. Our photobooth captured spontaneous joy while souvenir printing provided tangible memories of the festive atmosphere.",
    category: "Photobooth",
    year: "2023",
  },
  {
    title: "Brand Identity Launch",
    image: "https://images.unsplash.com/photo-1559030624-a4625b3a6289?w=800&h=600&fit=crop",
    description: "Crafting a visual identity that resonates with heritage and modernity. Through meticulous attention to detail in printing and presentation, we established a new brand narrative.",
    category: "Souvenir Printing",
    year: "2023",
  },
  {
    title: "Architectural Showcase",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
    description: "Revealing the soul of contemporary architecture through lens. Our onsite documentation captured the interplay of light, space, and human interaction within this innovative structure.",
    category: "Onsite Printing",
    year: "2023",
  },
  {
    title: "Culinary Art Series",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    description: "Elevating food presentation to an art form. Through precise lighting and composition, we transformed everyday dishes into visual masterpieces that tell stories of flavor and culture.",
    category: "Photography",
    year: "2023",
  },
  {
    title: "Documentary Film Project",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    description: "Chronicling human experiences through cinematic lens. Our videography approach captured raw emotions and authentic moments, creating a compelling narrative of community and change.",
    category: "Videography",
    year: "2023",
  },
];

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

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
        <section ref={heroRef} className="hero relative h-screen flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: '#000' }}>
          <div className="hero-text absolute text-center font-black uppercase text-white mix-blend-mode-screen opacity-80" style={{ fontSize: '15vw', letterSpacing: '-2vw' }}>
            PORTFOLIO
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000] to-transparent"></div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 px-6 md:px-16" style={{ backgroundColor: '#000' }}>
          <div className="max-w-[1600px] mx-auto">
            <div className="listings-grid">
              {portfolioItems.map((item, idx) => (
                <article key={idx} className="listing-card group flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="image-wrapper relative w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="meta-tag text-xs text-gray-400 uppercase tracking-wider mb-3 block">
                      {item.category} | {item.year}
                    </span>
                    <h3 className="listing-title text-2xl font-serif font-bold text-white mb-3">{item.title}</h3>
                    <p className="listing-desc text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                    <a href="#" className="view-link text-[10px] font-light tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
                      VIEW PROJECT
                    </a>
                  </div>
                </article>
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

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 40px;
          row-gap: 80px;
        }

        .image-wrapper {
          width: 100%;
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
          background-color: #1a1a1a;
        }

        .listing-card:nth-child(3n + 1) .image-wrapper {
          aspect-ratio: 1 / 1;
        }

        .listing-card:not(:nth-child(3n + 1)) .image-wrapper {
          aspect-ratio: 2 / 3;
        }

        .meta-tag {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-bottom: 12px;
          display: block;
        }

        .listing-title {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
          color: #fff;
        }

        .listing-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #999;
          max-width: 90%;
        }

        .view-link {
          display: inline-block;
          margin-top: 24px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 4px;
          transition: border-color 0.3s;
        }

        .listing-card:hover .view-link {
          border-color: #fff;
        }

        @media (max-width: 1024px) {
          .listings-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .listing-card:nth-child(n) .image-wrapper {
            aspect-ratio: 4 / 5;
          }
        }

        @media (max-width: 768px) {
          .hero-text {
            font-size: 25vw !important;
            letter-spacing: -4vw !important;
          }
        }
      `}</style>
    </div>
  );
}
