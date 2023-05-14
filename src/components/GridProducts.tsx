import Product from "@/utils/ProductType";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
interface GridProductsProps {}

const GridProducts: FC<GridProductsProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch("/api/products");
      return response.json();
    };

    postData().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-x-clip overflow-y-auto gap-5 mb-24 md:h-[calc(100vh-12rem-5rem)] sm:grid-cols-2">
      {products.map((prod: Product, i) => (
        <div key={i}>
          <Image src={prod.image} width={600} height={600} alt={prod.name} />
          <div className="flex flex-row justify-between mt-2 text-lg">
            <p>{prod.name}</p>
            <p>{prod.price} €</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GridProducts;
