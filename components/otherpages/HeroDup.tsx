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
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-lightGreen z-10"
    >
      <div className="max-margin flex flex-col md:flex-row items-start md:items-center justify-between h-screen gap-6 pt-20">
        {/* Hero Content */}
        <div className="flex flex-col items-start space-y-6 max-w-lg pt-10">
          <h1 className="hero-animate text-5xl md:text-5xl lg:text-6xl lg:leading-16 text-vgreen font-normal font-grotesque leading-tight">
            {title}
          </h1>

          <p className="hero-animate text-base text-gray-500 leading-7">
            {subtitle}
          </p>
        </div>
        <div className="w-full relative grid grid-cols-3 grid-rows-2 gap-4 max-w-2xl">
          <div className="h-50 relative rounded-lg col-span-2 cursor-pointer overflow-hidden">
            <Image
              src="/images/about-main.jpg"
              alt="Hero background"
              fill
              className="w-full h-auto object-cover rounded-lg hover:scale-150 transition-transform duration-800 "
            />
          </div>
          <Image
            src="/images/about-cocoa.jpg"
            alt="Hero background"
            width={200}
            height={200}
            className="w-full object-cover h-50 rounded-lg col-span-1 cursor-pointer hover-lift hover:scale-105"
          />
          <Image
            src="/images/about-wheat.jpg"
            alt="Hero background"
            width={200}
            height={200}
            className="w-full object-cover h-50 rounded-lg col-span-1 cursor-pointer hover-lift hover:scale-105"
          />
          <div className="h-50 relative rounded-lg col-span-2 cursor-pointer overflow-hidden">
            <Image
              src="/images/cocoa-tree-much.jpg"
              alt="Hero background"
              fill
              className="w-full h-auto object-cover rounded-lg hover:scale-120 transition-transform duration-400 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
