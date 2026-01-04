"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SustainableSection() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-white text-gray-900 z-20">
      <div className="relative z-10 h-full flex flex-col justify-center gap-30 items-start px-6 md:px-20 py-20">
        <div className="w-full text-black/80 space-y-4 flex justify-between mt-10 ">
          <h2 className="values-text max-w-md text-3xl md:text-7xl font-light leading-tight">
            Eco-friendly Innovation
          </h2>
          <div className="max-w-lg">
            <p className="values-text text-base text-gray-500">
              At Vicago, we believe technology should empower communities,
              protect the environment, and create lasting impact for generations
              to come.
            </p>
            <button className=" inline-flex justify-center items-center gap-1.5 rounded-full  bg-lime-400 px-3.5 cursor-pointer py-2 text-base mt-4 font-medium text-black">
              Our services
              <span className="inline-flex justify-center items-center p-1 bg-black rounded-full size-7">
                <ArrowUpRight color="oklch(84.1% 0.238 128.85)" size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="grid grid-cols-3  w-full">
            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover h-125"
            />

            <Image
              src="/hero-bg.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover h-125"
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
      </div>
    </section>
  );
}
