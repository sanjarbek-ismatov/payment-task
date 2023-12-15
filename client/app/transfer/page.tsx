"use client";
import Text from "../components/Text";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import {useQuery} from "react-query";
import {userInfoQuery} from "../utils/queryFunctions";
import CreditCard from "../components/CreditCard";
import CreditCardInfo from "../components/CreditCardInfo";
import {useTransferContext} from "@/app/context/transfer/context";
import SEOHead from "@/app/components/SEOHead";


function TransferPage() {
    const {data} = useQuery("user", userInfoQuery);
    const {transferDetails, setTransferDetails} = useTransferContext();
    return (
        <>
            <head>
                <SEOHead title="O'tkazmalar"/>
            </head>
            <div className="p-4">
                <Text size="text-md">Pul o'tkazish</Text>
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
                                <CreditCardInfo card={card}/>
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
        </>
    );
}

export default TransferPage;
