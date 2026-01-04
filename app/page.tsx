import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Mission from "./components/pages/Mission";
import Partners from "./components/pages/Partners";
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
      <SustainableSection />
      {/* <About /> */}
    </main>
  );
}
