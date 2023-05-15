import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Product from "./ProductType";
import { useRouter } from "next/router";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: any;
}

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // {
    //   name: "owetherhead0",
    //   image: "http://dummyimage.com/600x600.png/dddddd/000000",
    //   price: "98,40",
    //   quantity: 2,
    // },
  ]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(
      (item) => item.name === product.name
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productName: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  };

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Load cartItems from localStorage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");

    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const cartContextValue: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
