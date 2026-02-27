import type { Metadata } from "next";
import AllProducts from "@/components/otherpages/AllProducts";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import DupHero from "@/components/otherpages/HeroDup";
import WhyPartner from "@/components/otherpages/WhyPartner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Vicago Group's premium agricultural commodities: high-quality Nigerian cocoa beans, Canadian durum wheat, and soybeans — sourced directly from farms and traded globally.",
  openGraph: {
    title: "Our Products | Vicago Group",
    description:
      "Premium Nigerian cocoa, Canadian wheat, and soybeans — sourced from farm to global buyer.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/product",
  },
};

const Products = () => {
  return (
    <>
      <DupHero
        title="From Source to Market, Done Right"
        subtitle="We manage agricultural commodities end-to-end, ensuring quality, consistency, and
accountability from farm gate to final buyer."
      />
      <AllProducts />
      <WhyPartner />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Products;
