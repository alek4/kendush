import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import Product from "@/utils/ProductType";

export default function Cart() {
  const { items, emptyCart, removeItem, updateItemQuantity } =
    useCart();
  const [allItems, setallItems] = useState<any>([{}]);
  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  return (
    <>
      <Wrapper>
        ziopera_
        {allItems.map((prod: any, i: any) => (
          <div key={i}>{prod.name + " " + prod.quantity}</div>
        ))}
      </Wrapper>
      <NavBar></NavBar>
    </>
  );
}
