"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { useScrollPin } from "@/hooks/useScrollPin";
import Button from "../ui/Button";

export default function SustainableSection() {
  const sectionRef = useScrollPin();

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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
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
      <div className=" max-out relative z-10 h-full flex flex-col justify-center gap-30 items-start max-margin py-20">
        <div className="w-full text-black/80 space-y-4 flex justify-between items-end mt-10 ">
          <h2 className=" sustain-heading max-w-md text-3xl md:text-7xl font-light leading-tight">
            Sustainability Section
          </h2>
          <div className="max-w-lg">
            <p className="sustain-text text-lg text-gray-500">
              At Vicago, we believe technology should empower communities,
              protect the environment, and create lasting impact for generations
              to come.
            </p>
            <Button title="Our services" animationClass="sustain-button" />
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="grid grid-cols-3 gap-6  w-full">
            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover h-105"
            />

            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover h-105"
            />

            <div className="rounded-xl bg-lime-400 border-3 border-black p-8 flex flex-col justify-between">
              <div>
                <h3 className="sustain-stat text-8xl font-bold text-gray-900">
                  85%
                </h3>
                <p className="sustain-stat-desc mt-2 text-4xl text-gray-800">
                  Customer Satisfaction Rate
                </p>
              </div>

              <p className="sustain-caption  text-base text-gray-700">
                Trusted by farmers and agribusinesses across regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
