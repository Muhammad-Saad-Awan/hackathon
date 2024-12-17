"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header completely after scrolling down
      if (currentScrollY > 50) {
        setIsHeaderVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling
      } else if (currentScrollY === 0) {
        // Show header only when at the top of the page
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Large Screen Header */}
      <header
        className={`${poppins.className} hidden md:flex font-semibold w-[1440px] h-[100px] text-black justify-end px-48 items-center p-4 fixed top-0 left-0 right-0 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex text-lg space-x-16 px-44">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-10">
          <button className="hover:text-gray-600">
            <Image
              src="/icons/account.png"
              alt="Account"
              width={28}
              height={28}
            />
          </button>
          <button className="hover:text-gray-600">
            <Image
              src="/icons/search.png"
              alt="Search"
              width={28}
              height={28}
            />
          </button>
          <button className="hover:text-gray-600">
            <Image
              src="/icons/wishlist.png"
              alt="Wishlist"
              width={28}
              height={28}
            />
          </button>
          <button className="hover:text-gray-600">
            <Image
              src="/icons/addtocard.png"
              alt="Cart"
              width={28}
              height={28}
            />
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`${poppins.className} md:hidden fixed top-0 left-0 right-0 z-50`}
      >
        {/* Mobile Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          {/* Brand/Logo Placeholder */}
          <div className="text-xl font-semibold">Home Haven</div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col justify-center items-center">
            {/* Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Links */}
            <nav className="flex flex-col items-center space-y-6">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-white text-2xl hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={closeMobileMenu}
                className="text-white text-2xl hover:text-gray-300"
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="text-white text-2xl hover:text-gray-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-white text-2xl hover:text-gray-300"
              >
                Contact
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex space-x-8 mt-8">
              <button>
                <Image
                  src="/icons/account.png"
                  alt="Account"
                  width={28}
                  height={28}
                />
              </button>
              <button>
                <Image
                  src="/icons/search.png"
                  alt="Search"
                  width={28}
                  height={28}
                />
              </button>
              <button>
                <Image
                  src="/icons/wishlist.png"
                  alt="Wishlist"
                  width={28}
                  height={28}
                />
              </button>
              <button>
                <Image
                  src="/icons/addtocard.png"
                  alt="Cart"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
