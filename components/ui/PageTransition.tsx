"use client";
import { usePathname, useRouter } from "next/navigation";
import Sign from "./Sign";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const signOverlayRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const signRef = useRef<SVGSVGElement | null>(null);
  const isTransitioning = useRef(false);

  const coverPage = (url: string) => {
    const svg = signRef.current;
    const path = svg?.querySelector("path");
    if (!path) return;

    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    })
      .set(signOverlayRef.current, { opacity: 1 }, "-=0.2")
      .set(path, {
        strokeDashoffset: path.getTotalLength(),
        fill: "transparent",
      })
      .to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      })
      .to(path, {
        fill: "#e3e4d8",
        duration: 1,
      })
      .to(signOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
      });
  };

  const revealPage = () => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  useEffect(() => {
    if (!overlayRef.current) return;

    overlayRef.current.innerHTML = "";
    blocksRef.current = [];

    for (let i = 0; i < 20; i++) {
      const block = document.createElement("div");
      block.className = "block";
      overlayRef.current.appendChild(block);
      blocksRef.current.push(block);
    }

    gsap.set(blocksRef.current, { scaleX: 0 });
    revealPage();

    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const url = new URL(target.href).pathname;
        if (url !== pathname) handleRouteChange(url);
      });
    });

    return () => {
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, [pathname, router]);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay">
        <div ref={signOverlayRef} className="sign-overlay">
          <div className="sign-container">
            <Sign ref={signRef} />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default PageTransition;
