"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import H2 from "@/app/components/H2";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="p-4">
        <H2>Yangi karta qo'shish</H2>
        <div className="my-12 flex">
          <CreditCard onClick={() => setShowModal(!showModal)} />
          <CreditCard>
            <CreditCardInfo />
          </CreditCard>
        </div>
      </div>
    </>
  );
}
