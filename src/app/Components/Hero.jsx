"use client";
import Image from "next/image";
import Link from "next/link";
import Techstack from "./Techstack.jsx";

const Hero = () => {
  return (
    <>
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2 animate-slide-in-left opacity-0 animate-fade-in delay-200">
        <h1 className="text-4xl text-center sm:text-6xl md:text-left font-bold leading-tight mb-6">
          Build Modern Web Experiences with Confidence
        </h1>
        <p className=" text-center md:text-left text-2xl text-gray-600 mb-8">
          I specialize in crafting responsive, high-performance websites using
          modern tools like Next.js, React, and Tailwind CSS.
        </p>
        <Link
          href="/contact"
          className="flex text-center justify-center items-center  bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Let’s Work Together
        </Link>
      </div>

      {/* Image or Illustration */}
      <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right opacity-0 animate-fade-in delay-500">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
    <Techstack/>
    
    </>
  );
};

export default Hero;
