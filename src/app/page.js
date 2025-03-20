import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Head from "next/head";
const page = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar />
      <Hero />
      <Grid />
      <Work />
      <Contact />
    </>
  );
};

export default page;
