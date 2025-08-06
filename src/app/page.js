import React from "react";
import TechStack from "./Components/techstack";
import About from "./Components/About"
import Projects from "./Components/Projects";
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
