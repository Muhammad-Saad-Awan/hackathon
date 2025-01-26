import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Define the props for the ProductSection component
interface ProductSectionProps {
  title: string;
  description?: string;
  btnText: string;
  btnTo?: string;
  relatedProducts: Product[];
}

// Define the ProductSection component
const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  btnText,
  relatedProducts,
  btnTo = "/shop",
}) => {
  return (
    <Container className={`${poppins.className} py-6 bg-white`}>
      <div className="text-center mb-10">
        <h2 className="font-medium text-4xl text-black">{title}</h2>
        {description && (
          <p className="text-[#9F9F9F] text-base font-medium mt-2">
            {description}
          </p>
        )}
      </div>
      <div className="max-w-[1200px] mx-auto px-4">
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg text-center font-bold text-gray-700 mb-4">
                  {product.name}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="h-[10rem] object-cover bg-[#FFF9E5] rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg text-center font-medium mt-4">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No related products found.
          </p>
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          href={btnTo}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          {btnText}
        </Link>
      </div>
    </Container>
  );
};

export default ProductSection;
