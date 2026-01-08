"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollPin } from "@/hooks/useScrollPin";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const valueRef = useScrollPin();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top top", // 👈 START animation when section enters
          end: "bottom 20%", // 👈 END after enough reading time
          pin: true,
          scrub: false,
          toggleActions: "play reverse play reverse",
          // markers: {
          //   startColor: "green",
          //   endColor: "red",
          //   fontSize: "12px",
          // },
        },
      });

      // 1️⃣ Text reveal
      tl.from(".values-text", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // 2️⃣ Cards slide up
      tl.from(
        ".blur-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.4"
      );
    }, valueRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={valueRef} className="relative h-dvh w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/value-bg.jpg"
          alt="Values background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between items-start max-margin py-20">
          <div className="w-full text-white space-y-4 flex justify-between mt-10 ">
            <h2 className="values-text max-w-md text-3xl md:text-7xl font-light leading-tight">
              Eco-friendly Innovation
            </h2>
            <div className="max-w-lg">
              <p className="values-text text-base text-white/80">
                At Vicago, we believe technology should empower communities,
                protect the environment, and create lasting impact for
                generations to come.
              </p>
              <button className=" values-text inline-flex justify-center items-center gap-1.5 rounded-full  bg-lime-400 px-3.5 cursor-pointer py-2 text-base mt-4 font-medium text-black">
                Our services
                <span className="inline-flex justify-center items-center p-1 bg-black rounded-full size-7">
                  <ArrowUpRight color="oklch(84.1% 0.238 128.85)" size={20} />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-4 w-full items-center ">
            <BlurCard />
            <BlurCard />
            <BlurCard />
          </div>
        </div>
      </section>
    </>
  );
}

const BlurCard = () => {
  return (
    <div className="blur-card">
      <div className="rounded-xl bg-white/10 backdrop-blur-xs px-5 py-4 text-sm space-y-3 max-w-sm border border-white/10">
        <div>
          <p className="font-extralight text-xs text-white">001</p>
          <p className="text-lg font-medium text-white mt-2">Sustainability</p>
        </div>

        <p className="text-sm font-light text-white/80 mt-2 leading-relaxed">
          We empower farmers with smart, accessible technology that improves
          productivity.
        </p>
      </div>
    </div>
  );
};
