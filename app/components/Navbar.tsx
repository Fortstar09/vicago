"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
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

    gsap.from(".fade", {
      opacity: 0,
      y: -100,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    });

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
            backgroundColor: "rgba(255,255,255)",
            // backdropFilter: "blur(20px)",
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
  }, []);

  return (
    <header
      ref={navRef}
      className="flex justify-center fixed top-0 z-20 fade w-full"
    >
      <nav className="w-full max-margin py-3 flex items-center justify-between transition-colors ">
        <Image src="/logo.png" alt="logo" width={90} height={18} />

        <div className="hidden md:flex gap-8 text-sm font-medium text-black/80 ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="#">Product</Link>
          <Link href="#">Sustainability</Link>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button className="rounded-full border-2 border-[#517f3e] px-3 py-1 text-base font-medium inline-flex justify-center items-center gap-1.5 text-black/80 ">
            <span className="size-1.5 bg-[#517f3e] block rounded-full"></span>
            contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
