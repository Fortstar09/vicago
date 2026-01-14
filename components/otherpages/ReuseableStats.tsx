"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatBall } from "@/types";
import Squares from "../SquareBg";

gsap.registerPlugin(ScrollTrigger);

interface ReusableStatsProps {
  balls: StatBall[];
  className?: string;
}

export default function ReusableStats({
  balls,
  className = "",
}: ReusableStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".stat-ball", {
        scale: 0,
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen w-full ${className} bg-[#f5faf7]`}
    >
      {balls.map((ball) => {
        const bgStyle =
          ball.background.type === "image"
            ? {
                backgroundImage: `url(${ball.background.value})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : ball.background.type === "gradient"
            ? { background: ball.background.value }
            : { backgroundColor: ball.background.value };

        return (
          <div
            key={ball.id}
            className="stat-ball absolute rounded-full overflow-hidden animate-[bounce_5s_infinite]"
            style={{
              width: ball.size,
              height: ball.size,
              ...bgStyle,
              ...ball.position,
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center rounded-full text-center text-white shadow-lg">
              {/* Image overlay */}
              {ball.background.type === "image" && (
                <div className="absolute inset-0 bg-black/10" />
              )}

              {/* Optional blur glass layer */}
              {/* {ball.background.type === "image" && (
                <div className="absolute inset-0 backdrop-blur-sm" />
              )} */}

              <h2 className={`${ball.textClassName} font-semibold`}>
                {ball.title}
              </h2>
              <span
                className={`mt-1 ${ball.subTextClassName} text-baseopacity-80 max-w-[70%]`}
              >
                {ball.subtitle}
              </span>
            </div>
          </div>
        );
      })}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-b from-[#f5faf7] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-[#fff] to-transparent"></div>
      </div>
      {/*  */}
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#dcfce7  "
      />
    </section>
  );
}
