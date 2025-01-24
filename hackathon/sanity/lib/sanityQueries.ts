import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "@/components/Shop3";

export async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      id,
      name,
      image,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }`,
    { slug }
  );
}

export async function getRelatedProducts(
  category: string,
  excludeId: string
): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product" && category == $category && id != $excludeId][0...4] {
      _id,
      id,
      name,
      image,
      price,
      description,
      discountPercentage
    }`,
    { category, excludeId }
  );
}
