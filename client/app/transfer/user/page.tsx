import { SubmitButton } from "@/app/transfer/page";
import H2 from "@/app/components/H2";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";

function TransferUserPage() {
  return (
    <div className="p-4">
      <H2>Qabul qiluvchini tanlang</H2>
      <div className="flex w-full mt-3">
        <form className="relative z-0 m-3 w-full">
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
        <form className="relative z-0 m-3 w-full">
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
        <form className="relative z-0 m-3 w-full">
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
      </div>
      <div className="flex justify-end">
        <Link href="/transfer/amount">
          <GradientButton>Keyingisi</GradientButton>
        </Link>
      </div>
    </div>
  );
}
export default TransferUserPage