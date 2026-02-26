"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";

const slides = [
  {
    badge: "Sustainable Farming",
    title: (
      <>
        Trusted Agricultural Commodity{" "}
        <span className="hidden sm:inline">
          <br />
        </span>
        Trading Across Continents
      </>
    ),
    description:
      "From precision agriculture to sustainable practices, we help you grow more efficiently and profitably.",
    image: "/images/hero-bg-1.jpg",
  },
  {
    badge: "Smart Agriculture",
    title: <>From Farm to Global Trade</>,
    description: "Built on 45 Years of Experience",
    image: "/images/hero-bg-2.jpg",
  },
  {
    badge: "Reliability • Innovation • Growth",
    title: (
      <>
        Built on decades of farmer{" "}
        <span className="hidden sm:inline">
          <br />
        </span>
        partnerships and market trust.
      </>
    ),
    description: "North American grain excellence for global food production",
    image: "/images/hero-bg-3.jpg",
  },
];

export default function Hero() {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    // show first slide
    gsap.set(slidesRef.current, { opacity: 0 });
    gsap.set(slidesRef.current[0], { opacity: 1, zIndex: 2 });

    const interval = setInterval(() => {
      const current = currentIndex.current;
      const next = (current + 1) % slidesRef.current.length;

      // prepare next slide
      gsap.set(slidesRef.current[next], {
        opacity: 0,
        zIndex: 2,
      });

      // fade in next
      gsap.to(slidesRef.current[next], {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      // fade out current
      gsap.to(slidesRef.current[current], {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(slidesRef.current[current], { zIndex: 0 });
          currentIndex.current = next;
        },
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="h-dvh relative">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) slidesRef.current[i] = el;
            }}
            className="absolute inset-0"
          >
            {/* Background */}
            <Image
              src={slide.image}
              alt="Hero background"
              fill
              className="object-cover w-auto h-auto"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/70" />

            {/* Hero Content */}
            <div className="max-margin relative z-10 h-full flex items-end w-full">
              <div className="text-snow flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-10 md:mb-20 gap-6 md:gap-0">
                <div className="flex flex-col items-start space-y-4 md:space-y-6">
                  <div>
                    <span className="inline-block rounded-full mb-4 md:mb-5 backdrop-blur-sm px-4 py-1.5 text-xs border border-white/20">
                      {slide.badge}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] lg:leading-20 font-medium font-grotesque leading-tight">
                      {slide.title}
                    </h1>
                  </div>

                  <p className="text-sm sm:text-base text-lightgray/80 max-w-sm md:max-w-150 leading-7">
                    {slide.description}
                  </p>
                </div>

                <Button title="Explore more" link="#about" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
