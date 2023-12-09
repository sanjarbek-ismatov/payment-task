"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import {Inter} from "next/font/google";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import Script from "next/script";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {useAuth} from "./hooks/useAuth";
import AuthComponent from "./components/AuthComponent";
import TransferProvider from "@/app/context/transfer/provider";
import React, {useMemo} from "react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const token = useAuth();
    const queryClient = useMemo(() => new QueryClient(), [])
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
                    <Navbar/>
                </header>
                <main className="flex">
                    <SideBar/>
                    <div className="w-full h-full">
                        {token ? children : <AuthComponent/>}
                    </div>
                </main>
                <ReactQueryDevtools initialIsOpen={false}/>
            </TransferProvider>
        </QueryClientProvider>
        <div className="fixed top-0 left-0 z-50 bg-pink-500 text-white shadow-md px-2 rounded-bl font-mono">
            <span className="sm:hidden">default</span>
            <span className="hidden sm:inline md:hidden">sm</span>
            <span className="hidden md:inline lg:hidden">md</span>
            <span className="hidden lg:inline xl:hidden">lg</span>
            <span className="hidden xl:inline">xl</span>
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"/>
        </body>
        </html>
    );
}
