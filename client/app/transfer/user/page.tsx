"use client";
import { SubmitButton } from "@/app/transfer/page";
import H2 from "@/app/components/H2";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import handleInputChange from "@/app/utils/cardNumberSplit";
import { useMutation } from "react-query";
import { mutationFunc, submitData } from "@/app/utils/mutationFunctions";
function FloatingLabelInput({
  label,
  ...props
}: ComponentProps<"input"> & { label?: string }) {
  const id = Math.random().toString(16);
  return (
    <>
      <input
        {...props}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </>
  );
}
function TransferUserPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const mutation = useMutation(
    mutationFunc<any>("http://localhost:4000/api/user", "GET", false)
  );
  console.log(type);
  return (
    <div className="p-4">
      <H2>Qabul qiluvchini tanlang</H2>
      <div className="mt-3 w-full">
        <form
          className="relative z-0 my-12 w-[600px] mx-auto"
          onSubmit={(event) => {
            event.preventDefault();
            mutation.mutateAsync({});
          }}
        >
          <FloatingLabelInput
            label="Karta raqami, Email, Ism familiya"
            type="text"
            value={query}
            onChange={(event) => handleInputChange(event)(setQuery, setType)}
            placeholder=" "
            required
          />
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
export default TransferUserPage;
