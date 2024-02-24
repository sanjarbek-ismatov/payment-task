import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";
import SEOHead from "@/app/components/SEOHead";
import MainContent from "@/app/components/MainContent";
import ServerContextProvider from "@/app/context/server/provider";
import Toast from "./components/Toast-test";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverUrl = process.env.SERVER_URL || "";
  return (
    <html className="dark" lang="en">
      <head>
        <SEOHead
          title="Youpay - to'lovlarni oson amalga oshiring"
          description="Youpay bu portfolio yig'uvchi dasturchi tomonidan ishlab chiqilgan to'lov tizimi. Albatta bu haqiqiy emas, lekin yetarlicha mehnat qilingan"
        />
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
        <ServerContextProvider url={serverUrl}>
          <MainContent>{children}</MainContent>
          <Toast />
        </ServerContextProvider>
        {/*<div className="fixed top-0 left-0 z-50 bg-pink-500 text-white shadow-md px-2 rounded-bl font-mono">*/}
        {/*    <span className="sm:hidden">default</span>*/}
        {/*    <span className="hidden sm:inline md:hidden">sm</span>*/}
        {/*    <span className="hidden md:inline lg:hidden">md</span>*/}
        {/*    <span className="hidden lg:inline xl:hidden">lg</span>*/}
        {/*    <span className="hidden xl:inline">xl</span>*/}
        {/*</div>*/}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}
