"use client";
import { TransferInterface } from "@/app/types";
import { useQuery } from "react-query";
import { useTransfersQuery } from "@/app/utils/queryFunctions";
import Text from "../components/Text";
import { useMemo } from "react";
import { convertDayToWeekDay, convertIndexToMonth } from "../utils/dateToRead";
import TransferDetails from "@/app/reports/components/TransferDetails";
import SEOHead from "@/app/components/SEOHead";
import Spinner from "@/app/components/Spinner";
import Image from "next/image";
import EmptyIcon from "@/public/icons/empty-icon.png";
import { useUserContext } from "../context/user/context";
function ReportsPage() {
  const transfersQuery = useTransfersQuery();
  const { data: transfers, isLoading } = useQuery("transfers", transfersQuery);
  const { data: user } = useUserContext();
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
    <>
      <head>
        <SEOHead title="Hisobotlar" />
      </head>
      <div className="p-4">
        <Text size="text-md">Hisobotlar</Text>
        {isLoading ? (
          <div className="w-full mt-24 flex justify-center">
            <Spinner size={"8"} />
          </div>
        ) : (
          !transfers?.result?.length && (
            <div className="flex items-center flex-col w-full pt-24">
              <Image className="w-56" src={EmptyIcon} alt="empty-icon" />
              <Text size="text-lg">Hali o'tkazmalar mavjud emas!</Text>
            </div>
          )
        )}
        {sortedByDates &&
          Object.keys(sortedByDates).map((year) => {
            const currentYear = sortedByDates[year];
            return (
              <div key={year} className="p-4">
                <Text size="text-3xl">{year} yil</Text>
                <hr className="my-4" />
                {Object.keys(currentYear).map((month) => {
                  const currentMonth = currentYear[month];
                  return (
                    <div key={month} className="p-2">
                      <h4 className="text-white text-xl font-bold">
                        {convertIndexToMonth(+month)} oyi
                      </h4>
                      <hr className="my-4" />
                      {Object.keys(currentMonth).map((day, id) => {
                        const currentDay = currentMonth[day];
                        return (
                          <ul
                            key={id}
                            className="relative m-5 border-l border-gray-200 dark:border-gray-700"
                          >
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
    </>
  );
}

export default ReportsPage;
