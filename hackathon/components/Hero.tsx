import Image from "next/image"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include weights you need
});
import Link from "next/link"
export default function Hero(){
    return(
       
        <div className={`${poppins.className} bg-[#FBEBB5] w-[1440px] h-auto font-semibold  `}>
  <div className=""> 
    <div className="flex flex-row">
        <div className="pt-[300px] pl-[202px] text-nowrap  ">
            <h1 className="text-6xl p-3  ">Rocket Single </h1>
        <h1 className="text-6xl p-3">Seater</h1>
        <button className="px-3 py-6 border-b-black border-b-2 text-2xl"><Link href="/shop">Shop Now</Link></button></div>
         <div className="  "><Image className="pr-40 " src="/icons/hero1.png" alt="sofa" width={853} height={1000}></Image></div>

    </div>
  </div>
    </div>
    )
}