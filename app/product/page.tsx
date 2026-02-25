import AllProducts from "@/components/otherpages/AllProducts";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import DupHero from "@/components/otherpages/HeroDup";
import WhyPartner from "@/components/otherpages/WhyPartner";
import Footer from "@/components/Footer";

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
