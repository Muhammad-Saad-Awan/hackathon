import Image from "next/image"
import Link from "next/link"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
});

export default function First() {
    return (
        <div className={`${poppins.className} flex flex-wrap  items-center  justify-center gap-12  py-12 bg-[#FAF4F4]`}>
            {/* First Item */}
            <div className="flex flex-col items-center w-full max-w-sm lg:max-w-md">
                <Image 
                    className="w-full h-auto max-md:pr-20" 
                    src="/icons/First2.png" 
                    alt="Side Table" 
                    width={600} 
                    height={500} 
                />
                <h1 className="text-4xl max-md:text-2xl pb-4 text-center">Side Table</h1>
                <button className="border-b-2 border-black text-2xl max-md:text-lg">
                    <Link href="/shop">View More</Link>
                </button>
            </div>

            {/* Second Item */}
            <div className="flex flex-col items-center w-full max-w-sm lg:max-w-md">
                <Image 
                    className="w-full h-auto max-md:pr-24" 
                    src="/icons/First1.png" 
                    alt="Side Table" 
                    width={600} 
                    height={500} 
                />
                <h1 className="text-4xl max-md:text-2xl pb-4 text-center">Side Table</h1>
                <button className="border-b-2 border-black text-2xl max-md:text-l">
                    <Link href="/shop">View More</Link>
                </button>
            </div>
          
            
        </div>
    )
}
