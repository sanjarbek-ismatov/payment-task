import {CreditCardInterface} from "@/app/types";
import {useMutationFunc, submitData} from "@/app/utils/mutationFunctions";
import {useMutation, useQueryClient} from "react-query";
import Spinner from "@/app/components/Spinner";

function CreditCardInfo({
                            card,
                            deletable,
                        }: {
    card?: CreditCardInterface;
    deletable?: boolean;
}) {
    const mutation = useMutation(
        useMutationFunc("/api/card/delete", "DELETE", true),
    );
    const queryClient = useQueryClient();
    const submit = submitData.bind(
        null,
        mutation,
        queryClient,
        {_id: card?._id},
        "user",
    );
    return (
        <>
            {deletable && (
                <span
                    onClick={() => submit()}
                    className="group-hover:flex hidden justify-center items-center absolute right-[-10px] top-[-10px] h-[25px] w-[25px] rounded-full bg-red-500 text-white"
                >
          <i className="fa-solid fa-x"></i>
        </span>
            )}
            <h2 className="dark:text-white text-gray-900">Karta</h2>
            {card ? (
                <>
                    <i className="fa-regular fa-credit-card text-3xl dark:text-white text-gray-900 mt-3"></i>
                    <h2 className="text-2xl font-extrabold dark:text-white my-5">
                        {String(card.cardNumber).replace(/(\d{4})/gi, "$1 ")}
                    </h2>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {card.cardHolderName}
                    </p>
                </>
            ) : (
                <Spinner/>
            )}
        </>
    );
}

export default CreditCardInfo;
