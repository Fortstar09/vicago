import React from "react";
import Hero from "@/components/otherpages/Hero";
import AllProducts from "@/components/otherpages/AllProducts";
import TestimonialCarousel from "@/components/homePage/Testimonial";

const Products = () => {
  return (
    <>
      <Hero
        title=" Securing global food futures"
        subtitle="We source and export ethically grown cocoa, wheat, and more, partnering with global brands to build a fairer agro-commodity chain."
      />
      <AllProducts />
      <TestimonialCarousel />
    </>
  );
};

export default Products;
