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
    <div
      className={`${poppins.className} w-full max-w-6xl mx-auto px-4 py-8 grid gap-10 lg:grid-cols-2`}
    >
      {/* Main Image and Thumbnails */}
      <div className="flex flex-col items-center lg:items-start gap-4">
        <div className="w-full max-w-lg">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-auto bg-[#FFF9E5] rounded-lg"
          />
        </div>
        {/* Thumbnail Gallery */}
        <div className=" mx-4 flex gap-x-12 overflow-x-auto lg:justify-start">
          {[1, 2, 3, 4].map((_, index) => (
            <Image
              key={index}
              src={urlFor(product.image).url()}
              alt={product.name}
              width={100}
              height={100}
              className="w-20 h-20 object-cover rounded-md cursor-pointer bg-[#FFF9E5]"
            />
          ))}
        </div>
      </div>
      {/* Product Card */}
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetail;
