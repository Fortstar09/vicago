import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <section className="min-h-fit bg-[#f5faf7]">
      <div className="h-110 relative overflow-hidden w-full flex justify-start items-end">
        <Image
          src="/hero-bg.jpg"
          fill
          alt="bg"
          className="object-cover  w-auto h-auto"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/70" />
        <div className="max-margin h-110 w-full flex justify-start items-end">
          <div className="z-30 mb-20">
            <h2 className="text-6xl font-semibold text-[#f5faf7] ">
              The Vicago <br />
              Group Story
            </h2>
          </div>
        </div>
      </div>
      <div className="max-margin py-15 pr-20 flex flex-col justify-start items-end text-emerald-950/80">
        <p className="max-w-xl mb-10">
          With strategic operations in Nigeria and Canada, we serve
          manufacturers and processors across West Africa, Europe, and North
          America. Our mission is to facilitate global trade, enabling food
          producers to source premium ingredients. <br /> <br />
          We combine market knowledge, global logistics, and deep-rooted
          partnerships to create efficient, reliable, and transparent supply
          chains built on integrity.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
