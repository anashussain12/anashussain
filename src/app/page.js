import React from "react";
import TechStack from "./components/techstack";
import About from "./components/About"
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const page = () => {
  return (
    <>
    <Hero/>
      <TechStack />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default page;
