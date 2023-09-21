import CreditCard from "@/app/components/CreditCard";
import CreditCardInfo from "@/app/components/CreditCardInfo";

export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-extrabold dark:text-white">
        Mening kartalarim
      </h2>
      <div className="my-12 flex">
        <CreditCard />
        <CreditCard>
          <CreditCardInfo />
        </CreditCard>
      </div>
    </div>
  );
}
