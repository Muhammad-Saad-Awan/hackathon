import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });
  
  
 export default function Fourth() {
  return (
    <div className={`${poppins.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-24 text-center items-center w-full `}>
      <div className='p-10'>
        <Image src="/icons/Fourth1.png" alt="Going all-in with millennial design" width={393} height={393}  />
        <h3 className="text-xl max-md:text-lg text-nowrap  my-4 mt-12">Going all-in with millennial design</h3>
        <button className=" border-b-2 border-b-black  hover:bg-blue-600  px-4 py-2 text-2xl  text-nowrap font-semibold ">Read More</button>
        <div className='flex flex-row gap-4 pt-5 justify-center '><p className="text-gray-600 mb-4">5 min</p>
        <p className="text-gray-600">12th Oct 2022</p></div>
        
      </div>
      <div className='p-10'>
        <Image src="/icons/Fourth2.png" alt="Going all-in with millennial design" width={393} height={393}  />
        <h3 className="text-xl max-md:text-lg text-nowrap  my-4 mt-12">Going all-in with millennial design</h3>
        <button className=" border-b-2 border-b-black  hover:bg-blue-600  px-4 py-2 text-2xl  text-nowrap font-semibold ">Read More</button>
        <div className='flex flex-row gap-4 pt-5 justify-center'><p className="text-gray-600 mb-4">5 min</p>
        <p className="text-gray-600">12th Oct 2022</p></div>
        
      </div>
      <div className='p-10'>
        <Image src="/icons/Fourth3.png" alt="Going all-in with millennial design" width={393} height={393} />
        <h3 className="text-xl max-md:text-lg text-nowrap  my-4 mt-12">Going all-in with millennial design</h3>
        <button className=" border-b-2 border-b-black  hover:bg-blue-600  px-4 py-2 text-2xl font-semibold">Read More</button>
        <div className='flex flex-row gap-4 pt-5 justify-center '><p className="text-gray-600 mb-4">5 min</p>
        <p className="text-gray-600">12th Oct 2022</p></div>
      </div>
    </div>
  );
};

 
 