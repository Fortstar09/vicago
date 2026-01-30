import React from "react";
import CircularGallery from "../CircularGallery";
import { ArrowDown } from "lucide-react";

const CareersHero = () => {
  return (
    <section className="min-h-dvh bg-lightGreen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-margin py-30">
        <div className="text-center flex flex-col justify-center items-center w-full gap-8 pt-12">
          <h1 className="text-6xl font-normal text-vgbrown font-semibold max-w-xl">
            Be part of moving the world forward
          </h1>
          <p className="text-base text-gray-500 max-w-xl text-center">
            If you are interested in working with us at Vicago, please check out
            our current job openings below.
          </p>
          <a
            href="#job-openings"
            className="inline-flex justify-center items-center gap-2 animate-bounce text-sm text-gray-400"
          >
            Check openings <ArrowDown size={16} />
          </a>
        </div>

        <div style={{ height: "500px", position: "relative", width: "100%" }}>
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-lightGreen to-transparent"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-lightGreen to-transparent"></div>
          <CircularGallery
            bend={2}
            borderRadius={0.07}
            scrollEase={0.02}
            scrollSpeed={3.4}
          />
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
