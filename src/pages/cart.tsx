import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import Product from "@/utils/ProductType";

export default function Cart() {
  const { items, emptyCart, removeItem, updateItemQuantity, isEmpty } =
    useCart();
  
  const [allItems, setallItems] = useState<any>([{}]);
  const [_isEmpty, setisEmpty] = useState<boolean>(true);

  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);


  useEffect(() => {
    setisEmpty(JSON.parse(JSON.stringify(isEmpty)));
  }, [isEmpty]);

  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="flex flex-col">
        <h1 className="text-6xl font-bold mb-5 uppercase">Carrello</h1>
        {_isEmpty ? (
          <h1 className="text-xl font-bold uppercase text-zinc-400 text-center mt-10">Il tuo Carrello è vuoto, corri a fare shopping!</h1>
        ) : (
          allItems.map((prod: any, i: any) => (
            <div key={i}>{prod.name + " " + prod.quantity}</div>
          ))
        )}
      </Wrapper>
      <NavBar></NavBar>
    </div>
  );
}
