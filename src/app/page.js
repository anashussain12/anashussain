import React from "react";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Hero from "./components/Hero.js";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
