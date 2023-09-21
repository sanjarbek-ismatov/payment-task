"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="p-4">
        <h2 className="text-4xl font-extrabold dark:text-white">
          Mening kartalarim
        </h2>
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
