"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HERO ANIMATION
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-dvh w-full overflow-hidden">
      <Image
        src="/value-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black/70" />

      <div className="relative z-10 h-full flex  items-end px-6 md:px-20 w-full">
        <div className="text-white flex justify-between items-end w-full mb-10"></div>
      </div>
    </section>
  );
}
