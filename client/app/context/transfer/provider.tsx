import { ReactNode, useEffect, useState } from "react";
import { TransferContext } from "./context";
import { TransferInterface } from "@/app/types";
import { useUserContext } from "../user/context";

function TransferProvider({ children }: { children: ReactNode }) {
  const [transferDetails, setTransferDetails] = useState<
    TransferInterface<string>
  >({} as TransferInterface<string>);
  const { data } = useUserContext();
  const id = data?.result?.cards[0]?._id;
  useEffect(() => {
    setTransferDetails((prev) => ({
      ...prev,
      senderCard: id,
    }));
  }, [data, id]);
  return (
    <TransferContext.Provider value={{ transferDetails, setTransferDetails }}>
      {children}
    </TransferContext.Provider>
  );
}

export default TransferProvider;
