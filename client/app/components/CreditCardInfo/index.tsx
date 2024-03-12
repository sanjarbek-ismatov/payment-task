import { CreditCardInterface } from "@/app/types";
import { useMutationFunc, useSubmitData } from "@/app/utils/mutationFunctions";
import { useQueryClient } from "react-query";
import Spinner from "@/app/components/Spinner";

function CreditCardInfo({
  card,
  deletable,
  isloading,
}: {
  card?: CreditCardInterface;
  deletable?: boolean;
  isloading?: boolean;
}) {
  const mutation = useMutationFunc<any>("/api/card/delete", "DELETE", true);
  const queryClient = useQueryClient();
  const submit = useSubmitData(mutation, queryClient);

  return (
    <>
      {deletable && (
        <span
          onClick={() => submit({ _id: card?._id }, "user")}
          className="group-hover:flex hidden justify-center items-center absolute right-[-10px] top-[-10px] h-[25px] w-[25px] rounded-full bg-red-500 text-white"
        >
          <i className="fa-solid fa-x"></i>
        </span>
      )}
      <h2 className="dark:text-white text-gray-900">Karta</h2>
      {isloading ? (
        <Spinner />
      ) : card ? (
        <>
          <i className="fa-regular fa-credit-card text-3xl dark:text-white text-gray-900 mt-3"></i>
          <h2 className="sm:text-2xl text-xl font-extrabold dark:text-white my-5">
            {String(card.cardNumber).replace(/(\d{4})/gi, "$1 ")}
          </h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {card.cardHolderName}
          </p>
        </>
      ) : (
        <h2 className="lg:text-2xl md:text-xl text-lg font-bold dark:text-white my-5">
          Sizda karta mavjud emas, qo'shish uchun bosh sahifaga o'ting!
        </h2>
      )}
    </>
  );
}

export default CreditCardInfo;
