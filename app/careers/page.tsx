import Footer from "@/components/Footer";
import CareersHero from "@/components/otherpages/CareersHero";
import CareersOpenPositions from "@/components/otherpages/CareersOpenPositions";

const page = () => {
  return (
    <main>
      <CareersHero />
      <CareersOpenPositions />
      <Footer />
    </main>
  );
};

export default page;
