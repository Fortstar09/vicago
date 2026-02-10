import React from "react";
import CeoSpeech from "./CeoSpeech";
import Button from "../ui/Button";

const CareersOpenPositions = () => {
  return (
    <section className="min-h-fit bg-white flex flex-col justify-center items-center">
      <div
        id="job-openings"
        className="flex flex-col justify-center items-center gap-10 max-margin py-30"
      >
        <h2 className="text-4xl font-semibold text-vgbrown  text-center">
          Current Open Positions
        </h2>
        <div className="flex flex-col justify-center items-center gap-7 border border-gray-200 p-10 rounded-xl  hover-lift w-full max-w-7xl">
          <div>
            <p className="text-2xl text-gray-700 max-w-2xl text-center">
              No open positions at the moment.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl text-center mt-4">
              Please check back later or drop your resume with us.
            </p>
          </div>
          <Button title="Drop Your Resume" link="www.google.com" />
        </div>
      </div>
      <CeoSpeech />
    </section>
  );
};

export default CareersOpenPositions;
