"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "./ui/Button";
import { LinkedinIcon, LucideInstagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OfficeData = [
  {
    location: "Nigeria Head Office",
    address: "333 Broad Street <br/> Odode-Idanre, Ondo State",
  },
  {
    location: "Canada Office",
    address: "556 Marlee Avenue <br/> Toronto, M6B 0B1",
  },
];

const FooterLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "CSR",
    link: "/csr",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Careers",
    link: "/careers",
  },
];

const SocialData = [
  {
    name: "Instagram",
    icons: LucideInstagram,

    link: "https://www.instagram.com/vicagogroup?igsh=ZGV2OXdxMWc3cnExIG",
  },
  {
    name: "LinkedIn",
    icons: LinkedinIcon,
    link: "https://www.linkedin.com/company/vicago-group/about/?viewAsMember=true",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

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
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, [footerRef]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-dvh flex items-center justify-center pt-20 pb-8"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover  w-auto h-auto"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-margin h-full w-full flex flex-col justify-between gap-10 xl:justify-center xl:gap-30">
        {/* Top text */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-start lg:items-end lg:justify-between gap-6 text-white footer-animate">
          <div className="max-w-xl space-y-6">
            <h2 className="mt-5 hero-text text-5xl md:text-5xl font-light leading-tight">
              Let&apos;s grow something <br />
              impactful together
            </h2>

            <p className="text-base text-white/80 font-light">
              Whether you&apos;re a farmer, partner, or investor, our team is
              ready to help you build smarter, more sustainable solutions.
            </p>
          </div>
          <Button
            title="Partner with us"
            animationClass="hero-animate"
            link="/contact"
          />
        </div>

        {/* Footer content box */}
        <div className="bg-white footer-box rounded-xl p-4 md:p-6 xl:p-12 shadow-2xl mb-10 footer-animate">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-3xl font-bold text-gray-900">Vicago</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                Cross-border agricultural commodity trading company specializing
                in premium cocoa beans and wheat, connecting global markets with
                quality raw materials since 2004.
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Reach out
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {["info@vicagogroup.com"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Menu */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Quick Menu
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {FooterLinks.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    <a href={item.link} rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Our Offices
              </p>
              <ul className="space-y-3 text-sm ">
                {OfficeData.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-800 cursor-pointer transition-colors leading-6"
                  >
                    {item.location} <br />
                    <span className="text-gray-400 text-xs leading-1 ">
                      {item.address.split("<br/>").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            {/* <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                policies
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "ESG Policy",
                  "Human rights policy",
                  "DEI policy",
                  "IMS Policy",
                  "Legal policies",
                  "Privacy Policy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Social */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Connect with us
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {SocialData.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-green-600 cursor-pointer transition-colors"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-start items-start"
                    >
                      <span className="mr-2">
                        <item.icons className="size-4" />
                      </span>{" "}
                      {item.name}
                    </a>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
