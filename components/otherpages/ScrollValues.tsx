"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  // {
  //   title: "Vision",
  //   text: "To shape the future through thoughtful innovation. We believe in pushing boundaries and exploring new possibilities to create meaningful solutions that drive progress. Our vision is rooted in the belief that technology and design can work together to solve complex problems and make a lasting impact on society.",
  //   bg: "bg-white text-neutral-900",
  //   image: "/hero-bg.jpg",
  // },
  {
    title: "Our Mission",
    text: "To connect producers and processors through world-class commodity sourcing, reliable delivery, and uncompromising standards.",
    bg: "bg-gray-100 text-neutral-900",
    image: "/value-bg.jpg",
  },
  {
    title: "Our Values",
    text: "To create long-term impact with clarity and intention. We understand that success isn't just about metrics—it's about creating positive change that resonates beyond numbers.",
    bg: "bg-vgbrown text-creamy",
    image: "/hero-bg.jpg",
  },
];

export default function VisionMissionPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

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
          // markers: true,
        },
      });

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            y: -index,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1.5,
          },
          index === 0 ? 0 : "-=0.5",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#F1EAE4] text-white z-10 "
    >
      <div className="mx-auto flex justify-center items-center h-full max-w-6xl px-6">
        <div className="relative h-80 w-full mt-5">
          <div className="p-7 absolute top-10 w-full h-full rounded-3xl shadow-2xl bg-vgreen overflow-hidden flex justify-between items-center gap-15">
            <div className="w-4/5  flex flex-col justify-center">
              <h3 className="mb-6 text-4xl font-bold text-snow">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-50">
                To become a globally recognised trade facilitator and trusted
                supplier of premium agricultural commodities, empowering
                manufacturers worldwide
              </p>
            </div>
            <div className="h-full">
              <Image
                src="/images/cocoa-tree.jpg"
                width={500}
                height={500}
                alt={`cocoa-tree-image`}
                className="object-cover aspect-video rounded-2xl h-full"
              />
            </div>
          </div>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`stack-card p-7 absolute top-10 w-full h-full rounded-3xl ${card.bg} overflow-hidden flex justify-between items-center gap-15`}
            >
              <div className="w-4/5  flex flex-col justify-center">
                <h3 className="mb-6 text-4xl font-bold">{card.title}</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  {card.text}
                </p>
              </div>
              <div>
                <Image
                  src={card.image}
                  width={400}
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
