"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Leaf, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCta() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".headline", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".value-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-40 px-6 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Image + Overlay */}
        <div className="headline relative h-130 rounded-3xl overflow-hidden">
          <Image
            src="/value-bg.jpg"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-14 text-white">
            {/* Top text */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs backdrop-blur">
                <Leaf size={14} />
                Sustainable Agriculture
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-light leading-tight">
                Let’s grow something <br /> impactful together
              </h2>

              <p className="mt-4 text-sm text-white/80 font-lightgit">
                Whether you’re a farmer, partner, or investor, our team is ready
                to help you build smarter, more sustainable solutions.
              </p>
            </div>

            {/* Bottom cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="value-card rounded-xl bg-white/15 backdrop-blur px-5 py-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <p className="text-sm font-medium">Call Us</p>
                </div>
                <p className="mt-2 text-xs text-white/80">
                  Talk directly to our support team
                </p>
              </div>

              <div className="value-card rounded-xl bg-white/15 backdrop-blur px-5 py-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <p className="text-sm font-medium">Email Support</p>
                </div>
                <p className="mt-2 text-xs text-white/80">
                  Get a response within 24 hours
                </p>
              </div>

              <div className="value-card rounded-xl bg-lime-400 text-black px-5 py-4">
                <p className="text-sm font-semibold">
                  Start a Conversation
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-medium">
                  Contact Us
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
