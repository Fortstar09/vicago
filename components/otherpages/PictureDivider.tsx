import Image from "next/image";
import React from "react";

const PictureDivider = () => {
  return (
    <section className="relative overflow-hidden h-96 lg:h-100 xl:h-130 w-full flex justify-center items-end">
      <Image
        src="/hero-bg.jpg"
        fill
        alt="divider-bg"
        className="object-cover z-0 w-auto h-auto"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-margin  z-10 h-full">
        <div className="h-full w-full border-l-2 border-white/30 grid grid-cols-3 grid-rows-4 ">
          <div className="col-start-3 row-span-full border-l-2 border-white/30 pointer-events-none" />
          <div className="border-t-2 border-white/30 px-10 md:pt-7 lg:pt-10 xl:pt-15 flex items-start col-span-2 row-start-3 row-end-5 bg-green-950/20 backdrop-blur-xs">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light max-w-xl">
              First Vicago Store in Nigeria (2003).
            </h2>
          </div>
          {/* <p>Natural pantry items</p> */}
        </div>
      </div>
    </section>
  );
};

export default PictureDivider;
