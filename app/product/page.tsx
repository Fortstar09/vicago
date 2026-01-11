import React from "react";
import StackingCardsSection from "@/components/homePage/Products";
import Hero from "@/components/aboutPage/Hero";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <Hero />
      <div className="w-full relative flex items-center justify-center overflow-hidden h-140">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          width={500}
          height={500}
          className="w-full object-center"
        />
      </div>
      <div className="h-96 w-full bg-white" />
      <StackingCardsSection />
      <div className="h-96 w-full bg-white" />
    </>
  );
};

export default Products;
