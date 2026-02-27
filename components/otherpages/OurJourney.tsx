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
      achievements: [
        "Legacy Launch",
        "Built expertise from soil to harvest",
        "Rooted in practical agricultural knowledge",
      ],
      images: ["/journey/1980.jpg", "/journey/1981.jpg"],
    },
    {
      year: "2004",
      title: "Stepping into Global Trade",
      description:
        "To bridge the gap between local harvests and global demand, Vicago Nigeria Limited was officially incorporated. This marked our evolution into a premier commodity trading house, bringing corporate structure to our agricultural expertise and exporting premium cocoa beans to the world’s most demanding confectionery leaders.",
      achievements: [
        "Formalized Operations",
        "Premium Cocoa Specialists",
        "Quality-First Reputation",
      ],
      images: ["/journey/2004.jpg", "/journey/2005.jpg"],
    },
    {
      year: "2015",
      title: "Growing Together, Growing Stronger",
      description:
        "Through trust and empowerment, our network expanded organically. By 2015, we were partnering with over 10,000 farmers across Nigeria, providing training, fair pricing, and sustainable farming support—proving that growth and community can go hand in hand.",
      achievements: [
        "10,000+ partnered farmers",
        "Farmer Training Programs",
        "Community-Led Growth",
      ],
      images: ["/journey/2015.jpg", "/journey/2016.jpg"],
    },

    //  "",
    {
      year: "2019",
      title: "A Milestone Year",
      description:
        "Our unwavering commitment to reliability built a legacy of meaningful volume. By 2019, Vicago had cumulatively traded over 150,000 metric tons of cocoa, cementing our role as a trusted and enduring link between African farms and international markets.",
      achievements: [
        "150,000+ metric tons traded",
        "Decade-Spanning Reliability",
        "Global Recognition",
      ],
      images: ["/journey/2019.jpg", "/journey/2020.jpg"],
    },
    {
      year: "2025",
      title: "A New Continent, A Broader Vision",
      description:
        "Building on 45 years of agricultural mastery, Vicago expanded to North America with the incorporation of Vicago Canada Inc. This strategic move marked our evolution into a multi-commodity global powerhouse, integrating wheat, Canadian Western Red Spring (CWRS), Canadian Western Amber Durum (CWAD), and soybeans into our portfolio.",
      achievements: [
        "Expansion to North America",
        "Multi-commodity trading",
        "Two-Continent Sourcing Network",
      ],
      images: [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
        "/journey/2025.jpg",
      ],
    },
    {
      year: "Today",
      title: "A Global Trading Group with Purpose",
      description:
        "From a single cocoa farm to a multinational commodity trading group, Vicago now operates across Africa and North America. We enable reliable, transparent, and efficient supply chains that connect premium agricultural origins to global manufacturers and processors.",
      achievements: [
        "Operations across Africa & North America",
        "End-to-End Supply Chain Partner",
        "45+ Years of Agricultural Legacy",
      ],
      images: ["/journey/2026-1.jpg", "/journey/2026-2.jpg"],
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
        <div className="relative z-20 pt-24 md:pt-20 pb-12 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Experience our journey
          </h1>
          <p className="text-base md:text-xl max-w-3xl text-white/90">
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
              className="timeline-section min-h-screen flex items-center justify-center"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
                  <div className=" mb-6 pt-0 md:pt-40 ">
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
