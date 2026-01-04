import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import ContactCta from "./components/pages/ContactCta";
import Hero from "./components/pages/Hero";
import Mission from "./components/pages/Mission";
import Partners from "./components/pages/Partners";
import Product from "./components/pages/Product";
import SustainableSection from "./components/pages/SustainableSection";
import Values from "./components/pages/Values";

export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Mission />
      <Values />
      <Product />
      <SustainableSection />
      <ContactCta />
      <Footer />
      {/* <About /> */}
    </main>
  );
}
