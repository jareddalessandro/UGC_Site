import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Videography from "./components/Videography";
import Photography from "./components/Photography";
import Services from "./components/Services";
import Rates from "./components/Rates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Videography />
      <Photography />
      <Services />
      <Rates />
      <Contact />
      <Footer />
    </>
  );
}
