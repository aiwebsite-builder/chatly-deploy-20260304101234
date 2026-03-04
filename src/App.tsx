import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
