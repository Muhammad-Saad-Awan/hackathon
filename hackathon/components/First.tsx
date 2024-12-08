import Image from "next/image"
import Link from "next/link"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
})
export default function First(){
    return (
       
        <div className={`${poppins.className}  flex flex-row p-8 pt-12 pl-16   `}>
            <div className="w-[600px] h-[500px] px-28">
                <Image className="" src="/icons/First2.png" alt="sofa" width={853} height={1000}></Image>
                <h1 className="text-4xl pb-6  ">Side Table</h1>
                <button className=" border-b-black border-b-2 text-2xl"><Link href="/shop">View More</Link></button></div>
                 
                <div className="w-[600px] h-[500px] px-28 ">
                <Image className="" src="/icons/First1.png" alt="sofa" width={853} height={1000}></Image>
                <h1 className="text-4xl pb-6 ">Side Table</h1>
                <button className=" border-b-black border-b-2 text-2xl"><Link href="/shop">View More</Link></button></div>
        </div>
    )
}