"use client";
import SubmitButton from "@/app/components/SubmitButton";
import Text from "../../components/Text";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import { useState } from "react";
import handleInputChange from "@/app/utils/cardNumberSplit";
import { useMutationFunc, useSubmitData } from "@/app/utils/mutationFunctions";
import { CreditCardInterface, UserInterface } from "@/app/types";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import { useTransferContext } from "@/app/context/transfer/context";
import FloatingLabelInput from "@/app/components/FloatingLabelInput";
import { useQueryClient } from "react-query";
import Toast from "@/app/components/Toast";

function TransferUserPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState<UserInterface | CreditCardInterface>();
  const { transferDetails, setTransferDetails } = useTransferContext();
  const mutation = useMutationFunc<any, UserInterface | CreditCardInterface>(
    "/api/user",
    "POST",
    false
  );
  const queryClient = useQueryClient();
  const submit = useSubmitData(mutation, queryClient);

  return (
    <>
      <div className="p-4">
        <Text>Qabul qiluvchini tanlang</Text>
        <div className="w-full">
          <form
            className="relative z-0 my-6 max-w-[600px] w-full"
            onSubmit={(event) => {
              event.preventDefault();
              const body = JSON.stringify({
                type,
                [type]: query.split(" ").join(""),
              });
              submit(body).then((data: any) => {
                console.log(data);
                setData(data?.result);
              });
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
                  <Text>Topilgan karta:</Text>
                  <div className="my-3">
                    <CreditCard
                      selected={data._id === transferDetails?.receiverCard}
                      onClick={() =>
                        setTransferDetails((prev) => ({
                          ...prev,
                          receiverId: data.cardHolderId,
                          receiverCard: data?._id,
                        }))
                      }
                    >
                      <CreditCardInfo card={data} />
                    </CreditCard>
                  </div>
                </>
              ) : (
                <>
                  <Text>{data.fullName}ning mavjud kartalari:</Text>
                  <div className="flex my-3 md:flex-nowrap flex-wrap">
                    {data.cards.map((card) => (
                      <CreditCard
                        selected={card._id === transferDetails?.receiverCard}
                        onClick={() =>
                          setTransferDetails((prev) => ({
                            ...prev,
                            receiverId: card.cardHolderId,
                            receiverCard: card._id,
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
      <Toast />
    </>
  );
}

export default TransferUserPage;
