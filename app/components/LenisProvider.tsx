"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisLike = {
  raf: (t: number) => void;
  destroy: () => void;
  scrollTo: (v: number) => void;
  scroll?: { instance?: { scroll?: { y?: number } } } | undefined;
};

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling. Cast to a minimal shape because
    // the package doesn't expose the full internal types we need here.
    const lenis = new Lenis({
      duration: 0.4,
      easing: (t: number) => t,
    }) as unknown as LenisLike;

    // RAF loop to drive Lenis and update ScrollTrigger on each frame
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Integrate Lenis with ScrollTrigger so GSAP reads the smooth-scrolled position
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length) {
          lenis.scrollTo(value as number);
          return;
        }
        return lenis.scroll?.instance?.scroll?.y || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // When using a smooth-scroller like Lenis prefer transform-based pinning
      // to avoid DOM reparenting issues that can surface during client-side
      // navigation in Next.js (insertBefore/removeChild errors).
      pinType: "transform",
    });

    // Keep ScrollTrigger in sync after layout changes
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", refresh);
      cancelAnimationFrame(rafId);
      try {
        lenis.destroy();
      } catch {
        // ignore
      }
      // kill any remaining ScrollTriggers to avoid duplicates
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
