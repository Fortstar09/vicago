import { HandHelping } from "lucide-react";
import Image from "next/image";
import React from "react";

const SocialSection = () => {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-white text-gray-900">
      <div className=" max-out relative z-10 h-full flex flex-col justify-center gap-20 items-start max-margin py-20">
        <div className="w-full  space-y-4 flex justify-between items-end">
          <h2 className="max-w-md text-vgreen text-3xl md:text-7xl font-light mb-0">
            Social responsibility
          </h2>
          <p className="sustain-text text-lg text-gray-500 max-w-lg">
            Our deepest responsibility is to the communities we operate in,
            making sure the system doesn&apos;t just pass through them, but
            leaves something better behind.
          </p>
        </div>
        <div className="h-full w-full ">
          <SocialEach />
          <SocialEach />
          <SocialEach />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

const SocialEach = () => {
  return (
    <div className="flex justify-between items-center py-6 border-t-2 border-gray-200">
      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-gray-400 font-normal inline-flex items-end gap-2">
          <HandHelping size={20} />
          Values
        </p>
        <h3 className="text-3xl font-semibold text-vgbrown ">
          Community Development
        </h3>
        <p className="text-base font-normal text-gray-600 max-w-lg">
          We invest in local communities by supporting education and
          infrastructure projects. Our goal is to enhance the quality of life
          and economic possibilities for members of our sourcing communities.
        </p>
      </div>
      <div className="relative overflow-hidden h-70 aspect-video ">
        <Image
          src="/hero-bg.jpg"
          alt="image"
          fill
          className="object-cover w-auto h-auto"
        />
      </div>
    </div>
  );
};
