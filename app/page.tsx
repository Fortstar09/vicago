// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/homePage/About";
import Certification from "@/components/homePage/Certifications";
import Hero from "@/components/homePage/Hero";
import Mission from "@/components/homePage/Mission";
import Partners from "@/components/homePage/Partners";
import StackingCardsSection from "@/components/homePage/Products";
import Story from "@/components/homePage/Story";
// import SustainableSection from "@/components/homePage/SustainableSection";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import Values from "@/components/homePage/Values";

export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden overflow-y-hidden ">
      {/* <Navbar /> */}
      <Hero />
      <Partners />
      <About />
      <Mission />
      <Values />
      {/* <Certification /> */}
      <StackingCardsSection />
      <TestimonialCarousel />
      <Story />
      <Footer />
    </main>
  );
}
