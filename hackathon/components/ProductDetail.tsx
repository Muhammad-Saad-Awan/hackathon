"use client";
import React from "react";
import { Star, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Container from "./Container";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ProductDetail = ({
  name,
  price,
  imgSrc,
  description,
  category,
  tags,
  id
}: {
  name: string;
  price: number;
  imgSrc: string;
  description: string;
  category?: string;
  tags?: string[];
  id: string;
}) => {
  const renderStars = (count = 4.5) => {
    return (
      <div className="flex items-center text-[#FFDA5B]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(count) ? "fill-current" : "stroke-current"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-[#9F9F9F] flex justify-center items-center gap-2">
          {" "}
          <div className="h-5 w-0.5 bg-[#9F9F9F]"></div> 5 Customer Review
        </span>
      </div>
    );
  };

  return (
    <Container>
      <div className={`${poppins.className} mt-20    w-full mx-auto md:px-4 py-8 grid justify-between md:grid-cols-2 gap-8`}>
        {/* Image Gallery */}
        <div className="flex gap-2 w-full max-md:flex-col">
          <div className="md:order-2 p-2">
            <Image
              src={imgSrc}
              alt={name}
              width={1000}
              height={1000}
              className="w-full h-[30rem] bg-[#FFF9E5] object-cover rounded-lg "
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex md:flex-col  max-sm:overflow-x-scroll max-sm:py-6 gap-6 md:order-1">
            {[1, 2, 3, 4].map((img, index) => (
              <Image
                key={index}
                src={imgSrc}
                width={100}
                height={100}
                alt={`Product view ${index + 1}`}
                className={`w-full h-20 object-cover rounded-md cursor-pointer bg-[#FFF9E5]`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6 md:w-80 w-11/12 max-md:mr-auto py-5 px-2 md:px-5">
          <div className="space-y-2">
            <h1 className="text-4xl ">{name}</h1>
            <div className="text-2xl font-mediam text-[#9F9F9F]">
              Rs. {price?.toFixed(2)}
            </div>
            {renderStars()}
          </div>

          <p className="text-[#242424] text-sm">{description}</p>

          {/* Size Selection */}
           {/* Size Selection */}
<div>
  <p className="font-medium mb-2">Size</p>
  <div className="flex space-x-2">
    {["L", "XL", "XS"].map((size) => (
      <button
        key={size}
        className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-black hover:text-white"
      >
        {size}
      </button>
    ))}
  </div>
</div>


          {/* Color Selection */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex space-x-2">
              {["bg-[#816DFA]", "bg-[#000000]", "bg-[#CDBA7B]"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 border-transparent  ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg border-black/50">
              <button className="px-3 py-3">-</button>
              <span className="px-4">{1}</span>
              <button className="px-3 py-3">+</button>
            </div>
             
          </div>

          <button className="
        px-6 
        py-3 
        bg-white 
        text-black 
        text-base 
        rounded-lg 
        hover:bg-black
        hover:text-white 
        hover:border-white
        border-2
        border-black
        
    ">
        Add To Cart
    </button>

          <div className="md:w-96 w-full py-9 border-t text-sm text-[#9F9F9F] border-t-black/50 grid grid-cols-2 gap-2">
            <span>SKU </span>
            <span>: SS00{id}</span>
            <span>Category</span>
            <span>: {category}</span>
            <span>Tags</span>
            <span>:&nbsp;
              {tags?.map((t) => (
                <span key={t}>{t}, </span>
              ))}
            </span>
            <span>Share</span>
            <span className="flex gap-2 py-1">
              :{" "}
              <Facebook
                size={18}
                className="rounded-full bg-black text-white p-1"
              />{" "}
              <Linkedin size={18} className="bg-black text-white p-1" />{" "}
              <Twitter
                size={18}
                className="rounded-full bg-black text-white p-1"
              />{" "}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;