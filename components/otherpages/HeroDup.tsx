"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function DupHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HERO ANIMATION
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        // toggleActions: "play reverse play reverse",
      },
    );
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
        // toggleActions: "play reverse play reverse",
      },
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#f5faf7] z-10"
    >
      <div className="max-margin flex items-center justify-between h-screen gap-6">
        {/* Hero Content */}
        <div className="flex flex-col items-start space-y-6 max-w-lg">
          <h1 className="hero-animate text-5xl md:text-5xl lg:text-6xl lg:leading-16 text-black font-normal font-grotesque leading-tight">
            {title}
          </h1>

          <p className="hero-animate text-base text-gray-500 leading-7">
            {subtitle}
          </p>
        </div>
        {/* <div className="hero-image w-full relative flex items-center aspect-video justify-center overflow-hidden h-150  rounded-xl">
          <Image
            src="/hero-bg.jpg"
            alt="Hero background"
            width={500}
            height={500}
            className="w-full object-cover rounded-xl"
          />
        </div> */}
        <div className="w-full relative flex flex-col gap-6 max-w-2xl">
          <Image
            src="/hero-bg.jpg"
            alt="Hero background"
            width={500}
            height={100}
            className="w-full object-cover h-60 rounded-xl"
          />
          <Image
            src="/hero-bg.jpg"
            alt="Hero background"
            width={500}
            height={200}
            className="w-full object-cover h-70 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
