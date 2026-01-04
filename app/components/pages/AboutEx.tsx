"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ABOUT SECTION ON SCROLL
    gsap.fromTo(
      ".about-animate",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className="px-6 md:px-20 py-20 bg-white min-h-dvh">
      {/* Tabs */}
      <div className="about-animate flex gap-4 mb-10">
        {["About Us", "Journey", "Vision", "Mission"].map((tab, i) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-1.5 text-sm ${
              i === 0 ? "bg-lime-400 text-black" : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="about-animate">
          <p className="text-sm text-gray-500 mb-3">Who We Are at Farmora</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
            With years of expertise in both farming and tech, we’re committed to
            helping farmers grow smarter.
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            By combining innovation with sustainability, we empower farmers to
            increase productivity and reduce waste.
          </p>

          <button className="rounded-full border px-5 py-2 text-sm">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="about-animate rounded-xl overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Stat image"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>

          <div className="about-animate rounded-xl bg-gray-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">10+</h3>
            <p className="text-sm text-gray-600">
              Years of Agricultural Innovation
            </p>
          </div>

          <div className="about-animate rounded-xl overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Stat image"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>

          <div className="about-animate rounded-xl bg-lime-400 p-6">
            <h3 className="text-2xl font-semibold mb-2">85%</h3>
            <p className="text-sm">Customer Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
