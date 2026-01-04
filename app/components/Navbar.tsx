"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastScroll = 0;

    ScrollTrigger.create({
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
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            color: "#000000",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Back to top → transparent
        if (currentScroll < 50) {
          gsap.to(nav, {
            backgroundColor: "rgba(255,255,255,0)",
            backdropFilter: "blur(0px)",
            color: "#ffffff",
            duration: 0.3,
          });
        }

        lastScroll = currentScroll;
      },
    });
  }, []);

  return (
    <header>
      <nav
        ref={navRef}
        className="fixed top-0 z-20 w-full px-6 md:px-20 py-6 flex items-center justify-between transition-colors"
      >
        <div className="font-semibold text-lg">Vicago</div>

        <div className="hidden md:flex gap-8 text-sm font-light">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Product</Link>
          <Link href="#">Sustainability</Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="rounded-full bg-lime-400 px-3.5 py-1.5 text-xs font-medium text-black inline-flex items-center gap-1.5">
            <span className="size-1.5 bg-black block rounded-full"></span>
            Log in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
