"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const avatars = [
  {
    src: "/partners/avatar1.svg",
    size: 24,
  },
  {
    src: "/partners/avatar3.svg",
    size: 32,
  },
  {
    src: "/partners/avatar2.svg",
    size: 24,
  },
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".mission-animate", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-snow py-20 md:py-40 flex justify-center items-center relative z-30"
    >
      <div className="max-margin w-full h-full">
        {/* ── MOBILE / TABLET layout (hidden on lg+) ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Hero image */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden drop-shadow-md">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Mission background"
              fill
              className="object-cover"
              loading="eager"
            />
          </div>

          {/* Stats grid — 2 columns on sm, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Years */}
            <div className="rounded-xl border border-vgreen/30 flex items-center gap-4 px-5 py-4 hover:shadow-lg hover-lift">
              <div className="flex gap-[5px] items-center">
                {avatars.map((n, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-full drop-shadow-[0_8px_3px_rgba(0,0,0,0.1)] ${i === 0 || i === 2 ? "border" : ""}`}
                  >
                    <Image
                      src={n.src}
                      alt="Avatar"
                      width={n.size}
                      height={n.size}
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-sm font-semibold text-vgbrown uppercase">
                45+ Years of Operational History
              </h2>
            </div>

            {/* Countries */}
            <div className="border border-vgreen/30 px-5 py-4 rounded-xl flex items-center justify-between hover-lift">
              <h2 className="text-sm font-semibold text-vgbrown uppercase">
                Available in 2+ countries
              </h2>
              <svg
                width="50"
                height="50"
                viewBox="0 0 207 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_m)">
                  <mask
                    id="mask0_m"
                    maskUnits="userSpaceOnUse"
                    x="69"
                    y="-2"
                    width="157"
                    height="129"
                  >
                    <path
                      d="M225.461 -1.55078H69.248V126.008H225.461V-1.55078Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_m)">
                    <path
                      d="M233.635 -14.3027H61.0859V138.768H233.635V-14.3027Z"
                      fill="#DB1F26"
                    />
                    <path
                      d="M181.561 -2.51953H113.168V126.993H181.561V-2.51953Z"
                      fill="white"
                    />
                    <path
                      d="M226.659 -2.51953H181.463V126.993H226.659V-2.51953Z"
                      fill="#EC2224"
                    />
                    <path
                      d="M113.255 -2.51953H68.0586V126.993H113.255V-2.51953Z"
                      fill="#EC2224"
                    />
                    <path
                      d="M147.355 21.668L141.999 33.9021C141.392 35.2325 140.303 35.1088 139.213 34.3664L135.336 31.9058L138.225 50.7041C138.833 54.138 136.883 54.138 135.92 52.6468L129.151 43.367L128.053 48.079C127.927 48.6976 127.369 49.3482 126.533 49.1926L117.977 46.9909L120.225 57.0004C120.705 59.2263 121.081 60.1486 119.739 60.7366L116.689 62.4905L131.421 77.1483C131.717 77.4336 131.938 77.8185 132.057 78.2558C132.176 78.693 132.188 79.1633 132.092 79.6089L130.802 84.7891C135.878 84.0735 140.417 82.9956 145.492 82.3285C145.941 82.2698 146.69 83.1754 146.687 83.812L146.016 102.794H148.48L148.096 83.8451C148.096 83.2073 148.774 82.2634 149.221 82.3221C154.297 82.9854 158.843 84.0632 163.912 84.7827L162.622 79.6076C162.525 79.1626 162.537 78.6924 162.655 78.2552C162.773 77.8179 162.994 77.4327 163.289 77.147L178.016 62.4905L174.965 60.7353C173.624 60.1473 173.999 59.225 174.48 56.9991L176.728 46.9896L168.171 49.1913C167.338 49.3469 166.778 48.6964 166.652 48.0777L165.553 43.3657L158.784 52.6456C157.821 54.1304 155.868 54.1304 156.478 50.7029L159.373 31.9096L155.497 34.3703C154.408 35.1126 153.318 35.2364 152.711 33.9072"
                      fill="#EC2224"
                    />
                  </g>
                </g>
                <rect
                  x="88"
                  y="3"
                  width="118"
                  height="118"
                  rx="59"
                  stroke="#4A290F"
                  strokeWidth="2"
                />
                <g clipPath="url(#clip1_m_mob)">
                  <path
                    d="M2 61.9984C2 88.1984 18.8 110.398 42 118.598V5.39844C18.8 13.5984 2 35.7984 2 61.9984Z"
                    fill="#009A49"
                  />
                  <path
                    d="M122 61.9984C122 35.7984 105.4 13.5984 82 5.39844V118.598C105.4 110.398 122 88.1984 122 61.9984Z"
                    fill="#009A49"
                  />
                  <path
                    d="M42.002 118.6C48.202 120.8 55.002 122 62.002 122C69.002 122 75.802 120.8 82.002 118.6V5.4C75.802 3.2 69.002 2 62.002 2C55.002 2 48.202 3.2 42.002 5.4V118.6Z"
                    fill="#F9F9F9"
                  />
                </g>
                <rect
                  x="1"
                  y="1"
                  width="122"
                  height="122"
                  rx="61"
                  stroke="#4A290F"
                  strokeWidth="2"
                />
                <defs>
                  <clipPath id="clip0_m_mob">
                    <rect
                      x="87"
                      y="2"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip1_m_mob">
                    <rect
                      x="2"
                      y="2"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Revenue */}
            <div className="border border-vgreen/30 p-6 rounded-xl relative overflow-hidden hover-lift">
              <Image
                src="/moneyIcon.svg"
                alt="trend background"
                width={120}
                height={80}
                className="opacity-5 absolute right-0 bottom-0"
              />
              <div className="flex flex-col justify-between h-full gap-3 z-10">
                <p className="text-sm text-gray-500/80">
                  Financial support to cocoa farmers, enabling productivity,
                  stability, and shared growth
                </p>
                <div>
                  <h2 className="font-semibold text-2xl text-darkbrown/80 mb-2">
                    <span className="text-5xl text-darkbrown">$5M</span>+
                  </h2>
                  <p className="uppercase text-xs text-gray-600">
                    Cash advance provided to farmers
                  </p>
                </div>
              </div>
            </div>

            {/* Farmers */}
            <div className="bg-darkbrown rounded-xl relative p-6 drop-shadow-xl drop-shadow-darkbrown/50 hover-lift">
              <Image
                src="/trend-up.svg"
                alt="trend background"
                width={50}
                height={50}
                className="h-full w-full object-cover opacity-15 absolute -left-10 -bottom-10"
              />
              <div className="flex flex-col justify-between h-full gap-3 z-10">
                <p className="text-sm text-snow/80">
                  A large and growing community of producers that form the
                  backbone of our supply chain.
                </p>
                <div>
                  <h2 className="font-semibold text-xl text-snow/80">
                    <span className="text-5xl text-white">10K</span>
                    <span className="text-3xl">+</span>
                  </h2>
                  <p className="text-sm text-snow/80">Farmers in Network</p>
                  <p className="uppercase text-xs text-snow mt-1">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>

            {/* Metric Tons */}
            <div className="bg-vgreen p-5 rounded-xl drop-shadow-xl drop-shadow-vgreen/50 hover-lift sm:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="font-bold text-3xl text-snow/70">
                    <span className="text-5xl text-snow">150K</span>+
                  </h2>
                  <p className="uppercase text-sm text-creamy">
                    Metric Tons Traded
                  </p>
                </div>
                <p className="text-sm text-creamy max-w-xs">
                  Milestone volume handled in cocoa beans is a testament to
                  market trust and operational capacity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout (lg+) — original bento grid ── */}
        <div className="hidden lg:grid h-150 grid-cols-9 grid-rows-8 gap-5">
          <div className="bg-blue-300 rounded-xl col-span-9 row-span-3 relative drop-shadow-md drop-shadow-darkbrown/50 hover-lift">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Hero background"
              fill
              className="object-cover rounded-xl w-auto h-auto"
              loading="eager"
            />
          </div>

          {/* partners */}
          <div className="rounded-xl col-span-3 row-span-1 border border-vgreen/30 flex justify-between px-10 items-center gap-5 hover:shadow-lg cursor-pointer hover-lift">
            <div className="flex gap-[5px] inline-flex items-center">
              {avatars.map((n, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-full drop-shadow-[0_8px_3px_rgba(0,0,0,0.1)] mission-animate ${i === 0 || i === 2 ? "border " : ""}`}
                >
                  <Image
                    src={n.src}
                    alt="Avatar"
                    width={n.size}
                    height={n.size}
                  />
                </div>
              ))}
            </div>
            <h2 className="text-sm font-semibold text-vgbrown uppercase">
              45+ Years of Operational History
            </h2>
          </div>

          {/* revenue  */}
          <div className=" border border-vgreen/30 p-6 rounded-xl col-span-3 row-span-4 relative overflow-hidden hover-lift">
            <Image
              src="/moneyIcon.svg"
              alt="trend background"
              width={160}
              height={100}
              className="opacity-5 absolute right-0 bottom-0 "
            />
            <div className="flex flex-col items-start justify-between max-w-sm h-full w-full z-10">
              <p className="text-base text-gray-500/80 max-w-90">
                Financial support is provided to cocoa farmers, enabling
                productivity, stability, and shared growth
              </p>
              <div className="flex flex-col justify-center items-start w-full gap-4">
                <h2 className="font-semibold text-3xl text-darkbrown/80">
                  <span className="text-7xl text-darkbrown">$5M</span>+
                </h2>
                <p className="uppercase text-xs text-gray-600">Cash advance</p>
              </div>
            </div>
          </div>

          {/* rating  */}
          <div className="bg-darkbrown rounded-xl col-span-3 row-span-5 relative p-6 drop-shadow-xl drop-shadow-darkbrown/50 hover-lift w-full">
            <Image
              src="/trend-up.svg"
              alt="trend background"
              width={50}
              height={50}
              className="h-full w-full object-cover opacity-15 absolute -left-30 -bottom-10 "
            />
            <div className="flex flex-col items-start justify-between h-full w-full z-10">
              <p className="text-base text-snow/80 max-w-sm ">
                A large and growing community of producers that form the
                backbone of our supply chain.
              </p>
              <div className="flex justify-between items-end w-full">
                <div>
                  <h2 className="font-semibold text-xl text-snow/80">
                    <span className="text-7xl text-white">10K</span>
                    <span className="text-5xl">+</span>
                  </h2>
                  <p className="text-sm text-snow/80">Farmers in Network</p>
                </div>
                <p className=" inline-flex flex-col gap-1 items-start uppercase text-xs text-snow">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="text-[10px]">
                    Trusted by client worldwide
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* cocoa  */}
          <div className="bg-vgreen p-5 rounded-xl col-span-3 row-span-4 drop-shadow-xl drop-shadow-vgreen/50 hover-lift">
            <div className="flex flex-col items-start justify-between max-w-sm h-full w-full z-10">
              <div className="flex flex-col justify-center items-start w-full">
                <h2 className="font-bold text-4xl text-snow/70">
                  <span className="text-6xl text-snow">150K</span>+
                </h2>
                <p className="uppercase text-sm text-creamy">
                  Metric Tons Traded
                </p>
              </div>
              <p className="text-base text-creamy max-w-90">
                Milestone volume handled in cocoa beans is a testament to market
                trust and operational capacity.
              </p>
            </div>
          </div>

          {/* countries  */}
          <div className="border border-vgreen/30 p-3 rounded-xl col-span-3 row-span-1 flex justify-center items-center hover-lift">
            <div className="flex items-center justify-between w-full">
              <h2 className="inline-flex justify-center items-center gap-2 text-base text-gray-600 ">
                <span className="size-1 ml-2 ring-2 ring-green-400/90 bg-green-400 rounded-full drop-shadow-sm drop-shadow-green-400 ">
                  {" "}
                </span>{" "}
                Available in 2+ countries
              </h2>
              <span>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 207 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4100_90)">
                    <mask
                      id="mask0_4100_90"
                      maskUnits="userSpaceOnUse"
                      x="69"
                      y="-2"
                      width="157"
                      height="129"
                    >
                      <path
                        d="M225.461 -1.55078H69.248V126.008H225.461V-1.55078Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_4100_90)">
                      <path
                        d="M233.635 -14.3027H61.0859V138.768H233.635V-14.3027Z"
                        fill="#DB1F26"
                      />
                      <path
                        d="M181.561 -2.51953H113.168V126.993H181.561V-2.51953Z"
                        fill="white"
                      />
                      <path
                        d="M226.659 -2.51953H181.463V126.993H226.659V-2.51953Z"
                        fill="#EC2224"
                      />
                      <path
                        d="M113.255 -2.51953H68.0586V126.993H113.255V-2.51953Z"
                        fill="#EC2224"
                      />
                      <path
                        d="M147.355 21.668L141.999 33.9021C141.392 35.2325 140.303 35.1088 139.213 34.3664L135.336 31.9058L138.225 50.7041C138.833 54.138 136.883 54.138 135.92 52.6468L129.151 43.367L128.053 48.079C127.927 48.6976 127.369 49.3482 126.533 49.1926L117.977 46.9909L120.225 57.0004C120.705 59.2263 121.081 60.1486 119.739 60.7366L116.689 62.4905L131.421 77.1483C131.717 77.4336 131.938 77.8185 132.057 78.2558C132.176 78.693 132.188 79.1633 132.092 79.6089L130.802 84.7891C135.878 84.0735 140.417 82.9956 145.492 82.3285C145.941 82.2698 146.69 83.1754 146.687 83.812L146.016 102.794H148.48L148.096 83.8451C148.096 83.2073 148.774 82.2634 149.221 82.3221C154.297 82.9854 158.843 84.0632 163.912 84.7827L162.622 79.6076C162.525 79.1626 162.537 78.6924 162.655 78.2552C162.773 77.8179 162.994 77.4327 163.289 77.147L178.016 62.4905L174.965 60.7353C173.624 60.1473 173.999 59.225 174.48 56.9991L176.728 46.9896L168.171 49.1913C167.338 49.3469 166.778 48.6964 166.652 48.0777L165.553 43.3657L158.784 52.6456C157.821 54.1304 155.868 54.1304 156.478 50.7029L159.373 31.9096L155.497 34.3703C154.408 35.1126 153.318 35.2364 152.711 33.9072"
                        fill="#EC2224"
                      />
                    </g>
                  </g>
                  <rect
                    x="88"
                    y="3"
                    width="118"
                    height="118"
                    rx="59"
                    stroke="#4A290F"
                    strokeWidth="2"
                  />
                  <g clipPath="url(#clip1_4100_90)">
                    <path
                      d="M2 61.9984C2 88.1984 18.8 110.398 42 118.598V5.39844C18.8 13.5984 2 35.7984 2 61.9984Z"
                      fill="#009A49"
                    />
                    <path
                      d="M122 61.9984C122 35.7984 105.4 13.5984 82 5.39844V118.598C105.4 110.398 122 88.1984 122 61.9984Z"
                      fill="#009A49"
                    />
                    <path
                      d="M42.002 118.6C48.202 120.8 55.002 122 62.002 122C69.002 122 75.802 120.8 82.002 118.6V5.4C75.802 3.2 69.002 2 62.002 2C55.002 2 48.202 3.2 42.002 5.4V118.6Z"
                      fill="#F9F9F9"
                    />
                  </g>
                  <rect
                    x="1"
                    y="1"
                    width="122"
                    height="122"
                    rx="61"
                    stroke="#4A290F"
                    strokeWidth="2"
                  />
                  <defs>
                    <clipPath id="clip0_4100_90">
                      <rect
                        x="87"
                        y="2"
                        width="120"
                        height="120"
                        rx="60"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip1_4100_90">
                      <rect
                        x="2"
                        y="2"
                        width="120"
                        height="120"
                        rx="60"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
