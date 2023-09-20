import React, { Children, useState } from "react";
import Input from "./Input";
import sendEmail from "@/utils/SendEmail";

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
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
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                      }
                      value={firstName}
                      placeholder={"Nome"}
                      type="text"
                      name="firstname"
                      id="firstname"
                    ></Input>
                    <Input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                      }
                      value={lastName}
                      placeholder={"Cognome"}
                      type="text"
                      name="lastname"
                      id="lastname"
                    ></Input>
                  </div>
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    value={email}
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress(e.target.value)
                    }
                    value={address}
                    placeholder="Indirizzo"
                    type="text"
                    name="address"
                    id="address"
                  />
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="resize-none w-full shadow-sm rounded-md border-2 border-zinc-400 py-1 px-3 focus:outline-none focus:border-zinc-700 placeholder:text-gray-400"
                    placeholder="Lasciaci un messaggio per ulteriori informazioni"
                    name="message"
                    id="message"
                  />
                </form>
              </div>
              <div className="text-right font-bold text-2xl mt-5">
                <h3>Totale: {cartTotal} €</h3>
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
                onClick={() => {
                  sendEmail({
                    firstName,
                    lastName,
                    email,
                    address,
                    message,
                    items
                  });
                  setShowModal(false);
                }}
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
