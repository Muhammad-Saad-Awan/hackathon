"use client"
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],  
});

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Large Screen Header */}
      <header className={`${poppins.className} hidden md:flex font-semiboldbold w-[1440px] h-[100px] justify-end px-48 items-center p-4 fixed top-0 left-0 right-0`}>
        <nav className="flex text-lg space-x-16 px-44">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/shop" className="hover:text-gray-600">Shop</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
        </nav>
        <div className="flex space-x-10">
          <button className="hover:text-gray-600">
            <img className="fas fa-user" src='/icons/account.png' alt="Account"></img>
          </button>
          <button className="hover:text-gray-600">
            <img className="fas fa-user" src='/icons/search.png' alt="Search"></img>
          </button>
          <button className="hover:text-gray-600">
            <img className="fas fa-user" src='/icons/wishlist.png' alt="Wishlist"></img>
          </button>
          <button className="hover:text-gray-600">
            <img className="fas fa-user" src='/icons/addtocard.png' alt="Cart"></img>
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`${poppins.className} md:hidden fixed top-0 left-0 right-0 z-50`}>
        {/* Mobile Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          {/* Brand/Logo Placeholder */}
          <div className="text-xl font-semibold">Your Brand</div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <nav className="flex flex-col items-center space-y-6">
                <a href="/" className="text-white text-2xl hover:text-gray-300">Home</a>
                <a href="/shop" className="text-white text-2xl hover:text-gray-300">Shop</a>
                <a href="/about" className="text-white text-2xl hover:text-gray-300">About</a>
                <a href="/contact" className="text-white text-2xl hover:text-gray-300">Contact</a>
              </nav>

              <div className="flex space-x-8 mt-8">
                <button className="hover:text-gray-300">
                  <img className="w-8 h-8" src='/icons/account.png' alt="Account"></img>
                </button>
                <button className="hover:text-gray-300">
                  <img className="w-8 h-8" src='/icons/search.png' alt="Search"></img>
                </button>
                <button className="hover:text-gray-300">
                  <img className="w-8 h-8" src='/icons/wishlist.png' alt="Wishlist"></img>
                </button>
                <button className="hover:text-gray-300">
                  <img className="w-8 h-8" src='/icons/addtocard.png' alt="Cart"></img>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;