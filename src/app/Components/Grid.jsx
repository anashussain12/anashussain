import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-6 lg:px-32 xl:px-32">
        {/* Top row (3 columns) */}
        <div className="bg-gray-200 h-40">
            <Image width={100} height={100} src="https://threejscc-portfolio.vercel.app/assets/grid1.png"/>
        </div>
        <div className="bg-gray-300 h-40">Top 2</div>
        <div className="bg-gray-400 h-40">Top 3</div>

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
