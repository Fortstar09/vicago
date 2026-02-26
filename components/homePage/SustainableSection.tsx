"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SustainableSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(".sustain-stat-desc", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sustain-stat-desc",
          start: "top 85%",
        },
      });

      gsap.from(".sustain-caption", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sustain-caption",
          start: "top 90%",
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
      <div className="max-out relative z-10 h-full flex flex-col justify-center gap-6 items-start max-margin py-16 md:py-20">
        <div className="w-full flex justify-between items-end">
          <h2 className="sustain-heading max-w-md text-3xl md:text-6xl font-normal leading-tight text-vgreen">
            Our strategy
          </h2>
        </div>
        <div className="h-full w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 w-full h-fit">
            {/* First row: text card + image */}
            <div className="rounded-xl bg-vgreen sm:col-span-2 lg:col-span-4 p-5 flex flex-col gap-4 h-full hover-lift">
              <h2 className="sustain-stat-desc mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-creamy max-w-lg">
                Strengthening Community Wellbeing
              </h2>
              <p className="sustain-caption text-sm sm:text-base text-gray-50/80 max-w-xl">
                Supporting farmers is not a side initiative — it is central to
                how we operate. We invest in local communities, provide fair
                wages, and offer education and resources to help farmers thrive.
                By empowering those at the heart of our supply chain, we create
                a more sustainable and equitable future for all.
              </p>
            </div>
            <Image
              src="/images/strategy-one.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover sm:col-span-1 lg:col-span-2 w-full h-48 sm:h-full hover-lift"
            />

            {/* Second row: image + text card */}
            <Image
              src="/images/strategy-two.jpg"
              alt="Crops"
              width={400}
              height={400}
              className="rounded-xl object-cover sm:col-span-1 lg:col-span-2 w-full h-48 sm:h-full hover-lift"
            />
            <div className="rounded-xl bg-vgbrown sm:col-span-2 lg:col-span-4 p-5 flex flex-col gap-4 h-full hover-lift">
              <h2 className="sustain-stat-desc mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-creamy max-w-lg">
                Improving Farmers&apos; Livelihoods
              </h2>
              <p className="sustain-caption text-sm sm:text-base text-gray-50/80 max-w-xl">
                Our farmer network forms the backbone of a reliable and
                resilient supply chain. We work closely with farmers to provide
                them with the resources, training, and market access they need
                to succeed. By fostering strong partnerships and investing in
                their growth, we help improve livelihoods and create a more
                sustainable future for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
