import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  backgroundImage: string;
}

const ScrollTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const triggerRefs = useRef<(HTMLElement | null)[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Aaliyah Illusions brought an amazing energy to our space. Our guests loved the experience, and the branded photos added real value to our customer engagement. Their team was professional, seamless, and respectful of our environment. It elevated our brand presence without disrupting operations.",
      authorName: "MILA UPTOWN",
      authorTitle: "Dallas",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      backgroundImage: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F741415989%2F195845259104%2F1%2Foriginal.20240411-165920?h=740&w=1200&auto=format%2Ccompress&q=75&sharp=10&s=3ec7e98f4b0444db8c9a62efe47f368f"
    },
    {
      id: 2,
      text: "The photography experience created unforgettable moments for our guests. People stayed longer, interacted more, and left with smiles. Aaliyah Illusions understands nightlife branding. The photos, branding, and overall execution aligned perfectly with our atmosphere.",
      authorName: "RODEO UPTOWN DALLAS",
      authorTitle: "Deep Ellum",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      backgroundImage: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F741415989%2F195845259104%2F1%2Foriginal.20240411-165920?h=740&w=1200&auto=format%2Ccompress&q=75&sharp=10&s=3ec7e98f4b0444db8c9a62efe47f368f"
    },
    {
      id: 3,
      text: "This service adds something unique that most restaurants do not offer. Guests appreciate the extra touch, and it strengthens brand recall. The monthly media content we received was clean, high quality, and perfect for social media and promotions.",
      authorName: "Restaurant Management Team",
      authorTitle: "Feedback",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      backgroundImage: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F741415989%2F195845259104%2F1%2Foriginal.20240411-165920?h=740&w=1200&auto=format%2Ccompress&q=75&sharp=10&s=3ec7e98f4b0444db8c9a62efe47f368f"
    },
    {
      id: 4,
      text: "Getting a framed photo at the restaurant made the night feel special. It is something we actually keep, not just another phone picture. It felt premium, fun, and personal. Definitely something we would love to see at more places.",
      authorName: "Guest Experience",
      authorTitle: "Testimonial",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      backgroundImage: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F741415989%2F195845259104%2F1%2Foriginal.20240411-165920?h=740&w=1200&auto=format%2Ccompress&q=75&sharp=10&s=3ec7e98f4b0444db8c9a62efe47f368f"
    }
  ];

  const numPages = testimonials.length + 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const refs = triggerRefs.current;
    refs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .testimonials-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonials-container {
          height: 100vh;
          width: 100%;
          overflow-y: auto;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonial-card {
          scroll-snap-align: start;
          flex: 0 0 auto;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: white;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }

        .testimonial-card.heading-card {
          background: #29CEF2;
          color: white;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        .testimonial-card.heading-card h2 {
          font-size: 4rem;
          font-weight: 700;
        }

        .testimonial-content {
          padding: 3rem;
          width: 50%;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .testimonial-text {
          flex: 1;
          padding-right: 2rem;
        }

        .quote-mark {
          font-size: 4rem;
          color: #4a90e2;
          line-height: 0;
          margin-bottom: 1rem;
        }

        .testimonial-text p {
          font-family: 'Proza Libre', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #fff;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .iceland-font {
          font-family: 'Iceland', cursive;
          font-size: 16.5rem;
        }

        .author-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #fff;
          margin-bottom: 0.3rem;
        }

        .author-title {
          font-family: 'Proza Libre', sans-serif;
          font-size: 0.95rem;
          color: #999;
        }

        .testimonial-image-container {
          flex-shrink: 0;
        }

        .testimonial-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #4a90e2;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .scroll-indicator {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          text-align: center;
          color: white;
          font-size: 0.9rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          opacity: ${activeIndex === 0 ? '0' : '1'};
          transition: opacity 0.5s ease;
        }

        .scroll-dots {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          justify-content: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: white;
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .testimonial-content {
            width: 70%;
            flex-direction: column;
            text-align: center;
          }

          .testimonial-text {
            padding-right: 0;
          }

          .testimonial-image {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-content {
            width: 90%;
            padding: 2rem;
            gap: 2rem;
          }

          .testimonial-text p {
            font-size: 1rem;
          }

          .testimonial-image {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <article className="testimonial-card heading-card">
            <h2>Testimonials</h2>
          </article>

          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="testimonial-card"
              style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
              ref={(el) => { triggerRefs.current[index + 1] = el; }}
              data-index={index + 1}
            >
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <div className="quote-mark">"</div>
                  <p className={testimonial.id === 2 ? 'iceland-font' : ''}>{testimonial.text}</p>
                  <div className="author-name">{testimonial.authorName}</div>
                  <div className="author-title">{testimonial.authorTitle}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScrollTestimonials;
