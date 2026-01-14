/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/blog";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * COLORS LOGIC
   */
  const textColor = scrolled
    ? "text-black"
    : isHome
    ? "text-white"
    : "text-black";

  const bgStyle = scrolled
    ? "bg-white border-b border-black/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      ref={navRef}
      className={`fixed top-0 z-20 w-full transition-colors duration-300 ${bgStyle} z-40`}
    >
      <nav
        className={`w-full max-margin py-4 flex items-center justify-between transition-colors duration-300 ${textColor}`}
      >
        <a href="/">
          <Image src="/logo.png" alt="logo" width={90} height={18} />
        </a>

        <div className="hidden md:flex gap-8 text-base font-normal">
          <a href="/about">About us</a>
          <a href="/product">Product</a>
          <a href="/sustainability">CSR</a>
          {/* <a href="/carears">Carears</a> */}
          <a href="/blog">Blog</a>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="/contact"
            className="rounded-full border-[1.5px] border-gray-600 px-4 py-1 text-base font-medium inline-flex items-center gap-1.5 hover:bg-gray-600 hover:text-white"
          >
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
