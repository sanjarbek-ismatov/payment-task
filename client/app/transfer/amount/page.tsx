"use client";
import Text from "../../components/Text";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import { useTransferContext } from "@/app/context/transfer/context";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useCardInfoQuery } from "@/app/utils/queryFunctions";
import { useMutationFunc, submitData } from "@/app/utils/mutationFunctions";
import GradientButton from "@/app/components/GradientButton";
import TextArea from "@/app/components/TextArea";
import Toast from "@/app/components/Toast";
import { useRouter } from "next/navigation";

function AmountPage() {
  const cardInfoQuery = useCardInfoQuery();
  const router = useRouter();
  const mutation = useMutationFunc("/api/transfer/new", "POST", true);

  const queryClient = useQueryClient();
  const submit = submitData.bind(null, mutation, queryClient);
  const { transferDetails } = useTransferContext();
  const { data: senderCard } = useQuery(
    "user-card",
    cardInfoQuery(transferDetails?.senderCard || "")
  );
  const { data: receiverCard } = useQuery(
    "receiver-card",
    cardInfoQuery(transferDetails?.receiverCard || "")
  );
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit() {
    submit({ ...transferDetails, amount, description }).then(() => {
      router.replace("/reports");
    });
  }

  return (
    <>
      <div className="flex">
        <div className="mt-6">
          <h4 className="mx-3 dark:text-white text-gray-900">
            Sizning kartangiz
          </h4>
          <CreditCard>
            <CreditCardInfo card={senderCard?.result} />
          </CreditCard>
        </div>
        <div className="mt-6">
          <h4 className="mx-3 dark:text-white text-gray-900">
            Sizning kartangiz
          </h4>
          <CreditCard>
            <CreditCardInfo card={receiverCard?.result} />
          </CreditCard>
        </div>
        <div className="mt-6 w-[400px]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            O'tkazmoqchi bo'lgan summani kiriting
          </label>
          <div className="flex items-center my-5">
            <input
              type="text"
              id="large-input"
              className="block outline-none text-2xl w-full mr-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              value={amount}
              onChange={(event) => {
                setAmount(+event.target.value);
              }}
            />
            <Text>So'm</Text>
          </div>
          <TextArea
            label="Izoh"
            placeholder="Bu yerga izoh kiritishing mumkin..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <GradientButton onClick={handleSubmit}>O'tkazish</GradientButton>
        </div>
      </div>
      <Toast />
    </>
  );
}

export default AmountPage;
