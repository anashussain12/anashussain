"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div>
        <div className="flex justify-center text-white">
          <h1 className="text-2xl md:text-4xl pt-28">Hi, I am Anas 👋🏼</h1>
        </div>
        <h1 className="text-[#BEC1CF] text-3xl lg:text-7xl flex pt-4 justify-center items-center text-center font-bold capitalize ">
          Building products & brands
        </h1>
        <div className="flex justify-center items-center pt-10 px-10">
          <Image
            src="https://imgs.search.brave.com/NXX75pDi_nmRpV2z8xq1g37jRTZOrRGXpiTHmAt8Bzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8xMC8xMi9j/aGFyYWN0ZXJzLTIw/MjkzNzRfNjQwLnBu/Zw"
            width={500}
            height={500}
            className="w-full lg:w-7/12"
            alt="Hero Image"
          />
        </div>

        {/* ✅ Google AdSense Ad Below the Hero Section */}
        <div className="flex justify-center my-10 bg-red-600">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9584165839000205"
            data-ad-slot="7184032042"
            data-ad-format="auto"
          ></ins>
        </div>

        <div className="py-12 flex justify-center items-center">
          <button className="bg-black border border-gray-900 cursor-pointer text-white px-6 py-2 rounded-lg flex justify-center items-center">
            <span className="p-1 bg-green-500 rounded-full mr-2"></span> Let's
            work together
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
