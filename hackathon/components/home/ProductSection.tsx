import React from "react";
import Container from "../Container";
import Link from "next/link";

// Define the Product interface to represent a single product
interface Product {
  id: string;
  name: string;
  price: number;
  // Add other product properties as needed (e.g., image, description, etc.)
}

// Define the props for the ProductSection component
interface ProductSectionProps {
  title: string;
  description?: string;
  btnText: string;
  btnTo?: string;
  relatedProducts: Product[]; // Add this prop to receive related products
}

// Define the ProductSection component
const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  btnText,
  relatedProducts, // Include relatedProducts in the props
  btnTo = "/shop",
}) => {
  return (
    <Container className="py-6 bg-white">
      <div className="text-center mb-10">
        <h2 className="font-medium text-4xl text-black">{title}</h2>
        {description && (
          <p className="text-[#9F9F9F] text-base font-medium mt-2">
            {description}
          </p>
        )}
      </div>
      <div className="w-full">
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                {/* Add more product details or a link to the product details page */}
              </div>
            ))}
          </div>
        ) : (
          <p>No related products found.</p>
        )}
      </div>
      <div className="flex items-center justify-center h-36">
        <Link
          href={btnTo}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          {btnText}
        </Link>
      </div>
    </Container>
  );
};

export default ProductSection;
