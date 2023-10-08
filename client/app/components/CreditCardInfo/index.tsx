import { CreditCardInterface } from "@/app/types";

function CreditCardInfo({ cardNumber, cardHolderName }: CreditCardInterface) {
  return (
    <>
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
