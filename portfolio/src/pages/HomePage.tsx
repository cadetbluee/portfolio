import React from "react";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import About from "../sections/About/About";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import Skills from "../sections/Skills/Skills";
import "./HomePage.css";
const HomePage: React.FC = () => {
  return (
    <main className="container">
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
