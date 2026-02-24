"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

// Mock testimonial data - based on the image
const testimonials = [
  {
    id: 3,
    name: "Mr Godwin",
    role: "Cocoa Farmer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    testimonial:
      "Vicago’s support goes far beyond the transaction. By providing high-quality farm inputs and technical guidance, they have significantly improved my crop yields and farm health. They don't just buy my cocoa; they invest in my future as a farmer.",
  },
  {
    id: 2,
    name: "Mr Johnson",
    role: "Global Procurement Specialist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop",
    testimonial:
      "In the global commodity market, reliability is the only currency that matters. I have absolute confidence in Vicago Group to deliver premium-grade cocoa beans that meet the highest international standards. Their attention to detail and commitment to excellence make them our preferred supplier year after year.",
  },
  {
    id: 4,
    name: "Mr Frank",
    role: "Strategic Trade Partner",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=500&fit=crop",
    testimonial:
      "Vicago Group has been a cornerstone of our expansion. Their consistent financial support and timely advances were instrumental in our recent farm acquisitions and the successful scaling of our trading division. They are a partner that understands the value of liquidity and long-term vision.",
  },
];

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isActive = index === activeIndex;
      const distance = Math.abs(index - activeIndex);

      gsap.to(card, {
        translateY: isActive ? -40 : 0,
        opacity: isActive ? 1 : 0.2,
        y: isActive ? -20 : 0,
        zIndex: isActive ? 10 : 5 - distance,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-snow flex items-center justify-center p-8"
    >
      <div className="max-w-7xl w-full">
        {/* Testimonial Quote */}
        <div className="max-w-5xl mx-auto pt-16 mb-20">
          <div ref={textRef}>
            <p className="text-xl md:text-3xl leading-tight text-gray-900 text-center font-normal">
              &ldquo;{testimonials[activeIndex].testimonial}&rdquo;
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onClick={() => handleCardClick(index)}
                className="relative w-fit h-fit cursor-pointer flex justify-center items-center"
              >
                <div className="p-6 pt-20 text-center">
                  <h3 className="text-vgreen font-semibold text-2xl mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-5 gap-4">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-vgbrown/80 hover:bg-vgbrown flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-snow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
