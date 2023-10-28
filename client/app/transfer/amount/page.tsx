"use client"
import { SubmitButton } from "@/app/transfer/page";
import H2 from "@/app/components/H2";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import {useTransferContext} from "@/app/context/transfer/context";
import {useEffect} from "react";
import {useQuery} from "react-query";
import {cardInfoQuery} from "@/app/utils/queryFunctions";

function AmountPage() {
    const {transferDetails, setTransferDetails} = useTransferContext()
    const {data: senderCard} = useQuery('user-card', cardInfoQuery(transferDetails?.senderCard || ""))
   const {data: receiverCard} = useQuery('receiver-card', cardInfoQuery(transferDetails?.receiverCard || ""))
  return (
    <div className="flex">
      <div>
        <h4 className="m-3 dark:text-white text-gray-900">Sizning kartangiz</h4>
        <CreditCard>
          <CreditCardInfo card={senderCard?.result} />
        </CreditCard>
      </div>
      <div>
        <h4 className="m-3 dark:text-white text-gray-900">Sizning kartangiz</h4>
        <CreditCard>
          <CreditCardInfo card={receiverCard?.result} />
        </CreditCard>
      </div>
      <form className="m-3 w-[400px]">
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            O'tkazmoqchi bo'lgan summani kiriting
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="large-input"
              className="block text-4xl w-full mr-2 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
            />
            <H2>So'm</H2>
          </div>
        </div>
        <SubmitButton>O'tkazish</SubmitButton>
      </form>
    </div>
  );
}
export default AmountPage