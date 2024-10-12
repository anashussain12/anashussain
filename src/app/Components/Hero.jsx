import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center text-white">
          <h1 className="text-2xl md:text-4xl pt-28">Hi, I am Anas 👋🏼</h1>
        </div>
        <h1 className="text-[#BEC1CF] text-3xl lg:text-7xl flex pt-4 justify-center items-center text-center font-bold capitalize ">
          Building products & brands
        </h1>
        <div className="flex justify-center items-center pt-10 px-10 ">
          <Image
            src="https://imgs.search.brave.com/NXX75pDi_nmRpV2z8xq1g37jRTZOrRGXpiTHmAt8Bzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8xMC8xMi9j/aGFyYWN0ZXJzLTIw/MjkzNzRfNjQwLnBu/Zw"
            width={500} // Set your desired width
            height={500} // Set your desired height
            className="w-full h-72 md:w-10/12 md:h-auto  lg:w-6/12 "
          />
        </div>
        <div className="py-10 flex justify-center items-center">
          <button className="bg-black border border-gray-900 cursor-pointer text-white px-6 py-2 rounded-lg flex justify-center items-center">
            <div className="p-1 bg-green-600 rounded-full w-2 h-2  "></div>
            <button className="px-1">Let's work together</button>
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
