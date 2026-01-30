"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "With strategic operations in Nigeria and Canada, we serve manufacturers and processors across West Africa, Europe, and North America. Our mission is to facilitate global trade, enabling food producers to source premium ingredients. We combine market knowledge, global logistics, and deep-rooted partnerships to create efficient, reliable, and transparent supply chains built on integrity.";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = Array.from(container.querySelectorAll<HTMLElement>(".word"));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 25%",
        end: "+=600",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      words,
      { opacity: 0 },
      { opacity: 1, stagger: 0.02, ease: "none" },
      0,
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const tokens = TEXT.split(" ");

  return (
    <section className="bg-vgreen text-snow  overflow-hidden z-10">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 pb-30 mb-20">
        <p className="text-lg font-medium leading-snug text-center mx-auto max-w-6xl justify-center items-center">
          {tokens.slice(0, 17).map((word, i) => (
            <span key={i} className="word">
              {word}
            </span>
          ))}

          {tokens.slice(18, 34).map((word, i) => (
            <span key={i + 12} className="word">
              {word}
            </span>
          ))}

          {tokens.slice(35, 56).map((word, i) => (
            <span key={i + 24} className="word">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
