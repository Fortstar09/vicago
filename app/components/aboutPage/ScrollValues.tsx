"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionData = {
  title: string;
  items: string[];
  bgColor: string;
  from: {
    x: number;
    y: number;
  };
};

const SECTIONS: SectionData[] = [
  {
    title: "Value",
    items: ["Integrity", "Innovation", "Quality"],
    bgColor: "#1f2933",
    from: { x: 0, y: 300 }, // bottom
  },
  {
    title: "Mission",
    items: ["Build", "Scale", "Deliver"],
    bgColor: "#312e81",
    from: { x: -300, y: 0 }, // left
  },
  {
    title: "Purpose",
    items: ["Impact", "Growth", "Meaning"],
    bgColor: "#064e3b",
    from: { x: 300, y: 0 }, // right
  },
];

export default function ScrollValuesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLDivElement>(".panel");

      panels.forEach((panel, index) => {
        const ball = panel.querySelector<HTMLDivElement>(".ball");
        const title = panel.querySelector<HTMLHeadingElement>(".title");
        const content = panel.querySelector<HTMLUListElement>(".content");

        if (!ball || !title || !content) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top -=${index * window.innerHeight}`,
              end: `+=${window.innerHeight}`,
              scrub: true,
            },
          })

          // 1. Ball enters viewport
          .fromTo(
            ball,
            {
              x: ball.dataset.fromX,
              y: ball.dataset.fromY,
              scale: 0.25,
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              ease: "none",
            }
          )

          // 2. Ball expands to fill screen (color takeover)
          .to(ball, {
            scale: 20,
            ease: "none",
          })

          // 3. Title moves into final position
          .to(
            title,
            {
              y: -120,
              ease: "none",
            },
            "<"
          )

          // 4. Content slides up
          .fromTo(
            content,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            "-=0.2"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${SECTIONS.length * 100}vh`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {SECTIONS.map((section, index) => (
        <div
          key={index}
          className="panel"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="ball"
            data-from-x={section.from.x}
            data-from-y={section.from.y}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: section.bgColor,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              overflow: "hidden",
              willChange: "transform",
            }}
          >
            <h2
              className="title"
              style={{
                fontSize: "2.5rem",
                fontWeight: 600,
                margin: 0,
              }}
            >
              {section.title}
            </h2>

            <ul
              className="content"
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: 24,
                opacity: 0,
              }}
            >
              {section.items.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
