"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import H2 from "@/app/components/H2";
import { useQuery } from "react-query";
import type { UserInterface } from "./types";
export default function Home() {
  const { data } = useQuery<{ result: UserInterface; code: number }>(
    "userinfo",
    async () => {
      const token = localStorage.getItem("x-token");
      const response = await fetch("http://localhost:4000/api/user/me", {
        headers: {
          ["x-token"]: token as string,
        },
      });
      return (await response.json()) as { result: UserInterface; code: number };
    }
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
            <CreditCard key={card.cardNumber}>
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
