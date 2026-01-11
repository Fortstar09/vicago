"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollPin } from "@/hooks/useScrollPin";
import Button from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useScrollPin();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide up animation
      gsap.fromTo(
        ".footer-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, [footerRef]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-dvh flex items-center justify-center px-6 md:px-20 pt-20 pb-8"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 mx-auto max-w-[1550px] px-6 xl:px-10 h-full w-full flex flex-col justify-between xl:justify-center xl:gap-30">
        {/* Top text */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-end lg:justify-between text-white footer-animate">
          <div className="max-w-lg">
            <h2 className="mt-5 hero-text text-3xl md:text-5xl font-light leading-tight">
              Let&apos;s grow something <br />
              impactful together
            </h2>

            <p className="mt-4 text-sm text-white/80 font-light">
              Whether you&apos;re a farmer, partner, or investor, our team is
              ready to help you build smarter, more sustainable solutions.
            </p>
          </div>
          <Button title="Partner with us" animationClass="hero-animate" />
        </div>

        {/* Footer content box */}
        <div className="bg-white footer-box rounded-xl p-6 md:p-12 shadow-2xl mb-10 footer-animate">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">Vicago</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building a sustainable agricultural future with technology,
                collaboration, and nature-driven smarter practices.
              </p>
            </div>

            {/* Quick Menu */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Quick Menu
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Home", "About", "Services", "Gallery"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Resources
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Insights", "Reports", "News"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Social
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Instagram", "X", "TikTok"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Vicago. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs text-gray-500">
              {["Term", "Privacy", "Cookie Policy"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
