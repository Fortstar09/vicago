"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  achievements: string[];
  images?: string[];
}

const OurJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgYearsRef = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = [
    {
      year: "2017",
      title: "A Bold Start Against the Odds",
      description:
        'When our founder sought funding to scale, he was denied a loan despite having assets. The reason? "No experience." But that setback became a setup. That same year, we secured our first client, Touton, and exported our very first shipment of cocoa. We started with just 200 metric tonnes, and a relentless belief in possibility.',
      achievements: [],
      images: [
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800",
      ],
    },
    {
      year: "2020",
      title: "Building Momentum",
      description:
        "We expanded our operations and strengthened our relationships with farming communities.",
      achievements: [
        "Established partnerships with 50+ farming cooperatives",
        "Increased export capacity to 5,000 metric tonnes",
        "Implemented sustainable farming training programs",
        "Launched our first quality certification initiative",
      ],
      images: [
        "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
      ],
    },
    {
      year: "2024",
      title: "Planting Strong Roots",
      description:
        "We opened our corporate office in Nigeria, marking a new phase of growth and operational excellence. By this year, we had:",
      achievements: [
        "Created over 30,000 direct and indirect jobs",
        "Provided 20,000 people with access to clean water",
        "Enabled ₦5 billion in increased household income for farming households and value chain partners",
      ],
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      ],
    },
    {
      year: "2025",
      title: "A Year of Impact and Expansion",
      achievements: [
        "Joined the International Cocoa Initiative (ICI), becoming the first Nigerian company to do so, deepening our commitment to child protection and ethical labour practices.",
        "Expanded into Dubai and Cameroon, solidifying our reach across the Middle East and Francophone Africa.",
        "We proudly earned our ISO 9001, 45001 & 14001 certification, affirming our commitment to global quality standards.",
        'Rated "A" by DataPro, affirming our financial credibility and risk management excellence.',
        "Hit 200,000 metric tonnes of cocoa exports; a dramatic leap from our 200-tonne start in 2017.",
      ],
      images: [
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".timeline-section") as HTMLElement[];

      sections.forEach((section, i) => {
        const bgYear = bgYearsRef.current[i];

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            // Fade in current year background
            gsap.to(bgYear, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });

            // Fade out other years
            bgYearsRef.current.forEach((el, idx) => {
              if (idx !== i && el) {
                gsap.to(el, {
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          },
          onEnterBack: () => {
            // Same logic when scrolling back up
            gsap.to(bgYear, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });

            bgYearsRef.current.forEach((el, idx) => {
              if (idx !== i && el) {
                gsap.to(el, {
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                });
              }
            });
          },
        });

        // Animate content on scroll
        gsap.fromTo(
          section.querySelector(".timeline-content"),
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0a4a44]">
      <div
        ref={containerRef}
        className="relative max-margin text-white overflow-hidden"
      >
        {/* Header Section */}
        <div className="relative z-20 pt-20 pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Experience our journey
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Since 2017, sustainability has been at the heart of everything we
            do; for people, for the planet, and for a shared prosperity that
            leaves no one behind.
          </p>
        </div>

        {/* Background Years */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {timelineData.map((item, index) => (
            <div
              key={`bg-${item.year}`}
              ref={(el) => (bgYearsRef.current[index] = el)}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <div className="text-[20vw] md:text-[25vw] font-bold text-white/5 select-none">
                {item.year}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Sections */}
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className="timeline-section min-h-screen flex items-center justify-center px-6"
            >
              <div className="timeline-content w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start border-t border-white/30 ">
                {/* Left Column - Year and Title */}
                <div className="space-y-4">
                  <div className="pt-10">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                      {item.year}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  {item.description && (
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Images */}
                  {item.images && item.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {item.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="aspect-[4/3] h-40 xl:h-50 overflow-hidden rounded-lg"
                        >
                          <img
                            src={image}
                            alt={`${item.year} milestone ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Achievements */}
                {item.achievements.length > 0 && (
                  <div className="pt-10">
                    <ul className="space-y-4">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-white/70 mt-1.5">•</span>
                          <span className="text-base md:text-lg text-white/90 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-32"></div>
      </div>
    </section>
  );
};

export default OurJourney;
