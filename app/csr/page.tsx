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
        title="Advancing Sustainable Trade, Practically"
        subtitle="We focus on real, measurable actions: financing farmers, improving yields, and simplifying
access to markets."
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
