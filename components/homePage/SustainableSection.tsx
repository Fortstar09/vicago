"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";

export default function SustainableSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Heading — strong entrance
      gsap.from(".sustain-heading", {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sustain-heading",
          start: "top 75%",
          end: "bottom 30%",
          // toggleActions: "play reverse play reverse",
        },
      });

      // 2️⃣ Paragraph — softer, from right
      gsap.from(".sustain-text", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sustain-text",
          start: "top 75%",
          end: "bottom 15%",
          // toggleActions: "play reverse play reverse",
          // markers: true,
        },
      });

      // 3️⃣ Button — delayed pop
      gsap.from(".sustain-button", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".sustain-button",
          start: "top 80%",
          end: "bottom 20%",
          // toggleActions: "play reverse play reverse",
        },
      });

      // 4️⃣ Stat number — impact moment
      gsap.from(".sustain-stat", {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".sustain-stat",
          start: "top 85%",
          // toggleActions: "play reverse play reverse",
        },
      });

      // 5️⃣ Stat description
      gsap.from(".sustain-stat-desc", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sustain-stat-desc",
          start: "top 85%",
          // toggleActions: "play reverse play reverse",
        },
      });

      // 6️⃣ Bottom caption
      gsap.from(".sustain-caption", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sustain-caption",
          start: "top 90%",
          // toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh w-full overflow-hidden bg-white text-gray-900"
    >
      <div className=" max-out relative z-10 h-full flex flex-col justify-center gap-20 items-start max-margin py-20">
        <div className="w-full text-black/80 space-y-4 flex justify-between items-end">
          <h2 className=" sustain-heading max-w-md text-3xl md:text-7xl font-light leading-tight">
            Our strategy
          </h2>
        </div>
        <div className="h-full w-full ">
          <div className="grid grid-cols-6 gap-4  w-full">
            <div className="rounded-xl bg-[#4A290F] border-3 col-span-4 border-black p-8 flex flex-col gap-6 ">
              <h2 className="sustain-stat-desc mt-2 text-5xl font-semibold text-creamy max-w-lg">
                Strengthening Community Wellbeing
              </h2>
              <p className="sustain-caption  text-lg text-gray-50 max-w-lg">
                We build with the whole community in mind. From education access
                and child labor prevention to women’s income programs, we invest
                in the communities behind the produce.
              </p>
            </div>
            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover col-span-2 w-full"
            />
            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover col-span-2 w-full"
            />
            <div className="rounded-xl bg-[#58714D] border-3 col-span-4 border-black p-8 flex flex-col gap-6 ">
              <h2 className="sustain-stat-desc mt-2 text-5xl font-semibold text-creamy max-w-lg">
                Improving Farmers’ Livelihoods
              </h2>
              <p className="sustain-caption  text-lg text-gray-50 max-w-lg">
                We believe farmers are the backbone of our global value chain
                and should earn more than survival. That’s why we pay fairly,
                educate consistently, and help local producers unlock real
                value, from sourcing to financing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
