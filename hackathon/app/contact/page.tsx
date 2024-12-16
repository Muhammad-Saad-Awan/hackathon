"use client"
import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) setQuantity(quantity + value);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">Home</a> / <a href="/shop" className="hover:underline">Shop</a> / Asgaard Sofa
      </nav>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div>
          <img src="/images/sofa-main.jpg" alt="Asgaard Sofa" className="w-full rounded-lg" />
          <div className="flex mt-2 space-x-2">
            <img src="/images/sofa-thumb1.jpg" alt="Thumbnail 1" className="w-16 h-16 rounded-lg cursor-pointer" />
            <img src="/images/sofa-thumb2.jpg" alt="Thumbnail 2" className="w-16 h-16 rounded-lg cursor-pointer" />
            <img src="/images/sofa-thumb3.jpg" alt="Thumbnail 3" className="w-16 h-16 rounded-lg cursor-pointer" />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-semibold">Asgaard Sofa</h1>
          <p className="text-xl text-gray-700 mt-2">Rs. 250,000.00</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-sm text-gray-500">(5 reviews)</span>
          </div>
          <p className="text-gray-600 mt-4">
            Relighting the art of classic design in its true class, the Asgaard sofa combines natural elements with modern highlights.
          </p>

          {/* Colors */}
          <div className="mt-4">
            <h3 className="text-sm font-medium">Choose Color</h3>
            <div className="flex space-x-2 mt-2">
              <div
                onClick={() => setSelectedColor('blue')}
                className={`w-6 h-6 rounded-full border ${selectedColor === 'blue' ? 'ring-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: 'blue' }}
              />
              <div
                onClick={() => setSelectedColor('purple')}
                className={`w-6 h-6 rounded-full border ${selectedColor === 'purple' ? 'ring-2 ring-purple-500' : ''}`}
                style={{ backgroundColor: 'purple' }}
              />
              <div
                onClick={() => setSelectedColor('white')}
                className={`w-6 h-6 rounded-full border ${selectedColor === 'white' ? 'ring-2 ring-gray-500' : ''}`}
                style={{ backgroundColor: 'white' }}
              />
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="flex items-center mt-2 space-x-2">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-t pt-4">
        <div className="flex space-x-8 text-gray-600">
          <button className="font-medium text-blue-600">Description</button>
          <button>Additional Information</button>
          <button>Reviews (5)</button>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            Introducing the raw, savored spirit of Asgård. The Asgård portfolio strikes deep into Scandinavian design
            with class and elegance.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="/images/sofa-desc1.jpg" alt="Description 1" className="rounded-lg" />
            <img src="/images/sofa-desc2.jpg" alt="Description 2" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
