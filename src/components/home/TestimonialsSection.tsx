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
      text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched. They delivered beyond our expectations every single time.",
      authorName: "Sarah Johnson",
      authorTitle: "CEO, TechVision Inc.",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop"
    },
    {
      id: 2,
      text: "The level of professionalism and expertise demonstrated throughout our project was exceptional. They took the time to understand our vision and brought it to life in ways we hadn't even imagined possible.",
      authorName: "Michael Chen",
      authorTitle: "Founder, Digital Innovations",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
    },
    {
      id: 3,
      text: "I've worked with many agencies over the years, but none have matched the creativity and dedication of this team. They're not just service providers – they're true partners in success.",
      authorName: "Emily Rodriguez",
      authorTitle: "Marketing Director, Bright Future Co.",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=1080&fit=crop"
    },
    {
      id: 4,
      text: "From start to finish, the experience was seamless. Their innovative approach and problem-solving skills helped us overcome challenges we thought were impossible. Highly recommend to anyone looking for quality.",
      authorName: "David Anderson",
      authorTitle: "VP of Operations, Global Solutions",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
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
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: white;
        }

        .testimonial-card.heading-card {
          background: linear-gradient(180deg, #2e5b63, #23304a);
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
          background: rgba(255, 255, 255, 0.95);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
          color: #ccc;
          margin-bottom: 1.5rem;
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
                  <p>{testimonial.text}</p>
                  <div className="author-name">{testimonial.authorName}</div>
                  <div className="author-title">{testimonial.authorTitle}</div>
                </div>
                <div className="testimonial-image-container">
                  <img
                    src={testimonial.authorImage}
                    alt={testimonial.authorName}
                    className="testimonial-image"
                  />
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
