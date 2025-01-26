import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/components/Shop3";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className={` ${poppins.className} flex flex-row-reverse w-full mx-auto ml-10 justify-center mt-28 gap-2 max-md:flex-col`}>
        <ProductCard product={product} />
        <div className="flex gap-2  max-md:flex-col">
      <div className="md:order-2 p-2">
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={1000}
          height={1000}
          className="w-full h-[30rem] bg-[#FFF9E5] rounded-lg"
        />
      </div>
      <div className=" mt-4 flex md:flex-col max-sm:overflow-x-scroll max-sm:py-6 gap-10 md:order-1">
            {[1, 2, 3, 4].map((_, index) => (
              <Image
                key={index}
                src={urlFor(product.image).url()}
                width={100}
                height={100}
                alt={product.name}
                className="w-full h-20  rounded-md cursor-pointer bg-[#FFF9E5]"
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default ProductDetail;
