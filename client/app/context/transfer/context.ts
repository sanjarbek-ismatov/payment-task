import { CreditCardInterface } from "@/app/types";
import React, {createContext, useContext} from "react";

export const TransferContext = createContext(
  {} as {
    transferDetails?: {selectedCardId?: string, selectedUserId?: string, amount?: number};
    setTransferDetails?:  React.Dispatch<React.SetStateAction
  },
);
export const useSelectedCardContext = () => {
    return useContext(TransferContext);
};
