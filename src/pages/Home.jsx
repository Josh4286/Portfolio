import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Projects } from "../components/projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
