import Image from "next/image";
import React from "react";

const CeoSpeech = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-margin py-30">
      <h2 className="text-4xl font-normal leading-relaxed text-vgreen mb-10 text-center max-w-6xl">
        &quot; At Vicago, Our mission is to revolutionize the way people and
        goods move around the world by leveraging cutting-edge technology and a
        commitment to environmental responsibility. &quot;
      </h2>
      <Image
        src="/hero-bg.jpg"
        width={200}
        height={200}
        alt="CEO Speech Background"
        className="size-20 object-cover rounded-full"
      />
      <p className="text-lg text-gray-700 font-semibold leading-7 mt-2">
        Samson Jackson
      </p>
      <p className="text-sm text-gray-600 text-center mt-1">CEO, Vicago</p>
    </div>
  );
};

export default CeoSpeech;
