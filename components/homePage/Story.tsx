"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import BlogCard from "../ui/BlogCard";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline controlling all animations for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%", // start when section top is near bottom of viewport
          end: "bottom top", // active range
          scrub: false, // scroll-tied? set true if you want
          // toggleActions: "play reverse play reverse",
          // markers: true, // debug markers
          // id: "Product Section",
        },
      });

      // 1️⃣ Header
      tl.from(".tc-header", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      // 2️⃣ Cards — animate each card in staggered
      tl.from(
        ".tc-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.97,
          duration: 1,
          ease: "power3.out",
          stagger: 0.25,
          delay: 0.3,
        },
        "-=0.6", // overlap with header
      );

      // 3️⃣ CTA button
      tl.from(".tc-cta", {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="py-20 bg-lightGreen ">
      <div className="mx-auto rounded-3xl max-margin ">
        {/* Header */}
        <h2 className="tc-header text-2xl md:text-6xl font-normal text-gray-900 max-w-lg mb-18">
          Our Story
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BlogCard
            title="A Year in Cocoa"
            subTitle="Reflections on the Cocoa Industry in 2024"
            src="/images/cocoa-tree-much.jpg"
          />
          <BlogCard
            title="Driving Positive Change"
            subTitle="Highlights of Vicago Group Global Concepts' Rural Impact in 2024"
            src="/images/blog1.jpg"
          />
          <BlogCard
            title="Spotlighting Our Sustainability Champions"
            subTitle=" "
            src="/images/strategy-one.jpg"
          />
          <BlogCard
            title="Spotlighting Our Sustainability Champions"
            subTitle=" "
            src="/images/strategy-one.jpg"
          />
        </div>

        {/* CTA */}
        <div className="tc-cta mt-14 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex justify-center items-center gap-2 animate-bounce text-sm text-gray-400"
          >
            Explore more <ArrowDown size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Company card component
