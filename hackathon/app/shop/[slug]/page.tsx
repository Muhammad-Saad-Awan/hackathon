import React from "react";
import { getProduct, getRelatedProducts } from "@/sanity/lib/sanityQueries";
import ProductDetail from "@/components/ProductDetail";
import ProductSection from "@/components/home/ProductSection";

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // Fetch the product based on the slug
  const product = await getProduct(slug);

  // Handle the case where the product is not found
  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p>We couldn’t find the product you were looking for.</p>
      </div>
    );
  }

  // Fetch related products based on the product's category
  const relatedProducts = await getRelatedProducts(product.category, product.id);

  // Render the product details and related products section
  return (
    <div className="mt-20 lg:mx-24 w-full mx-auto">
      <ProductDetail product={product} />
      {relatedProducts.length > 0 && (
        <ProductSection
          title="Related Products"
          btnText="View All Products"
          relatedProducts={relatedProducts} // Pass related products here
        />
      )}
    </div>
  );
}
