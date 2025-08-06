import React from "react";
import TechStack from "./components/TechStack";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Hero from "./components/Hero";

const page = () => {
  return (
    <>
    <Hero/>
      <TechStack />
      <About/>
      <Projects/>
    </>
  );
};

export default page;
