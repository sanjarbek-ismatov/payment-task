import { CreditCardInterface } from "@/app/types";
import { mutationFunc } from "@/app/utils/mutationFunctions";
import { useMutation } from "react-query";

function CreditCardInfo({
  cardNumber,
  cardHolderName,
  deletable,
}: CreditCardInterface & { deletable?: boolean }) {
  const mutation = useMutation(
    mutationFunc("http://localhost:4000/api/card/delete", "DELETE", true)
  );
  return (
    <>
      {deletable && (
        <span className="group-hover:flex hidden justify-center items-center absolute right-[-10px] top-[-10px] h-[25px] w-[25px] rounded-full bg-red-500 text-white">
          <i className="fa-solid fa-x"></i>
        </span>
      )}
      <h2 className="dark:text-white text-gray-900">Karta</h2>
      <i className="fa-regular fa-credit-card text-3xl dark:text-white text-gray-900 mt-3"></i>
      <h2 className="text-2xl font-extrabold dark:text-white my-5">
        {String(cardNumber).replace(/(\d{4})/gi, "$1")}
      </h2>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        {cardHolderName}
      </p>
    </>
  );
}

export default CreditCardInfo;
