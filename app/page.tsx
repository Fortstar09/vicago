import Footer from "@/components/Footer";
import About from "@/components/homePage/About";
import Hero from "@/components/homePage/Hero";
import Mission from "@/components/homePage/Mission";
import Partners from "@/components/homePage/Partners";
import StackingCardsSection from "@/components/homePage/Products";
import Story from "@/components/homePage/Story";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import Values from "@/components/homePage/Values";

export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden overflow-y-hidden ">

      <Hero />
      <Partners />
      <About />
      <Mission />
      <Values />
      <StackingCardsSection />
      <TestimonialCarousel />
      <Story />
      <Footer />
    </main>
  );
}
