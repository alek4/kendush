import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import { useCart } from "react-use-cart";
import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { Toaster, toast } from "react-hot-toast";
import { useStateContext } from "../../context/StateContext";
import { urlForImage } from "../../sanity/lib/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";

export default function Cart() {
  const cartRef = useRef<any>();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    incQty,
    decQty,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f0ed] py-24" ref={cartRef}>
      <Wrapper className="">
        <h1 className="text-6xl font-bold mb-10 uppercase">Carrello</h1>
        {cartItems.length == 0 ? (
          <h1 className="text-xl font-bold uppercase text-zinc-400 text-center mt-10">
            Il tuo Carrello è vuoto, corri a fare shopping!
          </h1>
        ) : (
          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-center bg-neutral-400 py-3 px-3 rounded-lg">Se vuoi personalizzare i tuoi prodotti, per favore faccelo sapere nei dettagli del tuo ordine!</p>
            <div className="flex justify-end items-center">
              <h3 className="text-lg">
                Totale:{" "}
                <span className="font-bold text-xl">{totalPrice} €</span>
              </h3>
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-600 text-white uppercase px-4 py-2 rounded-lg ml-5"
              >
                ORDINA
              </button>

              {showModal ? (
                <Modal
                  toast={toast}
                  items={cartItems}
                  setShowModal={setShowModal}
                  cartTotal={Math.round(totalPrice * 100) / 100}
                />
              ) : null}
            </div>
            {cartItems.map((prod: any, i: number) => (
              <div key={i} className="flex items-center">
                <Image
                  className="max-w-[200px] max-h-[200px] mr-8 aspect-1 object-cover"
                  src={urlForImage(prod.image[0])}
                  width={0}
                  height={0}
                  sizes="100wh"
                  style={{ width: "100%", height: "auto" }} // optional
                  alt={prod.slug}
                />
                <div className="flex flex-col justify-between w-full pr-5 py-4">
                  <div>
                    <h3 className="text-xl uppercase md:text-3xl font-bold mb-5">{prod.name}</h3>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-7 h-10 items-stretch">
                      {prod.category !== "accessories" ? <p className="font-bold text-xl my-auto">
                        Taglia: <span className="font-normal">{prod.size}</span>
                      </p> : null}
                      <div className="flex">
                        <p className="hidden md:inline-block font-bold text-xl my-auto mr-3">
                          Quantità:{" "}
                        </p>
                        <div className="h-10 md:h-auto rounded-md bg-neutral-300 flex items-center gap-5">
                          <div
                            onClick={() =>
                              toggleCartItemQuantity(prod._id, "dec")
                            }
                            className="rounded-l-md hover:bg-neutral-400 h-full px-4 flex items-center"
                          >
                            <FiMinus />
                          </div>
                          <p>{prod.quantity}</p>
                          <div
                            onClick={() =>
                              toggleCartItemQuantity(prod._id, "inc")
                            }
                            className="rounded-r-md hover:bg-neutral-400 h-full px-4 flex items-center"
                          >
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 flex items-center justify-between md:mt-5 text-lg">
                    <div>
                      <span className="hidden md:inline-block mr-1 italic">Sub-totale: </span>
                      <p className="mt-auto inline-block">
                        {prod.price * prod.quantity} €
                      </p>
                    </div>
                    <TiDeleteOutline
                      onClick={() => onRemove(prod)}
                      className="text-red-500 text-4xl cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
      <NavBar></NavBar>
    </div>
  );
}
