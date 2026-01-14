import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <section className="min-h-screen bg-[#f5faf7]">
      <div className="h-110 relative overflow-hidden w-full flex justify-start items-end max-margin">
        <Image src="/hero-bg.jpg" fill alt="bg" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/70" />
        <div className="z-30 mb-20">
          <h2 className="text-6xl font-semibold text-[#f5faf7] ">
            The Vicago <br />
            Group Story
          </h2>
        </div>
      </div>
      <div className="max-margin py-15 pr-20 flex flex-col justify-start items-end text-emerald-950/80">
        <p className="max-w-xl">
          Founded in Nigeria in 2017, Vicago began with a clear vision to
          advance global food security by sourcing and exporting
          agro-commodities in a way that empower origin producers. What started
          as a bold idea has grown into a global enterprise. Today, Vicago
          operates across key international markets, with footprints in South
          Africa, Cameroon, Dubai, the United Kingdom, and the Netherlands;
          proudly rooted in Africa, and purposefully connected to the world.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
