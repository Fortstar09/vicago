import Image from "next/image";
import React from "react";
import BlogCard from "../ui/BlogCard";
import { ArrowDown } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-white text-gray-900">
      <div className=" max-out relative z-10 h-full flex flex-col justify-center gap-20 items-start max-margin py-20">
        <div className="w-full text-black/80 gap-6 flex flex-col justify-center items-start max-w-3xl">
          <h2 className=" sustain-heading max-w-4xl text-5xl md:text-6xl leading-tight mb-0 font-normal">
            People. Planet. Shared Prosperity.
          </h2>
          <p className="sustain-text text-base text-gray-500">
            From the field to the frontlines of trade, these are the people,
            lessons, and ideas shaping how we grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            title="A Year in Cocoa"
            subTitle="Reflections on the Cocoa Industry in 2024"
          />
          <BlogCard
            title="Driving Positive Change"
            subTitle="Highlights of Vicago Group Global Concepts' Rural Impact in 2024"
          />
          <BlogCard
            title="Spotlighting Our Sustainability Champions"
            subTitle=" "
          />
        </div>

        <button className="w-full inline-flex justify-center items-center gap-2 animate-bounce text-sm text-gray-400">
          click to see more <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
