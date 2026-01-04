"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tc-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#fbf9f3] md:px-20">
      <div className="mx-auto rounded-3xl">
        {/* Header */}
        <h2 className="tc-reveal text-2xl md:text-6xl font-normal text-gray-900 max-w-lg mb-22">
          Our <br /> Product Cases
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CompanyCard
            title="Premium Nigeria Cocoa "
            subTitle="High-quality cocoa beans sourced directly from Nigerian farms, meeting international standards for chocolate and confectionery production."
          />
          <CompanyCard
            title="Canadian Wheat"
            subTitle="Premium wheat varieties from Canadian farms, perfect for milling, baking, and food processing applications worldwide."
          />
          <CompanyCard
            title="Cocoa Wheat"
            subTitle="High-quality cocoa beans sourced directly from Nigerian farms, meeting international standards for chocolate and confectionery production."
          />
        </div>

        {/* CTA */}
        <div className="tc-reveal mt-24 flex justify-center">
          <button className="rounded-full bg-black px-5 py-3 text-base font-medium text-lime-400 hover:bg-black/90 transition">
            View all products →
          </button>
        </div>
      </div>
    </section>
  );
}

const CompanyCard = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="tc-reveal">
      <div className="relative overflow-hidden rounded-xl">
        <div className="clip-mask">
          <Image
            src="/hero-bg.jpg"
            alt={title}
            width={400}
            height={500}
            className="h-90 w-full object-cover"
          />
        </div>

        {/* Si  de clipped arrow */}
        <div className="absolute bottom-0 right-0">
          <div className="flex size-14 items-center justify-center rounded-full bg-black shadow">
            <ArrowUpRight
              size={28}
              strokeWidth={2.5}
              color=" oklch(84.1% 0.238 128.85)"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3">
        <h3 className="font-medium text-2xl text-gray-900">{title}</h3>
        <p className="text-base text-gray-500">{subTitle}</p>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <span className="rounded-xs border border-orange-300 bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
            Branding
          </span>
          <span className="rounded-xs border border-green-300 bg-green-100 px-2 py-0.5 text-xs text-green-700">
            Packaging
          </span>
          <span className="rounded-xs border border-purple-300 bg-purple-100 px-2 py-0.5 text-xs text-purple-700">
            Marketing
          </span>
        </div>
      </div>
    </div>
  );
};
