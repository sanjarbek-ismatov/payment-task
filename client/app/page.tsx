"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import H2 from "@/app/components/H2";
import { useMutation, useQuery } from "react-query";
import type { ServerResponse, UserInterface } from "./types";
import { getToken } from "./utils/getToken";
import { mutationFunc } from "./utils/mutationFunctions";
const userInfoQuery = async () => {
  const token = localStorage.getItem("x-token");
  const response = await fetch("http://localhost:4000/api/user/me", {
    headers: {
      ["x-token"]: token as string,
    },
  });
  return (await response.json()) as { result: UserInterface; code: number };
};
export default function Home() {
  const { data } = useQuery<{ result: UserInterface; code: number }>(
    "user",
    userInfoQuery
  );
  const mutation = useMutation(
    mutationFunc("http://localhost:4000/api/card/delete", "DELETE", true)
  );
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="p-4">
        <H2>Yangi karta qo'shish</H2>
        <div className="my-12 flex flex-wrap">
          <CreditCard onClick={() => setShowModal(!showModal)} />
          {data?.result.cards?.map((card) => (
            <CreditCard key={card.cardNumber} deletable>
              <CreditCardInfo
                cardNumber={card.cardNumber}
                cardHolderName={card.cardHolderName}
              />
            </CreditCard>
          ))}
        </div>
      </div>
    </>
  );
}
