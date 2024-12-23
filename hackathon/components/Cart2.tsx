 // AddToCart.tsx
"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { useCart } from "./CardContext";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const AddToCart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div className={`${poppins.className}`}>
      <div className=" py-4 lg:p-8 flex flex-col lg:flex-row justify-between  text-black    mt-8">
        {/* Cart Items Table */}
        <div className="w-full lg:w-2/3">
          <table className="w-full border-collapse">
            <thead className="bg-[#FFF9E5] text-left">
              <tr>
                <th className="p-2 lg:p-4">Product</th>
                <th className="p-2 lg:p-4">Price</th>
                <th className="p-2 lg:p-4">Quantity</th>
                <th className="p-2 lg:p-4">Subtotal</th>
                 
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 lg:p-4 flex flex-col  items-center gap-2 text-[#9F9F9F]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 lg:w-16 lg:h-16 rounded"
                    />
                    <span className="text-sm lg:text-base">{item.name}</span>
                  </td>
                  <td className="p-2 lg:p-4 text-[#9F9F9F]">
                    Rs. {item.price.toLocaleString()}
                  </td>
                  <td className="p-2 lg:p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-10 border border-[#9F9F9F] rounded px-1 text-center "
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="p-2 lg:p-4">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="p-2 lg:p-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="  mt-8 lg:mt-0 lg:mx-8 bg-[#FFF9E5] px-2 py-4  lg:p-6 rounded-lg shadow">
          <h2 className="text-2xl lg:text-3xl font-semibold my-4 lg:my-8 mb-8 text-center">
            Cart Totals
          </h2>
          <div className=" mr-5 flex justify-between mb-2 lg:mb-4 ">
            <span>Subtotal</span>
            <span>Rs. {getCartTotal().toLocaleString()}</span>
          </div>
          <div className=" mr-5 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rs. {getCartTotal().toLocaleString()}</span>
          </div>
          <button className="ml-12 lg:ml-6 py-1 lg:py-2 my-4 lg:my-10 px-8 lg:px-10 text-lg lg:text-xl border border-black rounded-xl text-center hover:bg-yellow-400">
            <Link href="/cheakout">
              Check Out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
