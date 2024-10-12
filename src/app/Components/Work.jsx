import React from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si"; // Additional tech icons
import logo from "../images/aitoolcity.png"; // Example logo
import workImage from "../images/aitoolcity.png"; // Example work image

const WorkSection = () => {
  return (
    <>
    <h1 className="capitalize text-[#BEC1CF] px-5 text-3xl md:text-5xl font-semibold md:px-8 lg:px-32 xl:px-32">my selected work</h1>
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 md:px-8 lg:px-32 xl:px-32">
      {/* Left Side: Logo, Title, Description, Tech Stack */}
      <div className="flex flex-col justify-start items-start w-full lg:w-1/2 mb-8 lg:mb-0">
        {/* Logo */}
        <div className="mb-4">
          <Image src={logo} width={120} height={120} alt="Company Logo" />
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl font-bold text-white mb-4">Aitoolcity - Discover Best AI Tools That Make Your Work Easy!
        </h1>
        <p className="text-[#909196] mb-4">
          A brief description about the project goes here. It can explain the
          project's goals, technologies used, and your role in it.
        </p>

        {/* Tech Stack */}
        <div className="flex items-center space-x-4 mb-4">
          <FaReact className="text-blue-500" size={32} />
          <FaNodeJs className="text-green-500" size={32} />
          <SiExpress className="text-gray-500" size={32} />
          <SiMongodb className="text-green-700" size={32} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
            &larr; Back
          </button>
          <button className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
            Next &rarr;
          </button>
        </div>
      </div>

      {/* Right Side: Full Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src={workImage}
          width={500}
          height={500}
          alt="Project Preview"
          className="rounded-xl"
        />
      </div>
    </div>
    </>
  );
};

export default WorkSection;
