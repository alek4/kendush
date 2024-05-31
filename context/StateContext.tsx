import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

interface Context {
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: Function;
  decQty: Function;
  onAdd: Function;
  toggleCartItemQuantity: Function;
  onRemove: Function
  size: Size;
  setSize: Function;
  type?: String;
  setType: Function;
}

type Size = "S" | "M" | "L" | "XL";

const Context = createContext<Context>({} as Context);

export const StateContext = ({ children }: { children: any }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [size, setSize] = useState<Size>("M")
  const [type, setType] = useState<String>()

  const onAdd = async (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product = {
        ...product,
        quantity,
      };

      setCartItems([...cartItems, product]);
    }

    toast.success(`${qty} ${product.name} aggiunto al carrello.`);

    setQty(1);
    setSize("M") 
    setType(undefined)
  };

  const incQty = () => setQty((prev) => prev + 1);
  const decQty = () => setQty((prev) => (prev == 1 ? 1 : prev - 1));

  const onRemove = (product: any) => {
    const foundProduct = cartItems.find(
      (item: any) => item._id === product._id
    );
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prev) => prev - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: string) => {
    const foundProduct = cartItems.find((item: any) => item._id === id);
    //const index = cartItems.findIndex((item: any) => item._id === id);

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        size,
        setSize,
        type,
        setType
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
