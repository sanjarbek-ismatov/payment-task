"use client";
import { TransferInterface } from "@/app/types";
import { useQuery } from "react-query";
import { transfersQuery, userInfoQuery } from "@/app/utils/queryFunctions";
import H2 from "@/app/components/H2";
import { useMemo } from "react";
import { convertDayToWeekDay, convertIndexToMonth } from "../utils/dateToRead";
function ReportsPage() {
  const { data: transfers } = useQuery("transfers", transfersQuery);
  const { data: user } = useQuery("user", userInfoQuery);
  const sortedByDates = useMemo(() => {
    return transfers?.result?.reduce((previous, currentTransfer) => {
      const transferDate = new Date(currentTransfer.date);
      const prev = { ...previous };
      const { day, month, year, dayOfTheWeek } = {
        day: transferDate.getDate(),
        month: transferDate.getMonth(),
        year: transferDate.getFullYear(),
        dayOfTheWeek: transferDate.getDay(),
      };

      const currentYear = prev[year] ?? {};
      const currentMonth = currentYear[month] ?? {};
      const currentDay = currentMonth[day] ?? [];
      currentDay.push({ transfer: currentTransfer, day: dayOfTheWeek });
      currentMonth[day] = currentDay;
      currentYear[month] = currentMonth;
      prev[year] = currentYear;
      return prev;
    }, {} as Record<string, Record<string, Record<string, { transfer: TransferInterface; day: number }[]>>>);
  }, [transfers]);
  return (
    <div>
      {sortedByDates &&
        Object.keys(sortedByDates).map((year) => {
          const currentYear = sortedByDates[year];
          return (
            <div className="p-4">
              <H2>{year}yil</H2>
              <hr className="my-4" />
              {Object.keys(currentYear).map((month) => {
                const currentMonth = currentYear[month];
                return (
                  <div className="p-2">
                    <h4 className="text-white text-2xl">
                      {convertIndexToMonth(+month)} oyi
                    </h4>
                    <hr className="my-4" />
                    {Object.keys(currentMonth).map((day) => {
                      const currentDay = currentMonth[day];
                      return (
                        <ul className="relative m-5 border-l border-gray-200 dark:border-gray-700">
                          <h6 className="text-white m-3">
                            {day}-{convertIndexToMonth(+month).toLowerCase()},{" "}
                            {convertDayToWeekDay(currentDay[0].day)}
                          </h6>
                          {currentDay.map(({ transfer }) => {
                            const fromUser =
                              transfer.senderId?._id.toString() ===
                              user?.result?._id.toString();
                            return (
                              <TransferDetails
                                fromUser={fromUser}
                                transfer={transfer}
                                key={transfer._id}
                              />
                            );
                          })}
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
export default ReportsPage;

function TransferDetails({
  transfer,
  fromUser,
}: {
  transfer: TransferInterface;
  fromUser: boolean;
}) {
  const date = new Date(transfer.date);
  const image = fromUser
    ? transfer.receiverId?.image
    : transfer.senderId?.image;
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <img
          className="rounded-full shadow-lg h-6 w-6 object-cover"
          src={
            image
              ? `http://localhost:4000/api/files/get/${image}`
              : "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          }
          alt={transfer.receiverId?.fullName}
        />
      </span>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="items-center justify-between mb-3 sm:flex">
          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </time>
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
            {fromUser
              ? `${transfer.receiverId?.fullName}ga`
              : `${transfer.senderId?.fullName} sizga`}{" "}
            <span
              className={`font-semibold text-gray-900  ${
                fromUser ? "text-red-600" : "text-green-600"
              }`}
            >
              {transfer.amount} so'm
            </span>{" "}
            pul o'tkaz{fromUser ? "il" : ""}di
          </div>
        </div>
        <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
          {transfer.description}
        </div>
      </div>
    </li>
  );
}
