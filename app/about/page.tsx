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
          title="Quality You Can Trace to the Source"
          subtitle="Whether it's the amber hue of durum wheat or the rich fermentation of Nigerian cocoa, we
know exactly where our products come from, and we ensure our buyers do too."
        />
        <About />
        <Mission />
        <OurJourney />
        <VisionMissionStack />
        <SustainableSection />
        {/* <Team /> */}
      </main>
      <Footer />
    </>
  );
};

export default Aboutpage;
