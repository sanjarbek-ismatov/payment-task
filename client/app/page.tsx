"use client";
import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";
import Modal from "@/app/components/Modal";
import {useState} from "react";
import Text from "@/app/components/Text";
import {useQuery} from "react-query";
import type {ServerResponse, UserInterface} from "./types";
import {userInfoQuery} from "./utils/queryFunctions";

export default function Home() {
    const {data} = useQuery<ServerResponse<UserInterface>>(
        "user",
        userInfoQuery,
    );

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <div className="p-4">
                <Text size='text-md'>Yangi karta qo'shish</Text>
                <div className="my-4 md:flex flex-wrap w-full">
                    <CreditCard onClick={() => setShowModal(!showModal)}/>
                    {data?.result?.cards?.map((card) => (
                        <CreditCard key={card.cardNumber}>
                            <CreditCardInfo card={card} deletable/>
                        </CreditCard>
                    ))}
                </div>
            </div>
        </>
    );
}
