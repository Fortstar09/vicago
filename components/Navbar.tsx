/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastScroll = 0;
    // Use gsap.context so created animations/ScrollTriggers are tracked
    // and can be reverted cleanly on unmount. Also keep a reference to the
    // ScrollTrigger instance so we can kill it explicitly if needed.
    let st: ScrollTrigger | undefined;
    const ctx = gsap.context(() => {
      gsap.from(".fade", {
        opacity: 0,
        y: -100,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll();

          // Scroll down → hide navbar
          if (currentScroll > lastScroll && currentScroll > 100) {
            gsap.to(nav, {
              y: "-100%",
              duration: 0.3,
              ease: "power2.out",
            });
          }

          // Scroll up → show navbar + blur background
          if (currentScroll < lastScroll) {
            gsap.to(nav, {
              y: "0%",
              backgroundColor: "rgba(255,255,255)",
              color: "#000000",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out",
            });
          }

          // Back to top → transparent
          if (currentScroll < 50) {
            gsap.to(nav, {
              backgroundColor: "rgba(255,255,255,0)",
              backdropFilter: "blur(0px)",
              borderBottom: "1px solid rgba(0,0,0,0)",
              color: "#ffffff",
              duration: 0.3,
            });
          }

          lastScroll = currentScroll;
        },
      });
    }, nav);

    return () => {
      ctx.revert();
      try {
        st?.kill();
      } catch {}
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="flex justify-center fixed top-0 z-20 fade w-full"
    >
      <nav className="w-full max-margin py-3 flex items-center justify-between transition-colors ">
        <Image src="/logo.png" alt="logo" width={90} height={18} />

        <div className="hidden md:flex gap-8 text-sm font-medium text-black/80 ">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/product">Product</a>
          <a href="/sustainability">Sustainability</a>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button className="rounded-full border border-[#517f3e] px-4 py-0.5 text-base font-medium inline-flex justify-center items-center gap-1.5 text-black/80 ">
            <span className="size-1.5 bg-[#517f3e] block rounded-full"></span>
            contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
