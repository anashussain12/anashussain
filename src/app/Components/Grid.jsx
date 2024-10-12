import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4  lg:px-32 xl:px-32">
        {/* Top row (3 columns) */}
        <div className="text-white border border-[#2B2A29] rounded-xl p-5 ">
          <Image
            width={500}
            height={500}
            src="https://threejscc-portfolio.vercel.app/assets/grid1.png"
          />
          <div className="">
            <h1 className="font-bold text-xl pb-2">Hi, I’m Anas Hussain</h1>
            <p className="text-[#909196]">
              With 12 years of experience, I have honed my skills in both
              frontend and backend dev, creating dynamic and responsive
              websites.
            </p>
          </div>
        </div>
        <div className="border border-[#2B2A29] rounded-xl p-5">
            <Image 
            src="https://threejscc-portfolio.vercel.app/assets/grid2.png"
            width={310}
            height={310}
            />
             <div className="">
            <h1 className="font-bold text-xl text-white pb-2">Tech Stack</h1>
            <p className="text-[#909196]">
            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
            </p>
          </div>
        </div>
        <div className="bg-gray-400 ">

            <Image width={400} height={400}
            src="https://img.lovepik.com/png/20231022/Space-Planet-Cartoon-Star-Globe-detector-starry-sky-earth_303819_wh1200.png"
            />
        </div>

        {/* Bottom row (2 columns spanning the width of the top 3 columns) */}
        <div className="bg-gray-500 h-40 col-span-2">
          Bottom 1 (equivalent to Top 1 and Top 2)
        </div>
        <div className="bg-gray-600 h-40">Bottom 2 (aligned with Top 3)</div>
      </div>
    </>
  );
};

export default Grid;
