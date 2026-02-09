"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "Vicago Group was founded to address one of the world’s most critical challenges: building resilient, efficient, and scalable agricultural value chains that support food security, economic growth, and global competitiveness. We operate at the intersection of agriculture, infrastructure, and data, developing integrated systems that connect production to global markets. Our work is driven by the belief that agriculture underpins global growth, trade, and economic resilience. From the outset, Vicago has focused on creating structured, data-driven, and commercially viable agricultural solutions. Rather than operating as a single-purpose agribusiness, we function as a group with interconnected verticals designed to solve real problems across the agricultural ecosystem, reducing inefficiencies, improving traceability, and enabling scale.";

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

  console.log(tokens.length / 3);

  return (
    <section className="bg-vgreen text-snow  overflow-hidden z-10">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 pb-30 mb-20">
        <p className="text-lg font-medium leading-snug text-center mx-auto max-w-6xl justify-center items-center">
          {tokens.slice(0, 37).map((word, i) => (
            <span key={i} className="word">
              {word}
            </span>
          ))}

          {tokens.slice(37, 74).map((word, i) => (
            <span key={i + 37} className="word">
              {word}
            </span>
          ))}

          {tokens.slice(74).map((word, i) => (
            <span key={i + 74} className="word">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
