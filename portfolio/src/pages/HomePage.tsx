import React from "react";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import "./HomePage.css";
const HomePage: React.FC = () => {
  return (
    <main className="container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;
