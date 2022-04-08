import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Curtain from "../components/Curtain";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Curtain />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
