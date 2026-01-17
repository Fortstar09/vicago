import Hero from "@/components/otherpages/Hero";
import About from "@/components/otherpages/About";
import Mission from "@/components/homePage/Mission";
import SustainableSection from "@/components/homePage/SustainableSection";
import Team from "@/components/otherpages/Team";
import VisionMissionStack from "@/components/otherpages/ScrollValues";
import OurJourney from "@/components/otherpages/OurJourney";
import DupHero from "@/components/otherpages/HeroDup";

const Aboutpage = () => {
  return (
    <main className="relative w-full overflow-y-hidden overflow-x-hidden bg-white">
      <DupHero
        title=" Discover The Story:
                  Cultivating Innovation In Agriculture."
        subtitle=" Explore our journey in Redefining the future of farming
                technology"
      />
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
