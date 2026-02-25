"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import EachProduct from "./EachProduct";
import { products } from "@/data/product-data";

export default function AllProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Heading — strong entrance
      gsap.from(".sustain-heading", {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-heading",
          start: "top 75%",
          end: "bottom 30%",
        },
      });

      // 2️⃣ Paragraph — softer, from right
      gsap.from(".product-text", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-text",
          start: "top 75%",
          end: "bottom 15%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-fit w-full overflow-hidden bg-white text-gray-900"
    >
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-20 max-margin py-30">
        <div className="w-full text-vgbrown gap-6 flex flex-col justify-center items-center text-center max-w-3xl">
          <h2 className=" product-heading max-w-4xl text-5xl md:text-6xl mb-0 font-normal">
            Empowering the Value Chain
          </h2>
          <p className="product-text text-base text-gray-500">
            We simplify global trade by investing in our network of 10,000+
            farmers, ensuring integrity and shared growth from the soil to the
            end consumer.
          </p>
        </div>
        <div className="h-full w-full flex justify-center items-center ">
          <div className="grid lg:grid-cols-2 gap-16">
            {products.map((product) => (
              <EachProduct key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
