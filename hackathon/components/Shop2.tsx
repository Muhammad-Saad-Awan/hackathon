import Image from "next/image"
import React from "react"
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],  
});
export default function Shop2(){
    return(
        <div className={`${poppins.className} bg-[#FAF4F4] h-auto py-4 text-black `}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-baseline mx-16">
            <div className="col-span-full flex flex-col sm:flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center gap-4 sm:gap-7">
                <div className="flex items-center gap-3 cursor-pointer">
                  <Image 
                    src="/icons/shop2filter.png" 
                    alt="Filter icon" 
                    width={25} 
                    height={25} 
                    className="shrink-0"
                  />
                  <span className="hidden sm:block">Filter</span>
                </div>
                
                <div className="flex items-center gap-4">
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
                
                <div className="hidden sm:block pl-5 border-l-2 border-l-black text-sm">
                  Showing 1-6 results of 32 results
                </div>
              </div>
              
              <div className="flex flex-row items-center gap-4 sm:gap-8 mt-4 sm:mt-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Show</span>
                  <div className="text-gray-500 bg-white px-2 py-1 rounded text-sm">16</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by</span>
                  <div className="text-gray-500 bg-white px-2 py-1 rounded text-sm">Default</div>
                </div>
              </div>
            </div>
            
            
            <div className="col-span-full sm:hidden text-center text-sm">
              Showing 1-6 results of 32 results
            </div>
          </div>
        </div>
    )
}