import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/homePage/About";
import Hero from "./components/homePage/Hero";
import Mission from "./components/homePage/Mission";
import Partners from "./components/homePage/Partners";
import StackingCardsSection from "./components/homePage/Products";
import Story from "./components/homePage/Story";
import SustainableSection from "./components/homePage/SustainableSection";
import TestimonialCarousel from "./components/homePage/Testimonial";
import Values from "./components/homePage/Values";

export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden overflow-y-hidden ">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Mission />
      <Values />
      <Story />
      <StackingCardsSection />
      <TestimonialCarousel />
      <SustainableSection />
      {/* <ContactCta /> */}
      <Footer />
      {/* <About /> */}
    </main>
  );
}
