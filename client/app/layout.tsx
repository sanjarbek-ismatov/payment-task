"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import Script from "next/script";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useAuth } from "./hooks/useAuth";
import AuthComponent from "./components/AuthComponent";
import TransferProvider from "@/app/context/transfer/provider";
import { userInfoQuery } from "./utils/queryFunctions";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuth();
  const queryClient = new QueryClient();
  return (
    <html className="dark" lang="en">
      <head>
        <title>Payment</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen h-full w-full dark:bg-gray-900`}
      >
        <QueryClientProvider client={queryClient}>
          <TransferProvider>
            <header>
              <Navbar />
            </header>
            <main className="flex">
              <SideBar />
              <div className="w-full h-full">
                {token ? children : <AuthComponent />}
              </div>
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
          </TransferProvider>
        </QueryClientProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}
