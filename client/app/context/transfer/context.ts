import { TransferInterface } from "@/app/types";
import React, { createContext, useContext } from "react";

export const TransferContext = createContext(
  {} as {
    transferDetails?: TransferInterface;
    setTransferDetails: React.Dispatch<React.SetStateAction<TransferInterface>>;
  }
);
export const useTransferContext = () => {
  return useContext(TransferContext);
};
