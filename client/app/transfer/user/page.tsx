"use client";
import { SubmitButton } from "@/app/transfer/page";
import H2 from "@/app/components/H2";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import handleInputChange from "@/app/utils/cardNumberSplit";
import { useMutation } from "react-query";
import { mutationFunc, submitData } from "@/app/utils/mutationFunctions";
import { CreditCardInterface, UserInterface } from "@/app/types";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import { useTransferContext } from "@/app/context/transfer/context";
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
  const [data, setData] = useState<UserInterface | CreditCardInterface>();
  const { transferDetails, setTransferDetails } = useTransferContext();
  const mutation = useMutation(
    mutationFunc<any, UserInterface | CreditCardInterface>(
      "http://localhost:4000/api/user",
      "POST",
      false
    )
  );
  return (
    <div className="p-4">
      <H2>Qabul qiluvchini tanlang</H2>
      <div className="mt-3 w-full">
        <form
          className="relative z-0 my-12 w-[600px]"
          onSubmit={(event) => {
            event.preventDefault();
            mutation
              .mutateAsync(
                JSON.stringify({
                  type,
                  [type]: query.split(" ").join(""),
                })
              )
              .then((data) => setData(data.result));
          }}
        >
          <FloatingLabelInput
            label="Karta raqami, Email orqali"
            type="text"
            value={query}
            onChange={(event) => handleInputChange(event)(setQuery, setType)}
            placeholder=" "
            required
          />
          <SubmitButton type="submit">Qidirish</SubmitButton>
        </form>
        <div>
          {data &&
            ("cardNumber" in data ? (
              <>
                <H2>Topilgan karta:</H2>
                <div className="my-3">
                  <CreditCard
                    onClick={() =>
                      setTransferDetails((prev) => ({
                        ...prev,
                        selectedCardId: data._id,
                        selectedUserId: data.cardHolderId,
                      }))
                    }
                  >
                    <CreditCardInfo card={data} />
                  </CreditCard>
                </div>
              </>
            ) : (
              <>
                <H2>{data.fullName}ning mavjud kartalari:</H2>
                <div className="flex my-3">
                  {data.cards.map((card) => (
                    <CreditCard
                      onClick={() =>
                        setTransferDetails((prev) => ({
                          ...prev,
                          selectedCardId: card._id,
                          selectedUserId: card.cardHolderId,
                        }))
                      }
                      key={card._id}
                    >
                      <CreditCardInfo card={card} />
                    </CreditCard>
                  ))}
                </div>
              </>
            ))}
        </div>
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
