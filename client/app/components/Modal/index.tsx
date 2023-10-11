"use client";
import { toastOptions } from "@/app/data/variables";
import { Dispatch, FormEvent, SetStateAction, useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import DefaultInput from "../DefaultInput";
import Toast from "../Toast";
import { formSubmit, mutationFunc } from "@/app/utils/mutationFunctions";

function Modal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    mutationFunc("http://localhost:4000/api/card/add", "POST", true)
  );

  const submit = formSubmit(mutation, queryClient, "user");
  return (
    <>
      {/* Main modal */}
      <div
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-0 ${
          showModal ? "flex" : "hidden"
        } left-0 right-0 z-50 flex justify-center items-center  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setShowModal(!showModal)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Yopish</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Yangi karta malumotlarini kiriting
              </h3>
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  setShowModal(!showModal);
                  submit(event);
                }}
              >
                <DefaultInput
                  label="Karta raqami"
                  type="number"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  required
                />
                <DefaultInput
                  label="CVV"
                  type="number"
                  name="cvv"
                  placeholder="123"
                  required
                />
                <DefaultInput
                  label="Muddati"
                  name="expirationDate"
                  type="date"
                  required
                />
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Kartani qo'shish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </>
  );
}

export default Modal;
