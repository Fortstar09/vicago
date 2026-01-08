"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScrollPin } from "@/hooks/useScrollPin";
import Button from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

// Helper component to split text into spans for per-letter animation (only for footer content)
function SplitText({ children }: { children: React.ReactNode }) {
  const nodes: React.ReactNode[] = [];
  const items = React.Children.toArray(children);

  items.forEach((child, idx) => {
    if (typeof child === "string" || typeof child === "number") {
      const str = String(child);
      str.split("").forEach((char, i) => {
        nodes.push(
          <span key={`char-${idx}-${i}`} className="inline-block opacity-0">
            {char === " " ? "\u00A0" : char}
          </span>
        );
      });
    } else if (
      React.isValidElement(child) &&
      (child as React.ReactElement).type === "br"
    ) {
      nodes.push(<br key={`br-${idx}`} />);
    } else {
      nodes.push(child);
    }
  });

  return <>{nodes}</>;
}

export default function Footer() {
  const footerRef = useScrollPin();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin footer section - locks scroll when it reaches top
      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          pinSpacing: true,
        },
      });

      // Smooth scroll animations
      gsap.fromTo(
        ".footer-animate span",
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.02, // all letters start immediately, tiny delay between letters
          duration: 0.4,
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
        <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-end lg:justify-between text-white">
          <div className="max-w-lg">
            <h2 className="mt-5 hero-text text-3xl md:text-5xl font-light leading-tight footer-animate">
              <SplitText>
                Let’s grow something <br />
                impactful together
              </SplitText>
            </h2>

            <p className="mt-4 text-sm text-white/80 font-light footer-animate">
              <SplitText>
                Whether you’re a farmer, partner, or investor, our team is ready
                to help you build smarter, more sustainable solutions.
              </SplitText>
            </p>
          </div>
          <Button title="Partner with us" animationClass="hero-animate" />
        </div>

        {/* Footer content box */}
        <div className="bg-white footer-box rounded-xl p-6 md:p-12 shadow-2xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-3 footer-animate">
              <h3 className="text-3xl font-bold text-gray-900">
                <SplitText>Vicago</SplitText>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <SplitText>
                  Building a sustainable agricultural future with technology,
                  collaboration, and nature-driven smarter practices.
                </SplitText>
              </p>
            </div>

            {/* Quick Menu */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                <SplitText>Quick Menu</SplitText>
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Home", "About", "Services", "Gallery"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    <SplitText>{item}</SplitText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                <SplitText>Resources</SplitText>
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Insights", "Reports", "News"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    <SplitText>{item}</SplitText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4 footer-animate">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                <SplitText>Social</SplitText>
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Instagram", "X", "TikTok"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    <SplitText>{item}</SplitText>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-gray-200 pt-8 footer-animate flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">
              <SplitText>
                © {new Date().getFullYear()} Vicago. All rights reserved.
              </SplitText>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs text-gray-500">
              {["Term", "Privacy", "Cookie Policy"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <SplitText>{item}</SplitText>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
