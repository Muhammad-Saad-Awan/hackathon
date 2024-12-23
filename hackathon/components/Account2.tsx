import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });
export default function Account2(){

    return(
        <div className={poppins.className}>
             <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-5 px-4 sm:px-8 md:px-24 my-8">
  {/* Log In Section */}
  <div className="container p-6 md:p-10">
    <h1 className="font-semibold text-2xl md:text-4xl py-4">Log In</h1>
    <div className="py-2 text-sm md:text-base">Username or email address</div>
    <input 
      type="text" 
      className="border-2 h-12 md:h-16 w-full max-w-sm md:max-w-md rounded-lg py-2"
    />
    <div className="py-2 text-sm md:text-base">Password</div>
    <input 
      type="text" 
      className="border-2 h-12 md:h-16 w-full max-w-sm md:max-w-md rounded-lg py-2"
    />
    <div className="flex items-center py-4 gap-2">
      <input type="checkbox" className=""/>
      <div className="text-sm md:text-base">Remember me</div>
    </div>
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 gap-4">
      <button className="px-4 py-2 w-32 md:w-40 border-2 border-black rounded-lg text-base md:text-xl">Log In</button>
      <button className="text-sm md:text-base text-blue-600 hover:underline">Lost your password?</button>
    </div>
  </div>

  {/* Register Section */}
  <div className="container p-6 md:p-10">
    <h1 className="font-semibold text-2xl md:text-4xl py-4">Register</h1>
    <div className="py-2 text-sm md:text-base">Email</div>
    <input 
      type="text" 
      className="border-2 h-12 md:h-16 w-full max-w-sm md:max-w-md rounded-lg"
    />
    <div className="py-4 text-sm md:text-base">
      A link to set a new password will be sent to your email address.
    </div>
    <div className="w-full max-w-sm md:max-w-md">
      <p className="py-2 text-sm md:text-base text-gray-700">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy</span>.
      </p>
    </div>
    <button className="px-4 py-2 my-8 w-32 md:w-40 border-2 border-black rounded-lg text-base md:text-xl">Register</button>
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