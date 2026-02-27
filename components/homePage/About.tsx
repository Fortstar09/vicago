"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Earth } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".mission-reveal",
      {
        opacity: 0,
        y: 250,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 55%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden flex justify-center items-center bg-lightGreen "
    >
      <div className="max-margin py-10 md:py-20 flex justify-center items-center">
        {/* Static Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* <div className="absolute left-3 xl:left-35 top-60 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={160}
              height={200}
              className="rounded-lg object-cover shadow-lg rotate-3 h-70 w-50"
            />
          </div> */}

          {/* <div className="absolute right-6 xl:right-30 top-10 xl:top-10 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={150}
              height={190}
              className="rounded-lg object-cover shadow-lg -rotate-5 w-50"
            />
          </div> */}
          {/* 
          <div className="absolute right-10 xl:right-36 bottom-25 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={150}
              height={260}
              className="rounded-lg object-cover drop-shadow-2xl rotate-3 w-50 hover:scale-105"
            />
          </div> */}
        </div>

        {/* Center Content */}
        <div className="relative z-10 mx-auto flex flex-col gap-8 items-center text-center max-w-3xl">
          <h2 className="mission-reveal text-3xl md:text-6xl font-bold text-vgbrown leading-tight">
            Our mission <Earth className="inline md:size-12 text-vgreen " /> is
            to facilitate global trade, enabling food producers to source
            premium ingredients.
          </h2>

          <p className="mission-reveal text-base md:text-lg font-light text-gray-600 max-w-xl">
            We believe in a future where technology, sustainability, and
            community growth coexist harmoniously.
          </p>
        </div>
      </div>
    </section>
  );
}
