import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Third() {
  return (
    <div className={`${poppins.className} bg-[#FFF9E5] py-10 px-5 w-full `}>
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-32">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="w-full max-w-md lg:max-w-lg"
            src="/icons/Third.png"
            alt="Asgaard Sofa"
            width={983}
            height={799}
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-full max-w-sm  lg:text-left max-sm:mr-11  max-sm:justify-center">
          <div className="text-2xl  mb-2">New Arrivals</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Asgaard Sofa</h1>
          <button className="border-2 border-black text-xl px-6 py-2">
            <Link href="">Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
