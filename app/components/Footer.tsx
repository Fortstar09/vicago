"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 60%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-7xl w-full flex flex-col gap-20">
        {/* Top text */}
        <div className="max-w-lg">
          <div>
            <h2 className="mt-5 text-3xl md:text-5xl font-light leading-tight">
              Let’s grow something <br /> impactful together
            </h2>

            <p className="mt-4 text-sm text-white/80 font-light">
              Whether you’re a farmer, partner, or investor, our team is ready
              to help you build smarter, more sustainable solutions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Brand Section */}
            <div className="md:col-span-1 space-y-3 footer-animate">
              <h3 className="text-3xl font-bold text-gray-900">Vicago</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building a sustainable agricultural future with technology,
                collaboration, and nature-driven smarter practices.
              </p>
            </div>

            {/* Quick Menu */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Quick Menu
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Home
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  About
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Services
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Gallery
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Resources
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Insights
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Reports
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  News
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Social
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  Instagram
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  X
                </li>
                <li className="hover:text-green-600 cursor-pointer transition-colors">
                  TikTok
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-gray-200 pt-8 footer-animate flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} GreenVest. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Term
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
