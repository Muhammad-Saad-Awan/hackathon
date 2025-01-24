"use client";

import React, { useState } from "react";
import { useCart } from "@/components/CardContext";
import { urlFor } from "@/sanity/lib/image";
import { Star, Facebook, Linkedin, Twitter } from "lucide-react";

const ProductCard = ({ product }: { product: any }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: urlFor(product.image).url(),
    });
    alert(`${product.name} added successfully!`);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const renderStars = (count = 4) => (
    <div className="flex items-center text-[#FFDA5B]">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(count) ? "fill-current" : "stroke-current"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-[#9F9F9F] flex items-center gap-2">
        <div className="h-5 w-0.5 bg-[#9F9F9F]"></div> 5 Customer Reviews
      </span>
    </div>
  );

  return (
    <div className="space-y-3 md:w-80 w-11/12 py-2 px-2 md:px-5">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <div className="text-2xl font-medium text-[#9F9F9F]">
        Rs. {product.price.toFixed(2)}
      </div>
      {renderStars()}
      <p className="text-[#242424] text-sm">{product.description}</p>

      <div className="flex items-center border rounded-lg border-black/50">
        <button className="px-3 py-3" onClick={() => handleQuantityChange(-1)}>
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button className="px-3 py-3" onClick={() => handleQuantityChange(1)}>
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="px-6 py-3 bg-white text-black text-base rounded-lg hover:bg-black hover:text-white border-2 border-black"
      >
        Add To Cart
      </button>

      <div className="md:w-96 w-full py-9 border-t text-sm text-[#9F9F9F] border-t-black/50 grid grid-cols-2 gap-2">
        <span>SKU </span>
        <span>: SS00{product.id}</span>
        <span>Category</span>
        <span>: {product.category}</span>
        <span>Tags</span>
  <span>: {product.tags?.join(", ") || "N/A"}</span>
        <span>Share</span>
        <span className="flex gap-2 py-1">
          : <Facebook size={18} className="rounded-full bg-black text-white p-1" />
          <Linkedin size={18} className="bg-black text-white p-1" />
          <Twitter size={18} className="rounded-full bg-black text-white p-1" />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
