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
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Text + cards animate in on scroll (no pin on mobile)
      gsap.from(".values-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".blur-card", {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valueRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Only pin on desktop, with scrub so scroll progress drives the pin
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: valueRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1,
        });
      }
    }, valueRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={valueRef}
        className="relative min-h-dvh w-full overflow-hidden"
      >
        {/* Background image */}
        <Image
          src="/images/about-main.jpg"
          alt="Values background"
          fill
          className="object-cover w-auto h-auto"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between gap-10 items-start max-margin py-16 md:py-20">
          <div className="w-full text-white space-y-4 flex flex-col md:flex-row items-start md:items-end justify-between mt-6 md:mt-10">
            <h2 className="values-text max-w-md text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
              Our Values - RIIT
            </h2>
            <div className="max-w-lg mb-4">
              <p className="values-text text-sm sm:text-base text-white/80 mb-6">
                We source, finance, and trade high-quality agricultural
                commodities, connecting producers to global demand centers.
              </p>
              <Button
                title="About us"
                link="/about"
                animationClass="values-text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-center">
            <BlurCard
              id="1"
              title="Reliability"
              subTitle="We are consistent, timely, and responsive. Our clients trust us to deliver highquality products under the most demanding conditions."
            />
            <BlurCard
              id="2"
              title="Impact"
              subTitle="We believe that trade has the power to create meaningful, measurable change. At Vicago, every shipment we deliver and every relationship we build contributes to the broader ecosystem, from supporting local farmers and producers to strengthening food systems in underserved markets."
            />
            <BlurCard
              id="3"
              title="Integrity"
              subTitle="We deliver on our word. Every transaction, every contract, and every shipment reflects our commitment to ethical and transparent business practices."
            />
            <BlurCard
              id="4"
              title="Transformation"
              subTitle="Transformation is the heart of our mission. We don't just move commodities, we empower manufacturers, processors, and food businesses to scale, innovate, and elevate the quality of their products."
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
    <div className="blur-card rounded-xl col-span-1 bg-white/10 backdrop-blur-xs border border-white/10 h-full">
      <div className="  px-5 py-4 text-sm space-y-3 max-w-sm">
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
