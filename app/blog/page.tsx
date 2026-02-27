import type { Metadata } from "next";
import Hero from "@/components/otherpages/Hero";
import SustainableSection from "@/components/homePage/SustainableSection";
import BlogHero from "@/components/otherpages/BlogHero";
import BlogSection from "@/components/otherpages/BlogSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with insights on agricultural commodity trading, cocoa and wheat market trends, sustainable farming practices, and industry news from Vicago Group.",
  openGraph: {
    title: "Blog | Vicago Group",
    description:
      "Insights on agricultural commodity trading, market trends, and sustainable farming.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/blog",
  },
};

const page = () => {
  return (
    <main>
      <BlogHero />
      <BlogSection />
      <Footer />
    </main>
  );
};

export default page;
