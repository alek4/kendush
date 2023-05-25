import {Product, categories} from "./ProductType";

export default async function fetchProductById(
  id: string,
  category: categories
): Promise<Product | null> {
  console.log("zio", category);
  try {
    const response = await fetch(
      `http://localhost:3000/api/product?id=${id}&category=${category}`
    );
    if (response.ok) {
      const product = await response.json();
      
      return product;
    }
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}