"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "Inovasi Agriplot is a tech-driven dataset developed by Mosaix and Inovasi Digital to provide companies with deforestation-free supply chain information aligned with EU Deforestation Regulation.";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = Array.from(container.querySelectorAll<HTMLElement>(".word"));
    const imgInners = Array.from(
      container.querySelectorAll<HTMLElement>(".img-inner")
    );

    // derive image size from text
    const sample = words[0] ?? container;
    const fontSize = parseFloat(getComputedStyle(sample).fontSize || "16");
    const height = Math.round(fontSize + 10);
    const width = Math.round(height * 2.2);

    imgInners.forEach((el) => {
      Object.assign(el.style, {
        width: "0px",
        height: `${height}px`,
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "middle",
        opacity: "0",
        position: "relative",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
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
      0
    ).to(
      imgInners,
      {
        width,
        opacity: 1,
        stagger: 0.5,
        ease: "power2.out",
      },
      0
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const tokens = TEXT.split(" ");

  return (
    <section className="bg-white text-gray-900">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 py-40">
        <p className="text-lg md:text-xl font-medium leading-snug text-center mx-auto max-w-6xl justify-center items-center">
          {tokens.slice(0, 9).map((word, i) => (
            <span key={i} className="word inline-block mr-3 mb-4">
              {word}
            </span>
          ))}

          <InlineImage src="/hero-bg.jpg" />

          {tokens.slice(9, 18).map((word, i) => (
            <span key={i + 12} className="word inline-block mr-2 mb-2">
              {word}
            </span>
          ))}

          <InlineImage src="/value-bg.jpg" />

          {tokens.slice(18).map((word, i) => (
            <span key={i + 24} className="word inline-block mr-2 mb-2">
              {word}
            </span>
          ))}
          <InlineImage src="/hero-bg.jpg" />
        </p>
      </div>
    </section>
  );
};

export default About;

/* ---------- helpers ---------- */

const InlineImage = ({ src }: { src: string }) => (
  <span className="inline-block align-middle mx-3">
    <span className="img-inner rounded-lg">
      <Image src={src} alt="" fill className="object-cover" />
    </span>
  </span>
);
