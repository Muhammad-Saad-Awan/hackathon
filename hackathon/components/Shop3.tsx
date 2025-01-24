"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface Product {
  _id: string;
  id: string;
  name: string;
  image: any;
  imagePath?: string;
  price: number;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

function urlFor(source: any) {
  return builder.image(source);
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const imageSource =
    product.imagePath || (product.image ? urlFor(product.image).url() : "/placeholder.jpg");
  const hasDiscount = product.discountPercentage !== undefined && product.discountPercentage > 0;

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        className={`${poppins.className} my-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg text-black mx-auto relative`}
      >
        {product.isFeaturedProduct && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.discountPercentage}% OFF
          </span>
        )}
        <Image
          src={imageSource}
          alt={product.name}
          width={240}
          height={174}
          className="h-48 object-cover w-full"
        />
        <div className="p-3 my-2">
          <h3 className="text-center text-xs text-gray-700 truncate my-3">{product.name}</h3>
          <p className="text-center text-base font-bold text-gray-900">
            Rs. {product.price.toLocaleString()}
            {hasDiscount && (
              <span className="text-sm text-red-500 ml-2 line-through">
                Rs. {(product.price / (1 - (product.discountPercentage || 0) / 100)).toFixed(2)}
              </span>
            )}
          </p>
          <div className="flex justify-between items-center px-2 mt-2">
            <span
              className={`text-xs ${
                product.stockLevel > 10
                  ? "text-green-600"
                  : product.stockLevel > 0
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {product.stockLevel > 10
                ? "In Stock"
                : product.stockLevel > 0
                ? `Only ${product.stockLevel} left`
                : "Out of Stock"}
            </span>
            <span className="text-xs text-gray-600">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
const Shop3: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "product"] {
            _id,
            id,
            name,
            image,
            imagePath,
            price,
            description,
            discountPercentage,
            isFeaturedProduct,
            stockLevel,
            category
          }
        `);
        setProducts(result);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <div
        className={`${poppins.className} container mx-auto px-4 sm:px-6 lg:px-8 text-black`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center text-gray-700">No products available.</div>
        )}
        <div className="bg-[#FAF4F4] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-row max-md:flex-col max-md:items-center max-md:text-center max-md:gap-y-5 justify-between my-4">
          <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
            <h1 className="text-xl sm:text-2xl font-bold py-1">Free Delivery</h1>
            <p className="text-base sm:text-lg text-gray-700">For all orders over $50.</p>
          </div>
          <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
            <h1 className="text-xl sm:text-2xl font-bold py-1">90 Days Return</h1>
            <p className="text-base sm:text-lg text-gray-700">If goods have problems.</p>
          </div>
          <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 max-w-xs">
            <h1 className="text-xl sm:text-2xl font-bold py-1">Secure Payment</h1>
            <p className="text-base sm:text-lg text-gray-700">100% secure payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop3;