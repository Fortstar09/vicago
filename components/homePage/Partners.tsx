"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Partner {
  id: string;
  name: string;
  logo: string;
  height: string;
}

const PARTNERS: Partner[] = [
  {
    id: "inter",
    name: "INTER AGRO GROUP",
    logo: "/partners/inter.png",
    height: "h-15",
  },
  {
    id: "barry-callebaut",
    name: "Barry Callebaut",
    logo: "https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c911ea3c809db4ef889_BARRY%20CALLEBAUT.webp",
    height: "h-15",
  },
  {
    id: "olam",
    name: "Olam Group",
    logo: "/partners/olam.png",
    height: "h-15",
  },
  {
    id: "sucden",
    name: "Sucden",
    logo: "/partners/sucden.png",
    height: "h-15",
  },
];

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const marqueeAnimationRef = React.useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partners-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector(
      ".marquee-content",
    ) as HTMLElement;
    if (!marqueeContent) return;

    const startAnimation = () => {
      if (marqueeAnimationRef.current) {
        marqueeAnimationRef.current.play();
      } else {
        marqueeAnimationRef.current = gsap.to(marqueeContent, {
          x: -marqueeContent.offsetWidth / 2,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    };

    const stopAnimation = () => {
      if (marqueeAnimationRef.current) {
        marqueeAnimationRef.current.pause();
      }
    };

    marqueeRef.current.addEventListener("mouseenter", stopAnimation);
    marqueeRef.current.addEventListener("mouseleave", startAnimation);

    startAnimation();

    return () => {
      marqueeRef.current?.removeEventListener("mouseenter", stopAnimation);
      marqueeRef.current?.removeEventListener("mouseleave", startAnimation);
      if (marqueeAnimationRef.current) {
        marqueeAnimationRef.current.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-lightGreen pt-30 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-2">
        <div className="flex flex-col items-center gap-14 text-center">
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="partners-animate text-xl md:text-5xl font-medium text-charcoal max-w-4xl">
              Trusted by global leaders in food and trade
            </h2>
          </div>
          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="relative w-full overflow-hidden py-10"
          >
            {/* Blur Edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5faf7] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5faf7] to-transparent z-10 pointer-events-none" />

            {/* Marquee Content */}
            <div className="marquee-content flex gap-12 w-fit">
              {/* First set of logos */}
              {PARTNERS.map((partner) => (
                <PartnerLogo
                  key={`${partner.id}-1`}
                  partner={partner}
                  isHovered={hoveredId === partner.id}
                  onHover={setHoveredId}
                />
              ))}

              {/* Duplicate set for seamless loop */}
              {PARTNERS.map((partner) => (
                <PartnerLogo
                  key={`${partner.id}-2`}
                  partner={partner}
                  isHovered={hoveredId === partner.id}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PartnerLogoProps {
  partner: Partner;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({
  partner,
  isHovered,
  onHover,
}) => {
  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 group"
      onMouseEnter={() => onHover(partner.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className={`${
          partner.height
        } object-contain transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-75 group-hover:opacity-90"
        }`}
      />

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1 rounded shadow-lg pointer-events-none">
          {partner.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};

export default Partners;
