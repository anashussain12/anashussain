import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Grid />
      <Work />
      <Contact/>
    </>
  );
};

export default page;
