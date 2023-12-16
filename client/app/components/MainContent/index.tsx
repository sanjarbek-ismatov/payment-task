"use client"
import React, {useMemo} from "react";
import {useAuth} from "@/app/hooks/useAuth";
import {QueryClient, QueryClientProvider} from "react-query";
import TransferProvider from "@/app/context/transfer/provider";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import AuthComponent from "@/app/components/AuthComponent";
import {ReactQueryDevtools} from "react-query/devtools";

function MainContent({children}: { children: React.ReactNode }) {
    const token = useAuth();
    const queryClient = useMemo(() => new QueryClient(), [])
    return <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>;
}

export default MainContent