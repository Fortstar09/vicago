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
        // markers: true,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div className=" bg-white z-10">
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-white z-10"
      >
        <div ref={trackRef} className="flex h-full w-max">
          {/* CARD 1 */}
          <div className="flex h-full items-center justify-center">
            <div className="grid grid-cols-3 gap-10 pl-22 pr-10  w-full">
              <Image
                src="/hero-bg.jpg"
                alt="Farmer"
                width={500}
                height={400}
                className="rounded-xl object-cover h-full col-span-1"
              />

              <div className="grid grid-cols-2 gap-5 col-span-2">
                <div className="rounded-xl w-full border-3 border-black p-10 bg-[#f5faf7] max-h-62.5">
                  <div className="flex flex-col justify-center items-start gap-9">
                    <h3 className="text-7xl font-bold text-emerald-700">
                      200K+
                    </h3>
                    <p className="text-xl text-gray-500 max-w-[250px]">
                      Metric tonnes exported across the globe
                    </p>
                  </div>
                </div>
                <Image
                  src="/hero-bg.jpg"
                  alt="Farmer"
                  width={500}
                  height={250}
                  className="rounded-xl object-cover max-h-62.5"
                />
                <div className="rounded-xl col-span-2 border-3 border-black p-10 bg-[#fef9e9]">
                  <div className="flex flex-col justify-center items-start gap-9">
                    <h3 className="text-7xl font-bold text-emerald-700">50+</h3>
                    <p className="text-xl text-gray-700 max-w-[250px]">
                      Partners spread across the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex h-full items-center justify-center pr-10">
            <div className="grid grid-cols-3 gap-10 w-full">
              {/* <Image
                src="/hero-bg.jpg"
                alt="Farmer"
                width={500}
                height={400}
                className="rounded-xl object-cover h-full col-span-1"
              /> */}

              <div className="grid grid-cols-2 gap-5 col-span-2">
                <div className="rounded-xl w-full border-3 border-black p-10 bg-[#f5faf7] max-h-62.5">
                  <div className="flex flex-col justify-center items-start gap-9">
                    <h3 className="text-7xl font-bold text-emerald-700">3K+</h3>
                    <p className="text-xl text-gray-500 max-w-[250px]">
                      Farmers across <br /> West Africa
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border-3 border-black p-10 bg-[#f5faf7]">
                  <div className="flex flex-col justify-center items-start gap-9">
                    <h3 className="text-7xl font-bold text-emerald-700">
                      200+
                    </h3>
                    <p className="text-xl text-gray-500 max-w-[250px]">
                      Employees across Nigeria, UK and the Netherlands
                    </p>
                  </div>
                </div>
                <Image
                  src="/hero-bg.jpg"
                  alt="Farmer"
                  width={500}
                  height={250}
                  className="rounded-xl object-cover w-full max-h-62.5 col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
