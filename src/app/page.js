import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Grid from "./Components/Grid";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Head from "next/head";
import Script from "next/script";
const page = () => {
  return (
    <>
      {/* <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
          crossorigin="anonymous"
        />
      </Head> */}
{/* 
      <Navbar />
      <Hero />
      <Grid />
      <Work />
      <Contact /> */}

    <main className="flex items-center justify-center h-screen bg-black text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          🚧 Coming Soon
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          My portfolio website is under construction.
        </p>
        
      </div>
    </main>

    </>
  );
};

export default page;
