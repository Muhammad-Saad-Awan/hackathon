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

interface ProductSectionProps {
  title: string;
  description?: string;
  btnText: string;
  btnTo?: string;
  relatedProducts: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  btnText,
  relatedProducts,
  btnTo = "/shop",
}) => {
  return (
    <Container
      className={`${poppins.className} py-6 bg-white flex flex-col justify-center items-center`}
    >
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-black">{title}</h2>
        {description && (
          <p className="text-[#9F9F9F] text-base font-medium mt-2">
            {description}
          </p>
        )}
      </div>
      <div className="w-full px-4">
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
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover bg-[#FFF9E5] rounded-lg"
                  loading="lazy"
                />
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
      <div className="mt-8">
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
