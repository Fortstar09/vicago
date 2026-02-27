import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CareersHero from "@/components/otherpages/CareersHero";
import CareersOpenPositions from "@/components/otherpages/CareersOpenPositions";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Vicago Group and be part of a team transforming global agricultural trade. Explore open positions in commodity trading, agriculture, logistics, and more.",
  openGraph: {
    title: "Careers | Vicago Group",
    description:
      "Build your career in agricultural commodity trading. Explore open positions at Vicago Group.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/careers",
  },
};

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
