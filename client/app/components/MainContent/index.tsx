"use client";
import React, { useEffect, useMemo } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import TransferProvider from "@/app/context/transfer/provider";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import { ReactQueryDevtools } from "react-query/devtools";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import { useUserInfoQuery } from "@/app/utils/queryFunctions";
import UserProvider from "@/app/context/user/provider";

function MainContent({ children }: { children: React.ReactNode }) {
  const token = useAuth();
  const router = useRouter();
  const path = usePathname();
  const queryClient = useMemo(() => new QueryClient(), []);
  const userInfoQuery = useUserInfoQuery();
  const { data } = useQuery("user", userInfoQuery);
  useEffect(() => {
    if (token === "none" && path !== "/auth/register")
      router.push("/auth/login");
  }, [token, path, router]);
  return (
    <QueryClientProvider client={queryClient}>
      <TransferProvider>
        <header>
          <Navbar />
        </header>
        <main className="flex">
          <SideBar />
          <div className="w-full h-full">
            {token || path.startsWith("/auth/") ? (
              <UserProvider userData={data?.result}>children</UserProvider>
            ) : (
              <div className="w-full mt-24 flex justify-center">
                <Spinner size={"8"} />
              </div>
            )}
          </div>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </TransferProvider>
    </QueryClientProvider>
  );
}

export default MainContent;
