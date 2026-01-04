import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Mission from "./components/pages/Mission";
import Values from "./components/pages/Values";

export default function App() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Mission />
      <Values />
      {/* <About /> */}
    </main>
  );
}
