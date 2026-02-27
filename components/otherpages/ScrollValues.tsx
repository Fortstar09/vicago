"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Our Mission",
    text: "To connect producers and processors through world-class commodity sourcing, reliable delivery, and uncompromising standards, enabling transformative outcomes in food production, trade, and regional development.",
    bg: "bg-gray-100 text-neutral-900 text-gray-300",
    image: "/value-bg.jpg",
  },
  {
    title: "Our Values",
    text: "To create long-term impact with clarity and intention. We understand that success isn't just about metrics—it's about creating positive change that resonates beyond numbers.",
    bg: "bg-vgbrown text-creamy",
    image: "/careers/value.jpg",
  },
];

export default function VisionMissionPurpose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");

      if (isMobile) {
        // On mobile: simple fade-in on scroll, no pinning
        cardEls.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          });
        });
      } else {
        // Desktop: stacking card animation with pin
        const enterFrom = 500;
        cardEls.forEach((card, index) => {
          gsap.set(card, {
            y: enterFrom,
            opacity: index === 0 ? 1 : 0,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${cardEls.length * 1000}`,
            scrub: true,
            pin: true,
          },
        });

        cardEls.forEach((card, index) => {
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:h-screen bg-[#F1EAE4] text-white z-10"
    >
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center h-full max-w-6xl px-4 sm:px-6 py-16 md:py-0">
        <div className="relative w-full md:h-80 md:mt-5 flex flex-col gap-6 md:block">
          {/* Vision Card — always visible */}
          <div className="md:p-5 p-5 md:absolute md:top-10 w-full md:h-full rounded-3xl shadow-2xl bg-vgreen overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 md:gap-15">
            <div className="max-w-md flex flex-col justify-center md:ml-3">
              <h3 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-snow">
                Our Vision
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-50">
                To become a globally recognised trade facilitator and trusted
                supplier of premium agricultural commodities, empowering
                manufacturers to produce high-quality food products that nourish
                communities worldwide.
              </p>
            </div>
            <div className="w-full md:w-auto md:h-full shrink-0">
              <Image
                src="/images/cocoa-tree.jpg"
                width={500}
                height={500}
                alt="cocoa-tree-image"
                className="object-cover rounded-2xl h-48 md:h-full w-full md:aspect-video"
              />
            </div>
          </div>

          {/* Stacking Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`stack-card md:p-5 p-5 md:absolute md:top-10 w-full md:h-full rounded-3xl ${card.bg} overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 md:gap-15`}
            >
              <div className="max-w-md flex flex-col justify-center md:ml-3">
                <h3 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
                  {card.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed opacity-70">
                  {card.text}
                </p>
              </div>
              <div className="w-full md:w-auto md:h-full shrink-0">
                <Image
                  src={card.image}
                  width={500}
                  height={500}
                  alt={`${card.title}-image`}
                  className="object-cover rounded-2xl h-48 md:h-full w-full md:aspect-video"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
