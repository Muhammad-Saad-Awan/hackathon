 "use client";
import React from 'react';
import data from '@/data/data.json';
import ProductDetail from '@/components/ProductDetail';
import ProductSection from '@/components/home/ProductSection';
import ProductCard from '@/components/ProductCard';

function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  // Ensure type consistency in comparison
  const product = data.products.find(p => String(p.id) === id);
  const relatedProducts = data.products.filter(item => String(item.id) !== id).slice(0, 4);

  return (
    <div className="w-full">
      {product ? (
        <ProductDetail {...product} />
      ) : (
        <div className="text-center text-red-500">
          Product not found
        </div>
      )}
      
      <ProductSection title="Related Products" btnText="View More">
        <div className="flex justify-between overflow-x-scroll w-full py-4 sm:overflow-x-auto">
          {relatedProducts.map((product, index) => (
            <div key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </ProductSection>
    </div>
  );
}

export default Page;
