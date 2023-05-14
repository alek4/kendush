import Product from "./ProductType";

export default async function fetchProducts(): Promise<
  Product[] | null
> {
  try {
    const response = await fetch(
      "http://localhost:3000/api/products"
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
