"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const scrollLength = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollLength}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-white"
    >
      <div ref={trackRef} className="flex h-full w-max">
        {/* CARD 1 */}
        <div className="flex h-full  items-center justify-center px-22">
          <div className="grid grid-cols-2 gap-0 w-full max-w-6xl">
            <Image
              src="/hero-bg.jpg"
              alt="Farmer"
              width={500}
              height={400}
              className="rounded-xl object-cover h-100"
            />

            <div className="rounded-xl bg-gray-100 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-8xl font-bold text-emerald-700">10+</h3>
                <p className="mt-2 text-4xl text-gray-600">
                  Years of Agricultural Innovation
                </p>
              </div>

              <p className="text-base text-gray-500">
                Helping farmers increase yields, reduce waste, and adopt
                sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex h-full  items-center justify-center pr-22">
          <div className="grid grid-cols-2 gap-18 w-full max-w-6xl">
            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={500}
              height={400}
              className="rounded-xl object-cover h-100"
            />

            <div className="rounded-xl bg-lime-400 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-8xl font-bold text-gray-900">85%</h3>
                <p className="mt-2 text-4xl text-gray-800">
                  Customer Satisfaction Rate
                </p>
              </div>

              <p className="text-base text-gray-700">
                Trusted by farmers and agribusinesses across regions.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        {/* <div className="flex h-full w-screen items-center justify-center px-16">
          <div className="grid grid-cols-2 gap-6 w-full max-w-6xl">
            <Image
              src="/hero-bg.jpg"
              alt="Sustainable farming"
              width={500}
              height={400}
              className="rounded-2xl object-cover h-[320px]"
            />

            <div className="rounded-2xl bg-gray-100 p-8 flex flex-col justify-between">
              <h3 className="text-xl font-semibold">Smart Farming Tools</h3>
              <p className="text-sm text-gray-600">
                Data-driven insights for smarter decisions.
              </p>
            </div>
          </div>
        </div> */}

        {/* CARD 4 */}
        {/* <div className="flex h-full w-screen items-center justify-center px-16">
          <div className="grid grid-cols-2 gap-6 w-full max-w-6xl">
            <Image
              src="/hero-bg.jpg"
              alt="Growth"
              width={500}
              height={400}
              className="rounded-2xl object-cover h-[320px]"
            />

            <div className="rounded-2xl bg-lime-400 p-8 flex flex-col justify-between">
              <h3 className="text-xl font-semibold">
                Sustainable Growth
              </h3>
              <p className="text-sm">
                Building resilient farming communities for the future.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
