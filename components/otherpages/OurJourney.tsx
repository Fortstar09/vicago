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
      year: "1980",
      title: "Rooted in the Land",
      description:
        "Our journey began with earth, sweat, and vision. Vicago Group was founded as Vicago Farms when we acquired our first cocoa farm in Nigeria. We didn’t just trade cocoa; we grew it, learning every stage of cultivation, quality, and care from the ground up.",
      achievements: [],
      images: [
        "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
      ],
    },
    {
      year: "2004",
      title: "Stepping into Global Trade",
      description:
        "To bridge the gap between local harvests and global demand, Vicago Nigeria Limited was officially incorporated. This marked our evolution into a premier commodity trading house, bringing corporate structure to our agricultural expertise and exporting premium cocoa beans to the world’s most demanding confectionery leaders.",
      achievements: [],
      images: [
        "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      ],
    },
    {
      year: "2015",
      title: "Growing Together, Growing Stronger",
      description:
        "Through trust and empowerment, our network expanded organically. By 2015, we were partnering with over 10,000 farmers across Nigeria, providing training, fair pricing, and sustainable farming support—proving that growth and community can go hand in hand.",
      achievements: ["10,000+ partnered farmers"],
      images: [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      ],
    },
    {
      year: "2019",
      title: "A Milestone Year",
      description:
        "Our unwavering commitment to reliability built a legacy of meaningful volume. By 2019, Vicago had cumulatively traded over 150,000 metric tons of cocoa, cementing our role as a trusted and enduring link between African farms and international markets.",
      achievements: ["150,000+ metric tons traded"],
      images: [
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800",
      ],
    },
    {
      year: "2025",
      title: "A New Continent, A Broader Vision",
      description:
        "Building on 45 years of agricultural mastery, Vicago expanded to North America with the incorporation of Vicago Canada Inc. This strategic move marked our evolution into a multi-commodity global powerhouse, integrating wheat, Canadian Western Red Spring (CWRS), Canadian Western Amber Durum (CWAD), and soybeans into our portfolio.",
      achievements: ["Expansion to North America", "Multi-commodity trading"],
      images: [
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
      ],
    },
    {
      year: "Today",
      title: "A Global Trading Group with Purpose",
      description:
        "From a single cocoa farm to a multinational commodity trading group, Vicago now operates across Africa and North America. We enable reliable, transparent, and efficient supply chains that connect premium agricultural origins to global manufacturers and processors.",
      achievements: ["Operations across Africa & North America"],
      images: [
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
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
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-vgbrown">
      <div
        ref={containerRef}
        className="relative max-margin text-creamy overflow-hidden"
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
              ref={(el) => {
                bgYearsRef.current[index] = el;
              }}
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
