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
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/70" />

      {/* Navbar */}
      <nav className="absolute top-0 z-20 w-full  px-6 md:px-20 py-6 flex items-center justify-between text-white hero-animate">
        <div className="font-semibold text-lg">Vicago</div>

        <div className="hidden md:flex gap-8 text-sm font-light">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Product</Link>
          <Link href="#">Sustainability</Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="rounded-full bg-lime-400 px-3.5 py-1.5 text-xs font-medium text-black inline-flex items-center gap-1.5 font-grotesque">
            <span className="size-1.5 bg-black block rounded-full"></span>Log in
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex  items-end px-6 md:px-20 w-full">
        <div className="text-white flex justify-between items-end w-full mb-15">
          <div className="flex flex-col items-start space-y-6">
            <div>
              <span className="hero-animate inline-block rounded-full mb-5 backdrop-blur-sm px-4 py-1.5 text-xs border border-white/20">
                Sustainable Farming Tech
              </span>

              <h1 className="hero-animate text-4xl md:text-6xl font-light font-grotesque leading-tight">
                Bringing Innovation to <br /> Your Farming Journey.
              </h1>
            </div>

            <p className="hero-animate text-sm text-white/90 max-w-150 leading-7">
              From precision agriculture to sustainable practices, we help you
              grow more efficiently and profitably. From precision agriculture
              to sustainable practices, profitably.
            </p>
          </div>
          <button className=" inline-flex justify-center items-center gap-1.5 rounded-full  bg-lime-400 px-3.5 cursor-pointer py-2 text-base mt-10 font-medium text-black">
            Get Started
            <span className="inline-flex justify-center items-center p-1 bg-black rounded-full size-7">
              <ArrowUpRight color="oklch(84.1% 0.238 128.85)" size={20} />
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
