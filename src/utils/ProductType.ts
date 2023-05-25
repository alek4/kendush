export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Categories;
};

export const categories = ["clothes", "accessories", "icando"] as const;
export type Categories = typeof categories[number]
