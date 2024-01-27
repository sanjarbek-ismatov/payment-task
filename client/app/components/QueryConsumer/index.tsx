import React, { ReactNode, useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { usePathname, useRouter } from "next/navigation";
import TransferProvider from "@/app/context/transfer/provider";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import Spinner from "@/app/components/Spinner";

import { useAuth } from "@/app/hooks/useAuth";
import { useUserContext } from "@/app/context/user/context";
import ErrorComponent from "../ErrorComponent";
function QueryConsumer({ children }: { children: ReactNode }) {
  const token = useAuth();
  const router = useRouter();
  const path = usePathname();
  const { data, isLoading } = useUserContext();
  useEffect(() => {
    if (token === "none" && path !== "/auth/register")
      router.push("/auth/login");
  }, [token, path, router]);
  return (
    <TransferProvider>
      <header>
        <Navbar />
      </header>
      <main className="flex">
        <SideBar />
        <div className="w-full h-full">
          {(token === "none" &&
            (path === "/auth/register" || path === "/auth/login")) ||
          data?.code === 200 ? (
            children
          ) : isLoading ? (
            <div className="w-full mt-24 flex justify-center">
              <Spinner size={"8"} />
            </div>
          ) : (
            <ErrorComponent />
          )}
          {/* {isLoading ? (
            <div className="w-full mt-24 flex justify-center">
              <Spinner size={"8"} />
            </div>
          ) : data?.code === 200 ? (
            children
          ) : (
            <ErrorComponent />
          )} */}
        </div>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </TransferProvider>
  );
}
export default QueryConsumer;
