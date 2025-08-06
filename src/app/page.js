import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
