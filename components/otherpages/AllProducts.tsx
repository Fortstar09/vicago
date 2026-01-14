"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";

export default function AllProducts() {
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
        <div className="w-full text-black/80 gap-6 flex flex-col justify-center items-start max-w-3xl">
          <h2 className=" sustain-heading max-w-4xl text-5xl md:text-6xl leading-tight mb-0 font-normal">
            The building blocks of sustainable global food security
          </h2>
          <p className="sustain-text text-base text-gray-500">
            Every product we export carries with it the care, standards, and
            responsibility we put behind it, not just to meet expectations, but
            to uphold everything our name stands for.
          </p>
        </div>
        <div className="h-full w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* cocoa  */}
            <div className="relative w-full h-150 overflow-hidden">
              <Image
                src="/hero-bg.jpg"
                alt="Crops"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-xl object-cover h-250 w-20"
              />

              <div className="bg-amber-100 border-2 border-black rounded-lg w-[95%] h-fit absolute bottom-4 left-1/2 -translate-x-1/2 p-5">
                <div className="flex items-center justify-between">
                  <div className="max-w-md flex flex-col gap-3 items-start">
                    <h3 className="text-3xl font-semibold">
                      Certified Cocoa Beans
                    </h3>
                    <p className="text-sm font-normal ">
                      We export premium, certified cocoa beans to partners
                      around the world. Every shipment meets global standards
                      for traceability and sustainability.
                    </p>
                    <p className="text-sm font-medium">
                      Primary Markets: Europe, Asia and North America
                    </p>
                    <p className="text-sm">
                      Certifications: Rainforest Alliance
                    </p>
                    <a
                      href="/contact"
                      className="bg-white text-green-950 px-3 py-2 border border-black rounded-full text-sm font-semibold hover:text-white hover:bg-emerald-800"
                    >
                      Contact us
                    </a>
                  </div>

                  <Image
                    src="https://cdn.prod.website-files.com/686b85e087270569bd280001/686f747c90e455fee36a592c_cocoa%20shapes.webp"
                    alt="cocoa icon"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
            </div>

            {/* wheat  */}
            <div className="relative w-full h-150 overflow-hidden">
              <Image
                src="/hero-bg.jpg"
                alt="Crops"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-xl object-cover h-250 w-20"
              />

              <div className="bg-[#f5faf7] border-2 border-black rounded-lg w-[95%] h-fit absolute bottom-4 left-1/2 -translate-x-1/2 p-5">
                <div className="flex items-center justify-between">
                  <div className="max-w-md flex flex-col gap-3 items-start">
                    <h3 className="text-3xl font-semibold">
                      Premium Canadian Wheat
                    </h3>
                    <p className="text-sm font-normal ">
                      Premium wheat varieties from Canadian farms, perfect for
                      milling, baking, and food processing applications
                      worldwide.
                    </p>
                    <p className="text-sm font-medium">
                      Primary Markets: Europe, Asia and North America
                    </p>
                    <a
                      href="/contact"
                      className="bg-white text-green-950 px-3 py-2 border border-black rounded-full text-sm font-semibold hover:text-white hover:bg-emerald-800"
                    >
                      Contact us
                    </a>
                  </div>
                  <Image
                    src="/wheat.png"
                    alt="cocoa icon"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
