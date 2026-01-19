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
    ? "text-gray-500"
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
          <a href="/csr">CSR</a>
          {/* <a href="/carears">Carears</a> */}
          <a href="/blog">Blog</a>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="/contact"
            className="rounded-full border border-gray-400 px-3 py-2 text-sm font-semibold hover:text-white hover:bg-vgbrown hover:border-vgbrown"
          >
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
