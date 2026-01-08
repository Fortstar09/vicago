import Hero from "../components/aboutPage/Hero";
import Image from "next/image";
import About from "../components/aboutPage/About";
import Mission from "../components/homePage/Mission";
import SustainableSection from "../components/homePage/SustainableSection";
import Team from "../components/aboutPage/Team";

const Aboutpage = () => {
  return (
    <main className="relative w-full overflow-y-hidden overflow-x-hidden">
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
      <About />
      <Mission />
      <Team />
      <SustainableSection />
    </main>
  );
};

export default Aboutpage;
