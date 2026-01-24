"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
            // markers: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="bg-lightGreen pt-30 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-20">
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="partners-animate text-xl md:text-3xl font-semibold text-charcoal max-w-2xl">
            Trusted by global leaders in food and trade
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src="/partners/inter.png"
              alt="Inter"
              className="partners-animate h-13 object-contain"
            />

            <img
              src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c911ea3c809db4ef889_BARRY%20CALLEBAUT.webp"
              alt="Barry Callebaut"
              className="partners-animate h-12 object-contain"
            />

            <img
              src="/partners/olam.png"
              alt="Olam"
              className="partners-animate h-10 object-contain"
            />

            <img
              src="/partners/sucden.png"
              alt="sucden"
              className="partners-animate h-13 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
