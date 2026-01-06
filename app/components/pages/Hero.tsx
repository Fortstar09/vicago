"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
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
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex-center h-dvh w-full overflow-hidden max-margin"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/70" />

      {/* Hero Content */}
      <div className="max-out relative z-10 h-full flex items-end w-full">
        <div className="text-white flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-15">
          <div className="flex flex-col items-start space-y-6">
            <div>
              <span className="hero-animate inline-block rounded-full mb-5 backdrop-blur-sm px-4 py-1.5 text-xs border border-white/20">
                Sustainable Farming Tech
              </span>

              <h1 className="hero-animate text-4xl md:text-6xl lg:text-[76px] lg:leading-24 font-medium font-grotesque leading-tight">
                Bringing Innovation to <br /> Your Farming Journey.
              </h1>
            </div>

            <p className="hero-animate text-base text-white/90 max-w-150 leading-7">
              From precision agriculture to sustainable practices, we help you
              grow more efficiently and profitably. From precision agriculture
              to sustainable practices, profitably.
            </p>
          </div>
          <button className=" hero-animate inline-flex justify-center items-center gap-1.5 rounded-full  bg-[#517f3e] px-3.5 cursor-pointer py-2 text-base mt-10 font-medium text-gray-100">
            Get Started
            <span className="inline-flex justify-center items-center p-1 bg-gray-200 rounded-full size-7">
              <ArrowUpRight color="#517f3e" size={20} />
            </span>
          </button>
          {/* <div className="hero-animate flex items-center gap-10">
            <div className="rounded-xl bg-white/10 backdrop-blur-xs px-5 py-4 text-sm space-y-8 max-w-sm border border-white/10">
              <p className="font-light text-xl text-white">Our Mission</p>

              <p className="text-xs font-light text-white/80 mt-2 leading-relaxed">
                We empower farmers with smart, accessible technology that
                improves productivity, reduces waste, and drives sustainable
                growth across communities.
              </p>

              <div className="mt-3 flex items-center gap-3 text-[11px] text-white/70">
                <span className="flex items-center gap-1">
                  🌱 Sustainability
                </span>
                <span className="flex items-center gap-1">
                  📊 Smart Insights
                </span>
                <span className="flex items-center gap-1">🚜 Productivity</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
