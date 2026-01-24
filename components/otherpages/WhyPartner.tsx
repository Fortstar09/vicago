import Image from "next/image";
import React from "react";

const WhyPartner = () => {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-lightGreen text-gray-900">
      <div className="relative z-10 h-full flex flex-col justify-center gap-20 items-start max-margin py-20">
        <div className="w-full text-black/80 gap-6 flex flex-col justify-center items-start max-w-3xl">
          <h2 className=" sustain-heading max-w-4xl text-5xl md:text-6xl mb-0 font-normal">
            Why partner with us
          </h2>
          <p className="sustain-text text-base text-gray-500">
            We hold ourselves to the highest global standards, in how we source,
            trade and show-up, because it’s the only way the chain holds.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4  w-full">
          <Image
            src="/hero-bg.jpg"
            alt="Crops"
            width={400}
            height={400}
            className="rounded-xl object-cover col-span-1 w-full h-full"
          />
          <div className="col-span-2 grid grid-rows-4 gap-3">
            <div className="rounded-xl bg-vgreen  col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-creamy max-w-lg">
                Our global reach
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                We supply top-tier buyers across Europe, Asia, and the Middle
                East, and we&apos;re built to scale with you.
              </p>
            </div>
            <div className="rounded-xl bg-vgbrown col-span-1 p-4 flex flex-col gap-3 hover-lift ">
              <h2 className="sustain-stat-desc text-2xl font-normal text-snow max-w-lg">
                Certified, high-quality commodities
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                Every product we move meets premium export standards, with full
                traceability and global certifications.
              </p>
            </div>
            <div className="rounded-xl bg-vgreen col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-creamy max-w-lg">
                Ethical, farmer-centered sourcing
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                We work directly with local agents and farming communities,
                supporting sustainable practices and livelihoods.
              </p>
            </div>
            <div className="rounded-xl bg-vgbrown  col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-snow max-w-lg">
                End-to-end logistics
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                From warehousing in Nigeria to shipping across continents, we
                manage the full chain so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
