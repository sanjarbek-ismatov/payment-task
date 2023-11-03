"use client";
import { TransferInterface } from "@/app/types";
import { useQuery } from "react-query";
import { transfersQuery } from "@/app/utils/queryFunctions";
import H2 from "@/app/components/H2";
function ReportsPage() {
  const { data } = useQuery("transfers", transfersQuery);
  return (
    <ul className="relative m-5 border-l border-gray-200 dark:border-gray-700">
      {data?.result?.length ? (
        data.result.map((transfer) => (
          <TransferDetails transfer={transfer} key={transfer._id} />
        ))
      ) : (
        <H2>Hali birorta o'tkazma mavjud emas!</H2>
      )}
    </ul>
  );
}
export default ReportsPage;

function TransferDetails({ transfer }: { transfer: TransferInterface }) {
  const date = new Date(transfer.date);
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <img
          className="rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Thomas Lean image"
        />
      </span>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="items-center justify-between mb-3 sm:flex">
          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </time>
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
            {transfer.receiverId?.fullName}ga{" "}
            <span className="font-semibold text-gray-900 dark:text-white ">
              {transfer.amount} so'm
            </span>{" "}
            pul o'tkazildi{" "}
          </div>
        </div>
        <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
          {transfer.description}
        </div>
      </div>
    </li>
  );
}
