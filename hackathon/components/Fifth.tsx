import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const InstagramSection: React.FC = () => {
  return (
    <section
      className={`${poppins.className} relative w-full h-96 flex items-center justify-center text-black`}
    >
      <Image
        src="/icons/Fifth.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-70"></div>

      {/* Text Content */}
      <div className=" text-center flex flex-col justify-center lg:w-full max-w-sm  lg:text-left max-sm:mr-11  max-sm:justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-3 text-nowrap">
          Our Instagram
        </h1>
        <div className="text-xl text-center m-4 mb-8">
          Follow us on Instagram
        </div>
        <button className="border-2 border-black text-xl px-6 py-2 rounded-full bg-white">
          <Link href="">Follow us</Link>
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
