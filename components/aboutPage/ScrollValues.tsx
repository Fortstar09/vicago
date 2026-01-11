"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Vision",
    text: "To shape the future through thoughtful innovation. We believe in pushing boundaries and exploring new possibilities to create meaningful solutions that drive progress. Our vision is rooted in the belief that technology and design can work together to solve complex problems and make a lasting impact on society.",
    bg: "bg-white text-neutral-900",
    image: "/hero-bg.jpg",
  },
  {
    title: "Mission",
    text: "To build meaningful products that empower people. We're committed to creating tools and experiences that help individuals and organizations reach their full potential. Every product we develop is designed with purpose, combining functionality with elegance to deliver real value to our users and communities.",
    bg: "bg-gray-100 text-neutral-900",
    image: "/value-bg.jpg",
  },
  {
    title: "Purpose",
    text: "To create long-term impact with clarity and intention. We understand that success isn't just about metrics—it's about creating positive change that resonates beyond numbers. Our purpose guides every decision we make, ensuring that we build a future where innovation serves humanity and sustainability leads the way.",
    bg: "bg-gray-200 text-neutral-900",
    image: "/hero-bg.jpg",
  },
];

export default function VisionMissionPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

      const overlap = 110; // how much each card peeks out
      const enterFrom = 500; // start fully hidden below

      // Initial state — cards start from below, hidden
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: enterFrom,
          opacity: index === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 1000}`,
          scrub: true,
          pin: true,
          //   markers: true,
        },
      });

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            y: index * overlap,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1.5,
          },
          index === 0 ? 0 : "-=0.5"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#5a3b1f]/30 text-white z-10 "
    >
      <div className="mx-auto flex h-full max-w-6xl items-start px-6">
        <div className="relative h-[400px] w-full mt-15">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`stack-card p-10 absolute top-0 w-full h-full rounded-3xl shadow-2xl ${card.bg} overflow-hidden flex justify-between items-center gap-15`}
            >
              <div className="w-4/5  flex flex-col justify-center">
                <h3 className="mb-6 text-4xl font-bold">{card.title}</h3>
                <p className="text-lg leading-relaxed text-gray-400">
                  {card.text}
                </p>
              </div>
              <div>
                <Image
                  src={card.image}
                  width={500}
                  height={500}
                  alt={`${card.title}-image`}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
