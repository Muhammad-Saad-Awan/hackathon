import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: number;
  id:string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, name, price,id }) => {
  return (
    <Link href={`/shop/${id}`}>
    <div className="w-[17.938rem] h-96 p-4 bg-white hover:bg-[#FAF4F4] flex flex-col cursor-pointer">
      <Image src={imgSrc} alt={name} width={287} height={287} className="flex-1" />
      <p className="mt-4 text-black/80 h-[3rem] line-clamp-2 overflow-hidden">{name}</p>
      <p className="mt-2 text-xl font-bold text-">RS. {price}</p>
    </div>
    </Link>
  );
};

export default ProductCard;