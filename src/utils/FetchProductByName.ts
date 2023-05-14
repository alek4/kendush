import Product from "./ProductType";

export default async function fetchProductByName(
  name: string
): Promise<Product | null> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/product?name=${name}`
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