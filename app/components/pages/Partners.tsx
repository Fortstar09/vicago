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
            start: "top top",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5faf7] py-30">
      <div className="mx-auto max-w-7xl px-6 md:px-20">
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="partners-animate text-2xl md:text-4xl font-semibold text-gray-900 max-w-2xl">
            Trusted by global leaders in food and trade
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c911ea3c809db4ef892_cargill.webp"
              alt="Cargill"
              className="partners-animate h-10 object-contain"
            />

            <img
              src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c911ea3c809db4ef889_BARRY%20CALLEBAUT.webp"
              alt="Barry Callebaut"
              className="partners-animate h-12 object-contain"
            />

            <img
              src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c919f67d305e552c1dc_touton-neg.webp"
              alt="Touton"
              className="partners-animate h-10 object-contain"
            />

            <img
              src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f3c91e1122c356321caa5_JBCOCOA.webp"
              alt="JBCocoa"
              className="partners-animate h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
