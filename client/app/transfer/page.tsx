import H2 from "@/app/components/H2";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import { ComponentProps } from "react";

function SubmitButton({ children }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className="text-white w-full my-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {children}
    </button>
  );
}

function TransferPage() {
  return (
    <div className="p-4">
      <H2>Pul o'tkazish</H2>
      <div className="flex items-center justify-center">
        <div>
          <h4 className="m-3 dark:text-white text-gray-900">Kartani tanlash</h4>
          <CreditCard>
            <CreditCardInfo />
          </CreditCard>
        </div>
        <div>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            ></path>
          </svg>
        </div>
        <div className='w-[400px]'>
          <h4 className="m-3 dark:text-white text-gray-900">
            Qabul qiluvchi karta
          </h4>
          <form className="relative z-0 m-3">
            <input
              type="email"
              id="floating_standard1"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard1"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pochta orqali
            </label>
            <SubmitButton>Qidirish</SubmitButton>
          </form>
          <form className="relative z-0 m-3">
            <input
              type="number"
              id="floating_standard2"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard2"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Karta raqami orqali
            </label>
              <SubmitButton>Qidirish</SubmitButton>
          </form>
          <form className="relative z-0 m-3">
            <input
              type="text"
              id="floating_standard3"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard3"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ism orqali
            </label>
              <SubmitButton>Qidirish</SubmitButton>
          </form>
            <SubmitButton>O'tkazish</SubmitButton>
          {/*<CreditCard>*/}
          {/*  <CreditCardInfo />*/}
          {/*</CreditCard>*/}
        </div>
      </div>

    </div>
  );
}
export default TransferPage