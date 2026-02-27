"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DupHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        ".dhero-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
      );

      // Main image reveal
      gsap.fromTo(
        ".dhero-main-img",
        {
          opacity: 0,
          scale: 1.08,
          clipPath: "inset(10% 10% 10% 10% round 20px)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 20px)",
          duration: 1.4,
          ease: "power3.out",
          delay: 0.25,
        },
      );

      // Floating card
      gsap.fromTo(
        ".dhero-float",
        { opacity: 0, y: 40, x: -20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.7,
        },
      );

      // Accent shapes
      gsap.fromTo(
        ".dhero-accent",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          delay: 0.9,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f9faf7",
      }}
    >
      {/* Subtle dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dotgrid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#445544" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>
      </div>

      {/* Decorative blurred blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(103,149,80,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div className="max-margin" style={{ position: "relative", zIndex: 10 }}>
        {/* Responsive flex container via CSS */}
        <style>{`
          .hero-layout {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            padding-top: 8.5rem;
            padding-bottom: 4rem;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
          }
          @media (min-width: 1024px) {
            .hero-layout {
              flex-direction: row;
              gap: 4rem;
              padding-top: 8.5rem;
              padding-bottom: 4rem;
              align-items: center;
            }
          }
          /* Cocoa card: mobile stays at bottom-left edge */
          .cocoa-card {
            position: absolute;
            bottom: 18%;
            left: 0;
            width: clamp(90px, 28%, 160px);
            aspect-ratio: 3/4;
            border-radius: 14px;
            overflow: hidden;
            border: 3px solid #fff;
            box-shadow: 0 12px 40px rgba(0,0,0,0.15);
            z-index: 5;
          }
          /* Desktop: bottom-left, overlapping the main image */
          @media (min-width: 1024px) {
            .cocoa-card {
              bottom: 60px;
              left: -20px;
              transform: none;
              width: 220px;
              aspect-ratio: 3/4;
              border-radius: 18px;
              border: 4px solid #fff;
            }
          }
          /* Desktop image container needs bottom padding for the hanging card */
          @media (min-width: 1024px) {
            .hero-image-wrap {
              padding-bottom: 80px;
            }
          }
        `}</style>

        <div className="hero-layout">
          {/* ── Left: Text Content ── */}
          <div style={{ flex: "1 1 0%", maxWidth: 560, minWidth: 0 }}>
            <h1
              className="dhero-text font-grotesque"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                color: "#679550",
                lineHeight: 1.12,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>

            {/* Accent bar */}
            <div
              className="dhero-text"
              style={{
                marginTop: 24,
                marginBottom: 20,
                width: 48,
                height: 4,
                borderRadius: 999,
                backgroundColor: "#815331",
              }}
            />

            <p
              className="dhero-text"
              style={{
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                color: "#6B7280",
                lineHeight: 1.75,
                maxWidth: 440,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* ── Right: Image Composition ── */}
          <div
            className="hero-image-wrap"
            style={{
              flex: "1 1 0%",
              position: "relative",
              maxWidth: 600,
              width: "100%",
            }}
          >
            {/* Main large image */}
            <div
              className="dhero-main-img"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/about-hero.jpg"
                alt="Agricultural operations"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
                }}
              />
            </div>

            {/* Floating secondary image card — uses cocoa-card CSS class for responsive positioning */}
            <div className="dhero-float cocoa-card">
              <Image
                src="/images/about-hero-2.jpg"
                alt="Cocoa cultivation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Floating badge — top right (desktop only) */}
            <div
              className="dhero-float hidden sm:flex"
              style={{
                position: "absolute",
                top: -16,
                right: 0,
                padding: "14px 20px",
                borderRadius: 14,
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "rgba(103,149,80,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#679550"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#1a2e1a" }}
                >
                  Verified
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                  Premium Quality
                </div>
              </div>
            </div>

            {/* Decorative accent dots — desktop only */}
            <div
              className="dhero-accent hidden sm:grid"
              style={{
                position: "absolute",
                top: "50%",
                right: -28,
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 6,
              }}
            >
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: i % 3 === 0 ? "#C4A265" : "#ddd",
                  }}
                />
              ))}
            </div>

            {/* Corner ring accent — desktop only */}
            <div
              className="dhero-accent hidden sm:block"
              style={{
                position: "absolute",
                bottom: 40,
                right: -16,
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "3px solid rgba(196,162,101,0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
