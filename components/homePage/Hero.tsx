"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

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
        // toggleActions: "play reverse play reverse",
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-dvh w-full overflow-hidden">
      <div className="max-margin h-dvh ">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />{" "}
        <Image
          src="/value-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />{" "}
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
            <Button title="Explore more" animationClass="hero-animate" />
          </div>
        </div>
      </div>
    </section>
  );
}
