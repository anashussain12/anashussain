import Image from "next/image";
import React from "react";
import globe from "../images/globe.png";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-16 px-6 md:grid-cols-1 lg:grid-cols-3 md:px-8 lg:px-32 xl:px-32">
        {/* First Column - Hi, I'm Anas Hussain */}
        <div className="text-white border border-[#2B2A29] rounded-xl p-5 lg:col-span-2 xl:col-span-2">
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="https://threejscc-portfolio.vercel.app/assets/grid1.png"
              alt="grid1"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl pb-2">Hi, I’m Anas Hussain</h1>
            <p className="text-[#909196]">
              With 12 years of experience, I have honed my skills in both
              frontend and backend dev, creating dynamic and responsive
              websites.
            </p>
          </div>
        </div>

        {/* Second Column - Tech Stack */}
        <div className="border border-[#2B2A29] rounded-xl p-5">
          <div className="flex justify-center items-center">
            <Image
              src="https://threejscc-portfolio.vercel.app/assets/grid2.png"
              width={300}
              height={300}
              alt="grid2"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl text-center text-white pb-2">
              Tech Stack
            </h1>
            <p className="text-[#909196] text-center">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
        </div>

        {/* Third Column - Flexible with Time Zones */}
        <div className="flex flex-col md:flex-row justify-start items-center border border-[#2B2A29] rounded-xl p-5 lg:col-span-2 xl:col-span-2">
          <Image width={250} height={250} src={globe} alt="globe" />
          <div className="md:pl-5 text-center md:text-left">
            <h1 className="font-bold text-2xl text-white pb-2">
              I’m very flexible with time zone communications & locations
            </h1>
            <p className="text-sm text-[#909196]">
              I'm based in Pakistan, Lahore and open to remote work worldwide.
            </p>
          </div>
        </div>

        {/* Fourth Column - Passion for Coding */}
        <div className="border text-white border-[#2B2A29] rounded-xl p-5">
          <Image
            src="https://threejscc-portfolio.vercel.app/assets/grid3.png"
            width={400}
            height={400}
            alt="grid3"
          />
          <h2 className="font-bold text-xl py-2">My Passion for Coding</h2>
          <p className="text-[#909196]">
            I love solving problems and building things through code.
            Programming isn't just my profession—it's my passion. I enjoy
            exploring new technologies, and enhancing my skills.
          </p>
        </div>

        {/* Fifth Column - Contact Me */}
        <div className="border text-white border-[#2B2A29] rounded-xl p-5 lg:col-span-2 xl:col-span-3">
          <div className="flex justify-center items-center">
            <Image
              width={250}
              height={250}
              src="https://threejscc-portfolio.vercel.app/assets/grid4.png"
              alt="grid4"
            />
          </div>
          <h1 className="text-[#aeafb59e] text-xl text-center">Contact me</h1>
          <p className="text-center text-[#BEC1CF]">hussainanas68@gmail.com</p>
          {/* <p className="text-center text-[#BEC1CF]">hussainanas68@gmail.com</p> */}
        </div>
      </div>
    </>
  );
};

export default Grid;
