import Image from "next/image"
import Link from "next/link"
export default function Blog2(){
    return(
        <div className="">
            <div className="flex flex-row max-w-6xl mx-auto ">
            <div className="flex flex-col w-[820px] ">
                <div className="">
                       <Image src="/icons/Blog1.png" alt="Blog1" width={820} height={500} className="m-2 py-4" ></Image>
                       <p className="text-sm text-[#9F9F9F]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <button className=" border-b-2 border-b-black   hover:bg-black hover:text-white  p-2 text-base  text-nowrap   m-6 ">
          <Link href="/blog">
          Read More
          </Link>
        </button>
                </div>
                <div className="">
                       <Image src="/icons/Blog2.png" alt="Blog2" width={820} height={500} className="m-2 py-4" ></Image>
                       <p className="text-sm text-[#9F9F9F]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <button className=" border-b-2 border-b-black   hover:bg-black hover:text-white  p-2 text-base  text-nowrap   m-6  ">
          <Link href="/blog">
          Read More
          </Link>
        </button>
                </div>
                <div className="">
                       <Image src="/icons/Blog3.png" alt="Blog3" width={820} height={500} className="m-2 py-4" ></Image>
                       <p className="text-sm text-[#9F9F9F]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <button className=" max-w-20 border-b-2 border-b-black   hover:bg-black hover:text-white  p-2 text-base  text-nowrap   m-6  ">
          <Link href="/blog">
          Read More
          </Link>
        </button>
                </div>
            </div>
            <div></div>
            </div>
            <div className="h-16 text-xl flex flex-row gap-4 justify-center items-center m-2">
      <button className="h-14 w-14 p-2 
        bg-white text-black 
        border border-gray-300 
        hover:bg-gray-100 
        hover:border-gray-400 
        transition-colors 
        duration-200 
        active:bg-gray-200 
        rounded-md 
        shadow-sm 
        hover:shadow-md">
        1
      </button>
      <button className="h-14 w-14 p-2 
        bg-white text-black 
        border border-gray-300 
        hover:bg-gray-100 
        hover:border-gray-400 
        transition-colors 
        duration-200 
        active:bg-gray-200 
        rounded-md 
        shadow-sm 
        hover:shadow-md">
        2
      </button>
      <button className="h-14 w-14 p-2 
        bg-white text-black 
        border border-gray-300 
        hover:bg-gray-100 
        hover:border-gray-400 
        transition-colors 
        duration-200 
        active:bg-gray-200 
        rounded-md 
        shadow-sm 
        hover:shadow-md">
        3
      </button>
      <button className="h-14 w-24 p-2 
        bg-white text-black 
        border border-gray-300 
        hover:bg-gray-100 
        hover:border-gray-400 
        transition-colors 
        duration-200 
        active:bg-gray-200 
        rounded-md 
        shadow-sm 
        hover:shadow-md">
        Next
      </button>
    </div>
    <div className="bg-[#FAF4F4] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-row max-md:flex-col max-md:items-center max-md:text-center max-md:gap-y-5 justify-between my-4">
      <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
        <h1 className="text-xl sm:text-2xl font-bold py-1">Free Delivery</h1>
        <p className="text-base sm:text-lg text-gray-700">For all orders over $50, consectetur adipiscing elit.</p>
      </div>
      <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
        <h1 className="text-xl sm:text-2xl font-bold py-1">90 Days Return</h1>
        <p className="text-base sm:text-lg text-gray-700">If goods have problems, consectetur adipiscing elit.</p>
      </div>
      <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
        <h1 className="text-xl sm:text-2xl font-bold py-1">Secure Payment</h1>
        <p className="text-base sm:text-lg text-gray-700">100% secure payment, consectetur adipiscing elit.</p>
      </div>
    </div>
        </div>
    )
}