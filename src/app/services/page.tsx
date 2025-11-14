"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

const services = [
  {
    title: "Onsite Printing",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop",
    description: "Instant keepsakes: Our onsite printing services offer guests the opportunity to take home memorable photographs and mementos of their visit, creating lasting connections with your brand.",
    link: "/portfolio/on-site-printing",
  },
  {
    title: "Photo",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop",
    description: "Our food photography service captures the essence of your dishes, making them look as delectable as they taste.",
    link: "/portfolio/photo",
  },
  {
    title: "Videography",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=400&fit=crop",
    description: "Turning moments into memories. Our videography service captures the heart and soul of your special occasions, creating lasting memories.",
    link: "/portfolio/videography",
  },
  {
    title: "Photobooth",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop",
    description: "Snapshot memories: Our photobooths add a touch of fun to your events and gatherings. Let your guests capture spontaneous moments and share them instantly.",
    link: "/portfolio/photobooth",
  },
  {
    title: "SMM",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop",
    description: "We manage your social media presence, creating engaging content and interacting with your audience to boost your online visibility and reputation.",
    link: "/portfolio/smm",
  },
  {
    title: "Souvenir Printing",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=400&fit=crop",
    description: "Our skilled team brings the art of souvenir printing to your doorstep, ensuring that your special occasions are etched in time with precision and creativity.",
    link: "/portfolio/souvenir-printing",
  },
];

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && target.dataset.index) {
            setVisibleCards((prev) => new Set([...Array.from(prev), target.dataset.index!]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-neutral-text-light min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 100%)' }}>
      <Navigation isScrolled={isScrolled} />
      <main className="text-white min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="hero relative h-screen flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: '#000' }}>
          <div className="hero-text absolute text-center font-black uppercase text-white mix-blend-mode-screen opacity-80" style={{ fontSize: '15vw', letterSpacing: '-2vw' }}>
            SERVICES
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#222] to-transparent"></div>
        </section>

      {/* Services List */}
      <section className="py-24 px-6 md:px-16 flex flex-col gap-24 services-list" style={{ background: 'linear-gradient(to bottom, #222 0%, #29CEF2 50%, #000 100%)' }}>
        <div className="max-w-[1200px] mx-auto">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-700 service-card ${
                visibleCards.has(idx.toString()) ? "animate" : ""
              } flex flex-col md:flex-row h-[350px] md:h-[400px]`}
              style={{ background: idx >= 4 ? 'linear-gradient(to bottom, #222 0%, #29CEF2 100%)' : (idx >= 2 && idx <= 3 ? '#29CEF2' : 'linear-gradient(to bottom, #222 0%, #29CEF2 100%)') }}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[idx] = el as HTMLAnchorElement | null;
              }}
              data-index={idx.toString()}
            >
              <div className="relative h-64 md:h-full md:w-1/2 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center bg-gray-900">
                <h3 className="text-2xl font-semibold uppercase mb-4" style={{ letterSpacing: '1px' }}>{service.title}</h3>
                <p className="text-base text-gray-300 mb-6 flex-grow">{service.description}</p>
                <a href={service.link} className="text-[#29CEF2] font-bold uppercase text-sm hover:text-white transition-colors self-start" style={{ letterSpacing: '1px' }}>Portfolio</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 text-center px-6 contact-section" style={{ backgroundColor: '#000', marginBottom: '0' }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-animate">
          Have any questions?
        </h2>
        <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
          Let's Talk
        </button>
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

      {/* Styled JSX for animations */}
      <style jsx>{`
        .hero-text {
          animation: floatText 12s ease-in-out infinite alternate;
        }

        .fade-in-animate {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .service-card {
          opacity: 0;
          transform: translateY(60px);
        }
        .service-card.animate {
          animation: fadeInUpStagger 0.8s forwards;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        @keyframes floatText {
          0% { transform: translateY(-20px) rotate(-2deg); }
          50% { transform: translateY(20px) rotate(2deg); }
          100% { transform: translateY(-20px) rotate(-2deg); }
        }

        @keyframes fadeInUpStagger {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .contact-section {
          position: relative;
        }
        .bg-gradient-radial::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 25%;
          background: linear-gradient(45deg, #29CEF2 0%, transparent 100%);
        }
        .bg-gradient-radial::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 25%;
          background: linear-gradient(45deg, transparent 0%, #29CEF2 100%);
        }

        @media (max-width: 768px) {
          .hero-text {
            font-size: 25vw !important;
            letter-spacing: -4vw !important;
          }
          .bg-gradient-radial {
            background: linear-gradient(135deg, #29CEF2 0%, #000 100%);
          }
        }
      `}</style>
    </div>
  );
}