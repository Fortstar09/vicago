"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DATA = [
  {
    title: "Premium Nigeria Cocoa",
    subtitle: "High-quality cocoa beans sourced directly from Nigerian farms.",
    image: "/images/about-cocoa.jpg",
  },
  {
    title: "Canadian Wheat",
    subtitle:
      "Premium wheat varieties from Canadian farms, perfect for milling, baking, and food processing.",
    image: "/value-bg.jpg",
  },
  {
    title: "Soya Beans",
    subtitle:
      "Premium soya beans from Nigerian farms, ideal for oil extraction and protein production.",
    image:
      "https://i0.wp.com/www.agriculturenigeria.com/wp-content/uploads/2013/05/Soya-Bean-1.jpg",
  },
];

export default function StackingCardsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Initial positions: let GSAP control slide transforms
      DATA.forEach((_, i) => {
        if (i === 0) {
          gsap.set(`.slide-${i}`, { yPercent: 0 });
        } else {
          gsap.set(`.bg-image-${i}`, { yPercent: 100 });
          gsap.set(`.card-${i}`, { yPercent: 100 });
          gsap.set(`.slide-${i}`, { yPercent: 100 });
        }
      });

      // 🔹 Timeline for scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${DATA.length * window.innerHeight}`,
          scrub: true,
          pin: true,
        },
      });

      DATA.forEach((_, i) => {
        if (i === 0) return;

        // slide previous out, bring bg/card in, then bring new slide in
        tl.to(
          `.slide-${i - 1}`,
          { yPercent: -100, duration: 0.45, ease: "power2.inOut" },
          "<",
        )
          .to(`.bg-image-${i}`, { yPercent: 0, duration: 0.6 })
          .to(`.card-${i}`, { yPercent: 0, duration: 0.6 }, "<")
          .to(
            `.slide-${i}`,
            { yPercent: 0, duration: 0.45, ease: "power2.out" },
            "<",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background images */}
      {DATA.map((item, i) => (
        <div
          key={i}
          className={`bg-image-${i} absolute inset-0`}
          style={{ zIndex: i }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover w-auto h-auto"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4">
            {/* Card images */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              {DATA.map((item, i) => (
                <div
                  key={i}
                  className={`card-${i} absolute inset-0`}
                  style={{ zIndex: i }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-auto h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="relative w-full py-6">
              <div className="relative w-full h-22 overflow-hidden ">
                {DATA.map((item, i) => (
                  <div
                    key={i}
                    className={`slide-${i} absolute inset-0 flex flex-col items-center justify-center text-center`}
                    style={{ zIndex: DATA.length - i }}
                  >
                    <h2 className="text-3xl text-gray-800 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 max-w-xl">{item.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="/contact"
                  className="bg-white text-vgbrown px-3 py-2 border border-vgbrown/80 rounded-full text-sm font-semibold hover:text-white hover:bg-vgbrown"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
