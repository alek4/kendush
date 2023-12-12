import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

interface Context {
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: Function;
  decQty: Function;
}

const Context = createContext<Context>({} as Context);

export const StateContext = ({ children }: { children: any }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  const incQty = () => setQty((prev) => prev + 1);
  const decQty = () => setQty((prev) => (prev == 1 ? 1 : prev - 1));

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);