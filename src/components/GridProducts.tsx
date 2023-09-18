import fetchProducts from "@/utils/FetchProducts";
import { Product, categories } from "@/utils/ProductType";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import NextLink from "next/link";
import fetchProductsByCategory from "@/utils/FetchProductsByCategory";

interface GridProductsProps {
  category: categories
}

const GridProducts: FC<GridProductsProps> = ({category}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProductsByCategory(category);
      if (fetchedProducts) {
        setProducts(fetchedProducts);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-x-clip overflow-y-auto gap-5 mb-24 md:h-[calc(100vh-12rem-5rem)] sm:grid-cols-2">
      {products.map((prod: Product, i) => (
        <NextLink href={`/products/${prod.category}/${prod.id}`} key={prod.id}>
          <Image src={prod.images[0]} width={600} height={600} alt={prod.name} />
          <div className="flex flex-row justify-between mt-2 text-lg">
            <p>{prod.name}</p>
            <p>{prod.price} €</p>
          </div>
        </NextLink>
      ))}
    </div>
  );
};
export default GridProducts;
