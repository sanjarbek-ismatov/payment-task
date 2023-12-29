"use client"
import {ServerContext} from "@/app/context/server/index";
import {ReactNode} from "react";

function ServerContextProvider({children, url}: { children: ReactNode; url: string }) {
    return <ServerContext.Provider value={{url}}>{children}</ServerContext.Provider>
}

export default ServerContextProvider