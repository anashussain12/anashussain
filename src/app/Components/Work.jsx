"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import logo from '../images/aitoolcity.png'
// Data for each work item
const works = [
  {
    id: 1,
    logo: logo,
    title: "Aitoolcity - Discover Best AI Tools That Make Your Work Easy!",
    description:
      "A brief description about the project goes here. It can explain the project's goals, technologies used, and your role in it.",
    image: logo,
    techStack: [
      { icon: <FaReact className="text-blue-500" size={32} /> },
      { icon: <FaNodeJs className="text-green-500" size={32} /> },
      { icon: <SiExpress className="text-gray-500" size={32} /> },
      { icon: <SiMongodb className="text-green-700" size={32} /> },
    ],
  },
  {
    id: 2,
    logo: logo,
    title: "Project two - Discover Best AI Tools That Make Your Work Easy!",
    description:
      "A brief description about the project goes here. It can explain the project's goals, technologies used, and your role in it.",
    image: logo,
    techStack: [
      { icon: <FaReact className="text-blue-500" size={32} /> },
      { icon: <FaNodeJs className="text-green-500" size={32} /> },
      { icon: <SiExpress className="text-gray-500" size={32} /> },
      { icon: <SiMongodb className="text-green-700" size={32} /> },
    ],
  },
  {
    id: 3,
    logo: logo,
    title: "Project three - Discover Best AI Tools That Make Your Work Easy!",
    description:
      "A brief description about the project goes here. It can explain the project's goals, technologies used, and your role in it.",
    image: logo,
    techStack: [
      { icon: <FaReact className="text-blue-500" size={32} /> },
      { icon: <FaNodeJs className="text-green-500" size={32} /> },
      { icon: <SiExpress className="text-gray-500" size={32} /> },
      { icon: <SiMongodb className="text-green-700" size={32} /> },
    ],
  },
];

const WorkSection = () => {
  // State to keep track of current work index
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  // Handler for Next and Back buttons
  const handleNext = () => {
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  // Get the current work
  const currentWork = works[currentWorkIndex];

  return (
    <div>
      <h1 className="capitalize text-[#BEC1CF] px-5 text-3xl md:text-5xl font-semibold md:px-8 lg:px-32 xl:px-32">
        my selected work
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center p-6 md:px-8 lg:px-32 xl:px-32 mb-10">
        {/* Left Side: Logo, Title, Description, Tech Stack */}
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 mb-8 lg:mb-0">
          {/* Logo */}
          <div className="mb-4">
            <Image src={currentWork.logo} width={120} height={120} alt="Company Logo" />
          </div>

          {/* Title and Description */}
          <h1 className="text-2xl font-bold text-white mb-4">{currentWork.title}</h1>
          <p className="text-[#909196] mb-4">{currentWork.description}</p>

          {/* Tech Stack */}
          <div className="flex items-center space-x-4 mb-4">
            {currentWork.techStack.map((tech, index) => (
              <div key={index}>{tech.icon}</div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded"
            >
              &larr; Back
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded"
            >
              Next &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Full Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={currentWork.image}
            width={500}
            height={500}
            alt="Project Preview"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
