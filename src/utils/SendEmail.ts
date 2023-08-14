import { Product, categories } from "./ProductType";

export default async function sendEmail(): Promise<Product | null> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/send-email`
    );
    if (response.ok) {
      const product = await response.json();
      console.log(product);

      return null;
    }
    return null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
