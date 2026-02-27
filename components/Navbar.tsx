/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "CSR", href: "/csr" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/blog";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

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

  // Hamburger bar color — always dark when menu is open or scrolled,
  // white on homepage hero, dark everywhere else
  const barBg =
    menuOpen || scrolled ? "#1f2937" : isHome ? "#ffffff" : "#1f2937";

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header
        ref={navRef}
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          menuOpen ? "bg-white border-b border-black/10" : bgStyle
        }`}
      >
        <nav
          className={`w-full max-margin py-4 flex items-center justify-between transition-colors duration-300 ${
            menuOpen ? "text-gray-800" : textColor
          }`}
        >
          <a href="/">
            <Image src="/logo.png" alt="logo" width={90} height={18} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-base font-normal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href) ? "text-vgreen font-semibold" : ""
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {/* Desktop Contact Button */}
            <a
              href="/contact"
              className="hidden md:inline-block rounded-full border border-gray-400 px-3 py-2 text-sm font-semibold hover:text-white hover:bg-vgbrown hover:border-vgbrown transform transition-all duration-300"
            >
              Contact us
            </a>

            {/* Mobile Hamburger ↔ X animated icon */}
            <style>{`
              .hamburger-btn {
                position: relative;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: none;
                border: none;
                cursor: pointer;
              }
              @media (min-width: 768px) {
                .hamburger-btn {
                  display: none !important;
                }
              }
            `}</style>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="hamburger-btn"
            >
              <span
                style={{
                  position: "absolute",
                  width: 26,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: barBg,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(45deg) translateY(0px)"
                    : "translateY(-8px)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  width: 26,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: barBg,
                  transition: "all 0.2s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  width: 26,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: barBg,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(0px)"
                    : "translateY(8px)",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile menu ── */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transform transition-all duration-500 ease-in-out overflow-y-auto ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Push content below the header bar */}
        <div style={{ paddingTop: "80px", flexShrink: 0 }} />

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-8 py-4">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 text-2xl font-medium py-4 border-b border-gray-100 hover:text-vgbrown transition-colors duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div style={{ marginTop: "auto", padding: "0 32px 40px 32px" }}>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              borderRadius: "9999px",
              backgroundColor: "#815331",
              padding: "16px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
