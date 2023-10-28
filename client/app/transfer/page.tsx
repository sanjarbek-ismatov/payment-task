"use client";
import H2 from "@/app/components/H2";
import { ComponentProps } from "react";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import { useQuery } from "react-query";
import { userInfoQuery } from "../utils/queryFunctions";
import CreditCard from "../components/CreditCard";
import CreditCardInfo from "../components/CreditCardInfo";
import { useTransferContext } from "@/app/context/transfer/context";

export function SubmitButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="text-white w-full my-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {children}
    </button>
  );
}

function TransferPage() {
  const { data } = useQuery("user", userInfoQuery);
  const { transferDetails, setTransferDetails } = useTransferContext();
  return (
    <div className="p-4">
      <H2>Pul o'tkazish</H2>
      <div>
        <h4 className="m-3 dark:text-white text-gray-900">Kartani tanlash</h4>
        <div className="flex flex-wrap w-full">
          {data?.result?.cards.map((card) => (
            <CreditCard
                selected={card._id === transferDetails?.senderCard}
              onClick={() =>
                setTransferDetails((prev) => ({
                  ...prev,
                  senderCard: card._id,
                }))
              }
              key={card._id}
            >
              <CreditCardInfo card={card} />
            </CreditCard>
          ))}
        </div>
        <div className="flex justify-end">
          <Link href="/transfer/user">
            <GradientButton>Keyingisi</GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TransferPage;
