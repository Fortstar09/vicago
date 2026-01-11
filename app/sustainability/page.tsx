import Image from "next/image";
import Hero from "@/components/aboutPage/Hero";
import SustainableSection from "@/components/homePage/SustainableSection";

const page = () => {
  return (
    <>
      <Hero />
      <div className="w-full relative flex items-center justify-center overflow-hidden h-140">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          width={500}
          height={500}
          className="w-full object-center"
        />
      </div>
      <SustainableSection />
    </>
  );
};

export default page;
