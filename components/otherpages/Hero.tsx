"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({
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
      className="relative  w-full overflow-hidden bg-[#f5faf7] z-10 h-fit"
    >
      <div className="max-margin mt-40 mb-20">
        {/* Hero Content */}
        <div className="max-out relative z-10 h-full flex flex-col gap-20 items-center w-full mb-8">
          <div className="text-black/90 flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-15">
            <div className="flex flex-col items-start space-y-6">
              <div>
                <h1 className="hero-animate text-5xl md:text-5xl lg:text-6xl lg:leading-16 max-w-xl font-normal font-grotesque leading-tight">
                  {title}
                </h1>
              </div>

              <p className="hero-animate text-base text-gray-500 max-w-90 leading-7">
                {subtitle}
              </p>
            </div>
            <button className="inline-flex justify-center items-center gap-2 animate-bounce text-sm text-gray-400 mt-6 md:mt-0">
              Explore more <ArrowDown size={16} />
            </button>
          </div>
        </div>
        <div className="hero-image w-full relative flex items-center aspect-video justify-center overflow-hidden h-100  rounded-xl">
          <img
            src="/csr/csr-hero.jpg"
            alt="CSR Hero background"
            width={500}
            height={800}
            className="w-auto h-auto object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
