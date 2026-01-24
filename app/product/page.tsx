import AllProducts from "@/components/otherpages/AllProducts";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import DupHero from "@/components/otherpages/HeroDup";
import WhyPartner from "@/components/otherpages/WhyPartner";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <>
      <DupHero
        title=" Securing global food futures"
        subtitle="We source and export ethically grown cocoa, wheat, and more, partnering with global brands to build a fairer agro-commodity chain."
      />
      <AllProducts />
      <WhyPartner />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Products;
