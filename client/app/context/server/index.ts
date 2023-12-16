"use client"
import {createContext, useContext} from "react";

export interface ServerContextInterface {
    url: string
}

export const ServerContext = createContext({} as ServerContextInterface)

export const useServer = () => {
    return useContext(ServerContext)
}


