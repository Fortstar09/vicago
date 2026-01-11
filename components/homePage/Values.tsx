"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top top", // 👈 START animation when section enters

          pin: true,
          scrub: false,
          // toggleActions: "play reverse play reverse",
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
        // stagger: 0.2,
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
          <div className="w-full text-white space-y-4 flex flex-col md:flex-row items-end justify-between mt-10 ">
            <h2 className="values-text max-w-md text-5xl md:text-7xl font-light leading-tight">
              Our Values - RIIT
            </h2>
            <div className="max-w-lg mb-10">
              <p className="values-text text-base text-white/80">
                At Vicago, we believe technology should empower communities,
                protect the environment, and create lasting impact for
                generations to come.
              </p>
              <Button title="Our services" animationClass="values-text" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-center ">
            <BlurCard
              id="1"
              title="Reliability"
              subTitle="We empower farmers with smart, accessible technology that improves productivity."
            />
            <BlurCard
              id="2"
              title="Impact"
              subTitle="We develop cutting-edge solutions to address global food challenges."
            />
            <BlurCard
              id="3"
              title="Integrity"
              subTitle="We build partnerships that uplift local communities and support economic growth."
            />
            <BlurCard
              id="4"
              title="Transformation"
              subTitle="We operate with transparency, accountability, and ethical practices in all our endeavors."
            />
          </div>
        </div>
      </section>
    </>
  );
}

const BlurCard = ({
  id,
  title,
  subTitle,
}: {
  id: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="blur-card col-span-1">
      <div className="rounded-xl bg-white/10 backdrop-blur-xs px-5 py-4 text-sm space-y-3 max-w-sm border border-white/10">
        <div>
          <p className="font-extralight text-xs text-white">00{id}</p>
          <p className="text-lg font-medium text-white mt-2">{title}</p>
        </div>

        <p className="text-sm font-light text-white/80 mt-2 leading-relaxed">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
