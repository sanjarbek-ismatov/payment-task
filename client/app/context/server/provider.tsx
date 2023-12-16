import {ServerContext} from "@/app/context/server/index";
import {ReactNode} from "react";

function ServerContextProvider({children}: { children: ReactNode }) {
    const url = process.env.SERVER_URL || ""
    return <ServerContext.Provider value={{url}}>{children}</ServerContext.Provider>
}

export default ServerContextProvider