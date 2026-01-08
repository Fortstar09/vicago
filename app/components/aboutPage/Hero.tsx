"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useScrollPin } from "@/hooks/useScrollPin";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useScrollPin();

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
    <section
      ref={heroRef}
      className="relative  w-full overflow-hidden bg-[#f5faf7] "
    >
      <div className="max-margin mt-50">
        {/* Hero Content */}
        <div className="max-out relative z-10 h-full flex flex-col gap-20 items-center w-full">
          <div className="text-black/90 flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-15">
            <div className="flex flex-col items-start space-y-6">
              <div>
                <h1 className="hero-animate text-2xl md:text-4xl lg:text-[60px] lg:leading-16 max-w-xl font-normal font-grotesque leading-tight">
                  Discover The Story:
                  <br /> Cultivating Innovation In Agriculture.
                </h1>
              </div>

              <p className="hero-animate text-base text-gray-500 max-w-90 leading-7">
                Explore our journey in Redefining the future of farming
                technology
              </p>
            </div>
            <button className="hero-animate inline-flex justify-center items-center gap-2 text-sm mt-10 font-light text-gray-500">
              Explore more <ArrowDown strokeWidth={1.5} size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
