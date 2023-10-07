"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import H2 from "@/app/components/H2";
import { useQuery } from "react-query";
import { useAuth } from "./hooks/useAuth";
import type { UserInterface } from "./types";
export default function Home() {
  const token = useAuth();
  const { data } = useQuery<UserInterface>("userinfo", async () => {
    const response = await fetch("http://localhost:4000/api/user/me", {
      headers: {
        ["x-token"]: token || "",
      },
    });
    return (await response.json()) as UserInterface;
  });
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="p-4">
        <H2>Yangi karta qo'shish</H2>
        <div className="my-12 flex">
          <CreditCard onClick={() => setShowModal(!showModal)} />
          {data?.cards?.map((card) => (
            <CreditCard key={card}>
              <CreditCardInfo />
            </CreditCard>
          ))}
        </div>
      </div>
    </>
  );
}
