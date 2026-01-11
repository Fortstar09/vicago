"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkedinIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Member = {
  id: number;
  name: string;
  role: string;
  img?: string;
};

const members: Member[] = [
  { id: 1, name: "Ralph Edwards", role: "Founder & CEO", img: "/hero-bg.jpg" },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Founder & CEO",
    img: "/hero-bg.jpg",
  },
  { id: 3, name: "Jane Cooper", role: "Founder & CEO", img: "/hero-bg.jpg" },
];
const boardMembers: Member[] = [
  {
    id: 4,
    name: "Evelyn Harper",
    role: "Top quality accountant",
    img: "/hero-bg.jpg",
  },
  {
    id: 5,
    name: "Sophia Turner",
    role: "Senior Accountant",
    img: "/hero-bg.jpg",
  },
  { id: 6, name: "Marcus Lee", role: "Financial Advisor", img: "/hero-bg.jpg" },
];

const Team: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 35%",
            // toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#f5faf7] py-20">
      <div className="max-margin">
        <div className="w-full mb-15">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-black/80 font-normal font-grotesque leading-tight mb-3">
            Our team
          </h2>
          <p className="text-base text-gray-500 max-w-lg leading-7">
            Our diverse team brings together expertise from various disciplines
            to provide comprehensive and personalized solutions for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <h3 className="text-3xl text-gray-600 col-span-3">
            Founders and partners
          </h3>

          <div className="col-span-8">
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((m) => (
                <article key={m.id} className="team-card bg-transparent w-full">
                  <div className="relative w-full aspect-[4/5] cursor-pointer bg-gray-100 overflow-hidden">
                    <Image
                      src={m.img || "/hero-bg.jpg"}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale hover:grayscale-0"
                    />

                    <div className="absolute bottom-2 right-2 bg-white border p-1 text-xs font-light">
                      <LinkedinIcon color="#6a7282" size={20} fill="#6a7282" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xl font-grotesque text-black/80 ">
                      {m.name}
                    </h4>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <hr className="my-12 border-t border-gray-300" />
          </div>
        </div>

        {/* Another component  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <h3 className="text-3xl text-gray-600 col-span-3">
            Board of Directors
          </h3>

          <div className="col-span-8">
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((m) => (
                <article key={m.id} className="team-card bg-transparent w-full">
                  <div className="relative w-full aspect-[4/5] cursor-pointer bg-gray-100 overflow-hidden">
                    <Image
                      src={m.img || "/hero-bg.jpg"}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover  grayscale hover:grayscale-0"
                    />

                    <div className="absolute bottom-2 right-2 bg-white border p-1 text-xs font-light">
                      <LinkedinIcon color="#6a7282" size={20} fill="#6a7282" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xl font-grotesque text-black/80 ">
                      {m.name}
                    </h4>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
