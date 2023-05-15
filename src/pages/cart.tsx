import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import { useCart } from "@/utils/CartContext";

export default function Cart() {
  const { cartItems } = useCart();  

  return (
    <>
      <Wrapper>
        ziopera_
        {cartItems.map((prod, i) => (
          <div key={i}>{prod.name + " " + prod.quantity}</div>
        ))}
      </Wrapper>
      <NavBar></NavBar>
    </>
  );
}
