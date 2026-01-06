"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="w-full bg-[#517f3e] px-6 md:px-20 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 footer-animate">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">Vicago</h3>
            <p className="text-sm text-white/75 max-w-sm">
              Building smart, sustainable agricultural solutions that empower
              farmers, improve productivity, and support a greener future.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Product</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Smart Farming Tools</li>
              <li>Crop Monitoring</li>
              <li>Yield Analytics</li>
              <li>Sustainability Insights</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Company</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Legal</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/15 pt-6 footer-animate">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Farmora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
