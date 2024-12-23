import Image from "next/image"
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });
export default function Contact2(){
    return(
        <div className={` ${poppins.className}   mx-auto mt-20`}>
             <div className="flex flex-col p-4 lg:mx-24 ">
  <div className="text-center">
    <h1 className="text-2xl md:text-3xl font-semibold p-2">Get In Touch With Us</h1>
    <p className="text-sm md:text-base text-[#9F9F9F] p-2">
      For More Information About Our Product & Services. Please Feel Free To Drop Us
      <br className="hidden md:block" /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>

  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-8 lg:mt-16 mx-4 lg:mx-12">
    <div className="flex flex-col gap-y-8">
      <div className="flex items-start gap-4">
        <Image src="/icons/location.png" alt="location" width={22} height={22} />
        <div>
          <h1 className="text-lg md:text-2xl font-medium">Address</h1>
          <p className="text-sm md:text-base">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Image src="/icons/phone.png" alt="phone" width={30} height={22} />
        <div>
          <h1 className="text-lg md:text-2xl font-medium">Phone</h1>
          <p className="text-sm md:text-base">Mobile: +(84) 546-6789</p>
          <p className="text-sm md:text-base">Hotline: +(84) 456-6789</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Image src="/icons/clock.png" alt="clock" width={23} height={23} />
        <div>
          <h1 className="text-lg md:text-2xl font-medium">Working Time</h1>
          <p className="text-sm md:text-base">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
      <div>
        <label className="block py-2 text-sm md:text-base font-medium">Your Name</label>
        <input
          type="text"
          placeholder="ABC"
          className="w-full border-2 h-12 md:h-16 rounded-lg px-4"
        />
      </div>
      <div>
        <label className="block py-2 text-sm md:text-base font-medium">Email address</label>
        <input
          type="email"
          placeholder="ABC@gmail.com"
          className="w-full border-2 h-12 md:h-16 rounded-lg px-4"
        />
      </div>
      <div>
        <label className="block py-2 text-sm md:text-base font-medium">Subject</label>
        <input
          type="text"
          placeholder="This is optional"
          className="w-full border-2 h-12 md:h-16 rounded-lg px-4"
        />
      </div>
      <div>
        <label className="block py-2 text-sm md:text-base font-medium">Message</label>
        <textarea
          placeholder="Hi, I would like to ask..."
          className="w-full border-2 h-24 md:h-32 rounded-lg px-4 py-2"
        />
      </div>
      <button className="self-start py-2 px-6 text-sm md:text-base lg:text-lg border border-black rounded-xl hover:bg-black hover:text-white">
        Submit
      </button>
    </div>
  </div>
</div>


            <div className="bg-[#FAF4F4] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-row max-md:flex-col max-md:items-center max-md:text-center max-md:gap-y-5 justify-between my-4  text-black ">
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