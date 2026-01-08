"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Earth } from "lucide-react";
import { useScrollPin } from "@/hooks/useScrollPin";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useScrollPin();

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
          start: "top 30%",
          end: "bottom 55%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex justify-center items-center bg-[#f5faf7]  min-h-dvh "
    >
      <div className="max-margin py-28 flex justify-center items-center">
        {/* Static Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* <div className="absolute left-10 top-10 mission-reveal">
          <Image
            src="/hero-bg.jpg"
            alt="Decorative image"
            width={140}
            height={180}
            className="rounded-xl object-cover shadow-lg h-70 w-50"
          />
        </div> */}

          <div className="absolute left-3 xl:left-35 top-60 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={160}
              height={200}
              className="rounded-xl object-cover shadow-lg rotate-3 h-70 w-50"
            />
          </div>

          <div className="absolute right-6 xl:right-30 top-5 xl:top-10 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={150}
              height={190}
              className="rounded-xl object-cover shadow-lg -rotate-5 h-70 w-50"
            />
          </div>

          <div className="absolute right-10 xl:right-36 bottom-15 mission-reveal">
            <Image
              src="/hero-bg.jpg"
              alt="Decorative image"
              width={200}
              height={260}
              className="rounded-xl object-cover shadow-lg rotate-3 h-70 w-50"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-2xl">
          <h2 className="mission-reveal text-3xl md:text-6xl font-bold text-gray-900 leading-snug">
            Our mission <Earth className="inline size-14 text-emerald-700 " />{" "}
            is to create and provide innovative, eco-friendly solutions that
            promote recycling and green living.
          </h2>

          <p className="mission-reveal text-base font-light leading-8 text-gray-600 max-w-xl">
            We believe in a future where technology, sustainability, and
            community growth coexist harmoniously.
          </p>

          {/* <button className="mission-reveal mt-8 rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition">
          About Vicago
        </button> */}
        </div>
      </div>
    </section>
  );
}
