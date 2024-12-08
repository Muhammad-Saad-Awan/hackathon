import Image from "next/image"
import { Poppins } from 'next/font/google';
import Link from "next/link"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include weights you need
});

export default function Hero() {
    return (
        <div className={`${poppins.className} bg-[#FBEBB5] w-[1440] h-auto font-semibold lg:pl-24 max-md:py-10 max-md:justify-center`}>
            <div className="flex max-md:flex-col-reverse items-center ">
                {/* Text Content */}
                <div className="pt-24 pl-24 max-md:pt-8 max-md:pl-0 max-md:text-center max-md:px-4">
                    <h1 className="text-6xl pb-4 text-nowrap max-md:text-4xl">Rocket Single</h1>
                    <h1 className="text-6xl pb-4 max-md:text-4xl">Seater</h1>
                    <div className="flex justify-start max-md:justify-center">
                        <button className="px-4 py-3 border-b-2 border-black text-2xl max-md:text-xl">
                            <Link href="/shop">Shop Now</Link>
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="pr-20 max-md:pr-0 max-md:flex max-md:justify-center">
                    <Image
                        className="lg:pt-7"
                        src="/icons/hero1.png"
                        alt="sofa"
                        width={853}
                        height={1000}
                        style={{
                            width: 'auto',
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
