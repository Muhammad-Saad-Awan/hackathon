import React from "react";
import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TopPicksForYou: React.FC = () => {
  return (
    <div
      className={`${poppins.className} bg-white py-8  sm:px-8 px-16 w-full    `}
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Top Picks For You</h2>

      <p className="  mb-6 pt-8 text-lg text-center">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-baseline">
        <div className="bg-white  rounded-lg overflow-hidden ">
          <Image
            src="/icons/grid1.png"
            alt="Trenton modular sofa 3"
            width={240}
            height={174}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Trenton modular sofa 3</h3>
            <p className=" ">Rs. 7,194.24</p>
          </div>
        </div>
        <div className="bg-white  rounded-lg overflow-hidden">
          <Image
            src="/icons/grid2.png"
            alt="Granite dining table with dining chair"
            width={240}
            height={174}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">
              Granite dining table with dining chair
            </h3>
            <p className=" ">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="bg-white  rounded-lg overflow-hidden">
          <Image
            src="/icons/grid4.png"
            alt="Outdoor bar table and stool"
            width={240}
            height={174}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Outdoor bar table and stool</h3>
            <p className=" ">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="bg-white  rounded-lg overflow-hidden">
          <Image
            src="/icons/grid3.png"
            alt="Plain console with teak mirror"
            width={240}
            height={174}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">
              Plain console with teak mirror
            </h3>
            <p className="">Rs. 25,000.00</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className=" text-black text-xl border-b-2 border-b-black px-4 py-2 hover:bg-green-600">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopPicksForYou;
