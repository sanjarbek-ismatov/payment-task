"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth");
  }, []);
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
          <header>
            <Navbar />
          </header>
          <main className="flex">
            <SideBar />
            <div className="w-full h-full">{children}</div>
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}
