import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include weights you need
});

const Header: React.FC = () => {
  return (
    <header className={`${poppins.className} font-semiboldbold w-[1440px] h-[100px] flex justify-end px-48 items-center p-4 fixed top-0 left-0 right-0`}>
      <nav className="flex space-x-16 px-44">
        <a href="/" className="hover:text-gray-600">Home</a>
        <a href="/shop" className="hover:text-gray-600">Shop</a>
        <a href="/about" className="hover:text-gray-600">About</a>
        <a href="/contact" className="hover:text-gray-600">Contact</a>
      </nav>
      <div className="flex space-x-10">
        <button className="hover:text-gray-600">
          <img className="fas fa-user" src='/icons/account.png'></img>
        </button>
        <button className="hover:text-gray-600">
        <img className="fas fa-user" src='/icons/search.png'></img>
        </button>
        <button className="hover:text-gray-600">
        <img className="fas fa-user" src='/icons/wishlist.png'></img>
        </button>
        <button className="hover:text-gray-600">
        <img className="fas fa-user" src='/icons/addtocard.png'></img>
        </button>
      </div>
    </header>
  );
};

export default Header;
   