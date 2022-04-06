import Hero from "../components/Hero";
import Technology from "../components/Technology";
import Footer from "../components/Footer";
import Curtain from "../components/Curtain";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Technology />
      <Curtain />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
