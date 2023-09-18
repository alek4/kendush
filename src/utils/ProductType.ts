export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: Categories;
};

export const categories = ["clothes", "accessories", "icando"] as const;
export type Categories = typeof categories[number]
