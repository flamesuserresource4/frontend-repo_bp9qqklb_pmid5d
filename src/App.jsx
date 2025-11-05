import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertyGrid from "./components/PropertyGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <PropertyGrid />
        <Contact />
      </main>
    </div>
  );
}

export default App;
