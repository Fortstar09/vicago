import Hero from "@/components/otherpages/Hero";
import About from "@/components/otherpages/About";
import Mission from "@/components/homePage/Mission";
import SustainableSection from "@/components/homePage/SustainableSection";
import Team from "@/components/otherpages/Team";
import VisionMissionStack from "@/components/otherpages/ScrollValues";
import OurJourney from "@/components/otherpages/OurJourney";
import DupHero from "@/components/otherpages/HeroDup";
import Footer from "@/components/Footer";

const Aboutpage = () => {
  return (
    <>
      <main className="relative w-full overflow-y-hidden overflow-x-hidden bg-white">
        <DupHero
          title="Bridging Global Markets"
          subtitle=" Cross-border agricultural commodity trading company connecting global supply and demand for premium raw materials across continents."
        />
        <About />
        <Mission />
        <OurJourney />
        <VisionMissionStack />
        <SustainableSection />
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default Aboutpage;
