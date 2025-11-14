"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of photography services do you offer?",
      answer: "We offer wedding, portrait, event, commercial, and landscape photography.",
    },
    {
      question: "What is your photography style?",
      answer: "Our style blends documentary, artistic, and natural photography, capturing genuine moments.",
    },
    {
      question: "How long does it take to receive the final photographs?",
      answer: "Typically, you can expect to receive your images within 2-4 weeks for standard sessions and 4-6 weeks for weddings.",
    },
    {
      question: "How far in advance should I book your services for my event or photo shoot?",
      answer: "It's advisable to book our services as early as possible to ensure availability, especially for weddings and events.",
    },
    {
      question: "Do you offer customizable packages or are your services fixed?",
      answer: "We offer customizable packages tailored to fit your specific needs. We're flexible to accommodate your requirements.",
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1 className="faq-heading">FAQS</h1>

      <div className="faq-cards">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${flippedCard === index ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="faq-card-inner">
              <div className="faq-card-front">
                {faq.question}
              </div>
              <div className="faq-card-back">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
