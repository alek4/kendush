import React, { Children } from "react";
import Input from "./Input";

interface ModalProps {
  setShowModal: any;
  items: any;
  cartTotal: number;
}

export const Modal: React.FC<ModalProps> = ({
  setShowModal,
  items,
  cartTotal,
}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Invia Ordine</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="w-full">
                <form action="" className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <Input
                      placeholder={"Nome"}
                      type="text"
                      name="firstname"
                      id="firstname"
                    ></Input>
                    <Input
                      placeholder={"Cognome"}
                      type="text"
                      name="lastname"
                      id="lastname"
                    ></Input>
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <Input
                    placeholder="Indirizzo"
                    type="text"
                    name="address"
                    id="address"
                  />
                  <textarea
                    className="resize-none w-full shadow-sm rounded-md border-2 border-zinc-400 py-1 px-3 focus:outline-none focus:border-zinc-700 placeholder:text-gray-400"
                    placeholder="Lasciaci un messaggio per ulteriori informazioni"
                    name="message"
                    id="message"
                  />
                </form>
              </div>
              {/* {items.map((prod: any, i: number) => (
                <div key={i} className="flex">
                  <div className="flex flex-col justify-between py-4 w-full">
                    <div>
                      <h3 className="text-lg font-bold">{prod.name}</h3>
                      <div className="flex gap-5">
                        <p>
                          Taglia: <span>{prod.size}</span>
                        </p>
                        <p className="mr-1">Quantità: {prod.quantity}</p>
                      </div>
                    </div>
                    <div className="self-end">
                      <p className="mt-auto inline-block">
                        {Math.round(
                          (prod.quantity * prod.price + Number.EPSILON) * 100
                        ) / 100}{" "}
                        €
                      </p>
                    </div>
                  </div>
                </div>
              ))} */}
              <div className="text-right font-bold text-2xl mt-5">
                <h3>Totale: {cartTotal}</h3>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Chiudi
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Invia Ordine
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
