 // AddToCart.tsx
"use client"
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
      <div className="p-8 flex flex-col lg:flex-row justify-between max-w-6xl mx-auto mt-8">
        {/* Cart Items Table */}
        <div className="w-full lg:w-2/3">
          <table className="w-full border-collapse">
            <thead className="bg-[#FFF9E5] text-left">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4 text-[#9F9F9F]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4 text-[#9F9F9F]">
                    Rs. {item.price.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-12 border border-[#9F9F9F] rounded px-2 text-center"
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="p-4">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="p-4">
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
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:mx-4 bg-[#FFF9E5] p-6 rounded-lg shadow">
          <h2 className="text-3xl font-semibold my-8 mb-16 text-center">
            Cart Totals
          </h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>Rs. {getCartTotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rs. {getCartTotal().toLocaleString()}</span>
          </div>
          <button className="ml-24 lg:ml-12 py-2 my-10 px-10 text-xl border border-black rounded-xl text-center hover:bg-yellow-400">
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