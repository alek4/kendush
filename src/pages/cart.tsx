import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/Modal";

export default function Cart() {
  const { items, updateItemQuantity, isEmpty, cartTotal } = useCart();

  const [allItems, setallItems] = useState<any>([{}]);
  const [_isEmpty, setisEmpty] = useState<boolean>(true);

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  useEffect(() => {
    setisEmpty(JSON.parse(JSON.stringify(isEmpty)));
  }, [isEmpty]);

  return (
    <div className="min-h-screen bg-[#f2f0ed] py-24">
      <Wrapper className="">
        <h1 className="text-6xl font-bold mb-10 uppercase">Carrello</h1>
        {_isEmpty ? (
          <h1 className="text-xl font-bold uppercase text-zinc-400 text-center mt-10">
            Il tuo Carrello è vuoto, corri a fare shopping!
          </h1>
        ) : (
          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            <div className="flex justify-end items-center">
              <h3 className="text-lg">
                Totale: <span className="font-bold text-xl">{Math.round(cartTotal * 100) / 100} €</span>
              </h3>
              <button onClick={() => setShowModal(true)} className="bg-green-600 text-white uppercase px-4 py-2 rounded-lg ml-5">
                ORDINA
              </button>

              {showModal ? <Modal items={allItems} setShowModal={setShowModal} cartTotal={Math.round(cartTotal * 100) / 100} /> : null}
            </div>
            {allItems.map((prod: any, i: any) => (
              <div key={i} className="flex">
                <Image
                  className="max-w-[150px] mr-8"
                  src={prod.image}
                  width={600}
                  height={600}
                  alt={prod.name}
                />
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <h3 className="text-lg font-bold">{prod.name}</h3>
                    <p>
                      Taglia: <span>{prod.size}</span>
                    </p>
                    <span className="mr-1">Quantità: </span>
                    <input
                      min={0}
                      className="w-14 bg-[#f2f0ed]"
                      onClick={(e) => {
                        updateItemQuantity(
                          prod.id,
                          parseInt(e.currentTarget.value)
                        );
                      }}
                      type="number"
                      name="qta"
                      id="qta"
                      defaultValue={prod.quantity}
                    />
                  </div>
                  <div className="">
                    <span className="mr-1">Sub-totale: </span>
                    <p className="mt-auto inline-block">
                      {Math.round(
                        (prod.quantity * prod.price + Number.EPSILON) * 100
                      ) / 100}{" "}
                      €
                    </p>
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
