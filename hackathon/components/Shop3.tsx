import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const PRODUCTS: Product[] = [
  { id: 1, image: "/icons/grid1.png", name: "Trenton modular sofa 3", price: "Rs. 7,194.24" },
  { id: 2, image: "/icons/grid2.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
  { id: 3, image: "/icons/grid4.png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
  { id: 4, image: "/icons/grid3.png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
  { id: 5, image: "/icons/5.png", name: "Grain coffee table", price: "Rs. 15,000.00" },
  { id: 6, image: "/icons/6.png", name: " Kent coffee table", price: "Rs. 225,000.00" },
  { id: 7, image: "/icons/7.png", name: "Round coffee table_color 2", price: "Rs. 251,000.00" },
  { id: 8, image: "/icons/8.png", name: "Reclaimed teak coffee table", price: "Rs. 25,200.00" },
  { id: 9, image: "/icons/9.png", name: "Plain console_", price: "Rs. 258,200.00" },
  { id:  10, image: "/icons/Third.png", name: "Reclaimed teak Sideboard", price: " Rs. 20,000.00" },
  { id: 11, image: "/icons/11.png", name: "SJP_0825 ", price: "Rs. 200,000.00" },
  { id: 12, image: "/icons/12.png", name: "Bella chair and table", price: "Rs. 100,000.00" },
  { id: 13, image: "/icons/13.png", name: "Granite square side table", price: "Rs. 258,800.00" },
  { id: 14, image: "/icons/Third.png", name: "Asgaard sofa", price: "Rs. 250,000.00" },
  { id: 15, image: "/icons/15.png", name: "Maya sofa three seater", price: " Rs. 115,000.00" },
  { id: 16, image: "/icons/16.png", name: "Outdoor sofa set", price: "Rs. 244,000.00" },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link href={`/shop/${product.id}`}>
    <div
      className={`${poppins.className} my-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={240}
        height={174}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 my-2">
        <h3 className="text-center text-xs text-gray-700 truncate my-3">{product.name}</h3>
        <p className="text-center text-base font-bold text-gray-900">{product.price}</p>
      </div>
    </div>
  </Link>
);

export default function Shop3() {
  return (
    <div>
      <div className={`${poppins.className} container mx-auto px-4 sm:px-6 lg:px-8 text-black`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="h-16 text-xl flex flex-row gap-4 justify-center items-center m-2">
          <button className="h-14 w-14 p-2">1</button>
          <button className="h-14 w-14 p-2">2</button>
          <button className="h-14 w-14 p-2">3</button>
          <button className="h-14 w-24 p-2">Next</button>
        </div>
        <div className="bg-[#FAF4F4] h-72 p-24 flex flex-row justify-between my-4">
          <div className="mx-5">
            <h1 className="text-2xl font-bold py-1">Free Delivery</h1>
            <p className="text-lg">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="mx-5">
            <h1 className="text-2xl font-bold py-1">90 Days Return</h1>
            <p className="text-lg">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="mx-5">
            <h1 className="text-2xl font-bold py-1">Secure Payment</h1>
            <p className="text-lg">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
