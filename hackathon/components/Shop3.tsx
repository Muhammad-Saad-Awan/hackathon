import Image from "next/image"
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include weights you need
});

// Define Product Interface
interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

// Define product data separately
const PRODUCTS: Product[] = [
  {
    id: 1,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 2,
    image: "/icons/grid2.png",
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00"
  },
  {
    id: 3,
    image: "/icons/grid4.png",
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00"
  },
  {
    id: 4,
    image: "/icons/grid3.png",
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00"
  },
  // Repeat the first 4 products to match the original layout
  {
    id: 5,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 6,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 7,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 8,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 9,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 10,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 11,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 12,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 13,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 14,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  },
  {
    id: 15,
    image: "/icons/grid1.png",
    name: "Trenton modular sofa 3",
    price: "Rs. 7,194.24"
  }
];

// Product Card Component with TypeScript Props
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={` ${poppins.className} bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}>
    <Image
      src={product.image}
      alt={product.name}
      width={240}
      height={174}
      className="w-full h-48 object-cover"
    />
    <div className="p-3 my-2">
      <h3 className=" text-center text-xs text-gray-700 truncate my-3">{product.name}</h3>
      <p className=" text-center text-base font-bold text-gray-900 ">{product.price}</p>
    </div>
  </div>
);

export default function Shop3() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}