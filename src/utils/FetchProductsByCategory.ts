import { Categories, Product } from "./ProductType";

export default async function fetchProductsByCategory(
  category: Categories
): Promise<Product[] | null> {
  try {
    const response = await fetch(
      `api/productsByCategory?category=${category}`
    );
    if (response.ok) {
      const products = await response.json();

      return products;
    }
    return null;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}