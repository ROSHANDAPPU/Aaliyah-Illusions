"use client";
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

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Proza Libre, sans-serif', margin: 0, overflowX: 'hidden' }}>
      <Navigation isScrolled={false} />
      <main>
        {/* Hero Section */}
        <section className="hero relative h-screen flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: '#000' }}>
          <div className="hero-text absolute text-center font-black uppercase text-white mix-blend-mode-screen opacity-80" style={{ fontSize: '15vw', letterSpacing: '-2vw' }}>
            SERVICES
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000] to-transparent"></div>
        </section>

        {/* Services List */}
        <section className="services-section">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="service-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-link">
                  VIEW PORTFOLIO
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <h1>Ready to create memories?</h1>
          <a href="/contact" className="cta-button">
            GET IN TOUCH
          </a>
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

        .services-section {
          height: 100vh;
          overflow-y: auto;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .service-card {
          scroll-snap-align: start;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: white;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .service-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 600px;
          padding: 0 20px;
        }

        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 400;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .service-description {
          font-family: 'Proza Libre', sans-serif;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #ccc;
        }

        .service-link {
          display: inline-block;
          font-family: 'Proza Libre', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 4px;
          transition: border-color 0.3s;
          color: white;
        }

        .service-card:hover .service-link {
          border-color: #fff;
        }

        .cta-section {
          height: 100vh;
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top: 1px solid #333;
          z-index: 5;
          position: relative;
        }

        .cta-section h1 {
          font-family: 'Iceland', sans-serif;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #fff;
        }

        .cta-button {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s, border-color 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 24px;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          color: #29CEF2;
          border-color: #29CEF2;
        }

        @media (max-width: 768px) {
          .hero-text {
            font-size: 25vw !important;
            letter-spacing: -4vw !important;
          }
          .services-header h2 {
            font-size: 40px;
          }
          .chapter-num {
            font-size: 60px;
          }
          .card-content h3 {
            font-size: 32px;
          }
          .card-content p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}