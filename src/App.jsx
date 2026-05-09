import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar title="MyPortfolio" />
      <Hero
        heading="Hi, I'm a Frontend Developer"
        subtext="I build modern, responsive websites using React and Tailwind."
      />
      <About
        title="About Me"
        description="I am a passionate developer focused on clean design, responsive layouts, and professional UI."
      />
      <Skills />
      <Projects />
      <Contact />
      <Footer text="© 2026 MyPortfolio. All rights reserved." />
    </>
  );
}

export default App;