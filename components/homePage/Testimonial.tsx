"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

// Mock testimonial data - based on the image
const testimonials = [
  {
    id: 1,
    name: "Garry Humberg",
    role: "Vegetable Farmer",
    image:
      "https://images.unsplash.com/photo-1595314617711-b7b3b4f0c4ff?w=400&h=500&fit=crop",
    testimonial:
      "With their smart farming solutions, we've increased our crop yield by 35% while reducing water usage by 40%. The IoT monitoring system and AI analytics completely transformed the way we manage our farm.",
  },
  // {
  //   id: 2,
  //   name: "Leo Albertus",
  //   role: "Strawberry Farmer",
  //   image:
  //     "https://images.unsplash.com/photo-1595314617711-b7b3b4f0c4ff?w=400&h=500&fit=crop",
  //   testimonial:
  //     "The precision agriculture tools have revolutionized our strawberry production. We're seeing healthier crops and significantly better yields than ever before.",
  // },
  // {
  //   id: 3,
  //   name: "Jim Welbeck",
  //   role: "Vegetable Farmer",
  //   image:
  //     "https://images.unsplash.com/photo-1595314617711-b7b3b4f0c4ff?w=400&h=500&fit=crop",
  //   testimonial:
  //     "With their smart farming solutions, we've increased our crop yield by 35% while reducing water usage by 40%. The IoT monitoring system and AI analytics completely transformed the way we manage our farm.",
  // },
  {
    id: 4,
    name: "Amy Rosenfield",
    role: "Vegetable Farmer",
    image:
      "https://images.unsplash.com/photo-1595314617711-b7b3b4f0c4ff?w=400&h=500&fit=crop",
    testimonial:
      "The automated irrigation system has saved us countless hours and resources. Our farm has never been more efficient or productive.",
  },
  {
    id: 5,
    name: "Christoper McFly",
    role: "Fruit Farmer",
    image:
      "https://images.unsplash.com/photo-1595314617711-b7b3b4f0c4ff?w=400&h=500&fit=crop",
    testimonial:
      "Outstanding technology that delivers real results. The data-driven insights help us make better decisions every single day.",
  },
];

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isActive = index === activeIndex;
      const distance = Math.abs(index - activeIndex);

      gsap.to(card, {
        translateY: isActive ? -40 : 0,
        opacity: isActive ? 1 : 0.4,
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
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
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
      className="min-h-screen bg-gray-50 flex items-center justify-center p-8"
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
                className="relative w-64 h-70 cursor-pointer flex justify-center items-center"
              >
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white relative">
                  <Image
                    src="/hero-bg.jpg"
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-6 pt-20">
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                  </div>
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
            className="w-10 h-10 rounded-full bg-lime-400 hover:bg-lime-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-900"
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
