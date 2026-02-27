import type { Metadata } from "next";
import Hero from "@/components/otherpages/Hero";
import About from "@/components/otherpages/About";
import Mission from "@/components/homePage/Mission";
import SustainableSection from "@/components/homePage/SustainableSection";
import Team from "@/components/otherpages/Team";
import VisionMissionStack from "@/components/otherpages/ScrollValues";
import OurJourney from "@/components/otherpages/OurJourney";
import DupHero from "@/components/otherpages/HeroDup";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded to build resilient agricultural value chains, Vicago Group has 45+ years of operational history, partnering with 10,000+ farmers across Nigeria and Canada to deliver premium commodities globally.",
  openGraph: {
    title: "About Us | Vicago Group",
    description:
      "Our story, mission, and vision — 45+ years building agricultural value chains that support food security and global trade.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/about",
  },
};

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
