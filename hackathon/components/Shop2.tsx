import Image from "next/image"
import React from "react"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],  
});

export default function ShopFilter() {
  return (
    <div className={`${poppins.className} bg-[#FAF4F4] h-auto py-4 text-black text-nowrap`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-baseline px-4 sm:px-16">
        <div className="col-span-full flex flex-col sm:flex-row justify-between items-start w-full space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7 w-full">
            <div className="flex justify-between w-full sm:w-auto items-center gap-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <Image 
                  src="/icons/shop2filter.png" 
                  alt="Filter icon" 
                  width={25} 
                  height={25} 
                  className="shrink-0"
                />
                <span className="hidden sm:block">Filter</span>
              </div>
              
              <div className="flex items-center gap-4 sm:ml-4">
                <Image 
                  src="/icons/shop2box.png" 
                  alt="Box icon" 
                  width={25} 
                  height={25} 
                  className="cursor-pointer"
                />
                <Image 
                  src="/icons/shop2vector.png" 
                  alt="Vector icon" 
                  width={24} 
                  height={10} 
                  className="cursor-pointer"
                />
              </div>
            </div>
            
            <div className="hidden sm:block pl-5 border-l-2 border-l-black text-sm">
              Showing 1-6 results of 32 results
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <div className="flex items-center justify-between w-full sm:w-auto gap-2">
              <span className="text-sm">Show</span>
              <div className="text-gray-500 bg-white px-2 py-1 rounded text-sm">16</div>
            </div>
            
            <div className="flex items-center justify-between w-full sm:w-auto gap-2 mt-2 sm:mt-0">
              <span className="text-sm">Sort by</span>
              <div className="text-gray-500 bg-white px-2 py-1 rounded text-sm">Default</div>
            </div>
          </div>
        </div>
        
        <div className="col-span-full sm:hidden text-center text-sm mt-4">
          Showing 1-6 results of 32 results
        </div>
      </div>
    </div>
  )
}