import Hero from "@/components/aboutPage/Hero";
import About from "@/components/aboutPage/About";
import Mission from "@/components/homePage/Mission";
import SustainableSection from "@/components/homePage/SustainableSection";
import Team from "@/components/aboutPage/Team";
import VisionMissionStack from "@/components/aboutPage/ScrollValues";
import OurJourney from "@/components/aboutPage/OurJourney";

const Aboutpage = () => {
  return (
    <main className="relative w-full overflow-y-hidden overflow-x-hidden bg-white">
      <Hero />
      <About />
      <OurJourney />
      <Mission />
      <VisionMissionStack />
      <SustainableSection />
      <Team />
    </main>
  );
};

export default Aboutpage;
