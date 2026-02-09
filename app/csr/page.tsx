import Hero from "@/components/otherpages/Hero";
import SustainableSection from "@/components/homePage/SustainableSection";
import SocialSection from "@/components/otherpages/SocialSection";
import PictureDivider from "@/components/otherpages/PictureDivider";
import Story from "@/components/homePage/Story";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Hero
        title="Stewards of a global value chain"
        subtitle=" Our environmental commitments are built to protect this entire ecosystem, locally and globally."
      />
      {/* <ReusableStats balls={stats} className="relative" /> */}
      <SustainableSection />
      <PictureDivider />
      <SocialSection />
      <Story />
      <Footer />
    </main>
  );
};

export default page;
