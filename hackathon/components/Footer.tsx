"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Address Section */}
        <div className="text-sm text-gray-500">
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-600">Home</a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-600">Shop</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-600">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-600">Contact</a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="/payment-options" className="hover:text-gray-600">Payment Options</a>
              </li>
              <li>
                <a href="/returns" className="hover:text-gray-600">Returns</a>
              </li>
              <li>
                <a href="/privacy-policies" className="hover:text-gray-600">Privacy Policies</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Newsletter</h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-800 text-white text-sm rounded-r-md hover:bg-gray-700"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        2022 Meubel House. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
