"use client"
import React, {useEffect, useMemo} from "react";
import {useAuth} from "@/app/hooks/useAuth";
import {QueryClient, QueryClientProvider} from "react-query";
import TransferProvider from "@/app/context/transfer/provider";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import {ReactQueryDevtools} from "react-query/devtools";
import {usePathname, useRouter} from "next/navigation";
import Spinner from "@/app/components/Spinner";

function MainContent({children}: { children: React.ReactNode }) {
    const token = useAuth();
    const router = useRouter()
    const path = usePathname()
    const queryClient = useMemo(() => new QueryClient(), [])
    useEffect(() => {
        if (token === "none" && path !== "/auth/register") router.push('/auth/login')
    }, [token, path])
    return <QueryClientProvider client={queryClient}>
        <TransferProvider>
            <header>
                <Navbar/>
            </header>
            <main className="flex">
                <SideBar/>
                <div className="w-full h-full">
                    {token || path.startsWith("/auth/") ? children :
                        <div className='w-full mt-24 flex justify-center'><Spinner
                            size={'8'}/></div>}
                </div>
            </main>
            <ReactQueryDevtools initialIsOpen={false}/>
        </TransferProvider>
    </QueryClientProvider>;
}

export default MainContent