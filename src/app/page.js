import React from "react";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";

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
