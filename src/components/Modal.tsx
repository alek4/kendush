import React, { Children, useState } from "react";
import { Input } from "./Input";
import { InputArea } from "./InputArea";
import sendEmail from "@/utils/SendEmail";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";

interface ModalProps {
  setShowModal: any;
  items: any;
  cartTotal: number;
  toast: any;
}

function checkRequiredInputs(values: FormikValues) {
  const errors: Record<string, string> = {};

  for (let label in values) {
    if (values[label].trim() === "" && label != "message")
      errors[label] = "Il campo non può essere vuoto";
  }

  return errors;
}

export const Modal: React.FC<ModalProps> = ({
  setShowModal,
  items,
  cartTotal,
  toast,
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
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    address: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values: FormikValues, { setErrors }) => {
                    const errors = checkRequiredInputs(values);
                    
                    if (Object.keys(errors).length > 0) {
                      setErrors(errors);
                    } else {                      
                      sendEmail(
                        {
                          address: values.address,
                          lastName: values.lastName,
                          firstName: values.firstName,
                          email: values.email,
                          items,
                          message: values.message,
                        },
                        () => {
                          toast.success("Email inviata correttamente!");
                          setShowModal(false)
                        }
                      );
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-5">
                      <div className="flex flex-col sm:flex-row gap-5">
                        <Input
                          placeholder="Nome"
                          type="text"
                          name="firstName"
                          label="Nome"
                        />
                        <Input
                          placeholder={"Cognome"}
                          type="text"
                          name="lastName"
                          label="Cognome"
                        />
                      </div>
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        label="Email"
                      />
                      <Input
                        placeholder="Indirizzo"
                        type="text"
                        name="address"
                        label="Address"
                      />
                      
                      <InputArea
                        label="Message"
                        name="message"
                        placeholder="Lasciaci un messaggio per ulteriori informazioni"
                      />

                      <div className="text-right font-bold text-2xl mt-5">
                        <h3>Totale: {cartTotal} €</h3>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Chiudi
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Invia Ordine
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
