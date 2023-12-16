import {TransferInterface} from "@/app/types";
import React, {createContext, useContext} from "react";

export const TransferContext = createContext(
    {} as {
        transferDetails?: TransferInterface<string>;
        setTransferDetails: React.Dispatch<React.SetStateAction<TransferInterface<string>>>;
    }
);
export const useTransferContext = () => {
    return useContext(TransferContext);
};
