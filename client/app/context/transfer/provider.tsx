import { ReactNode, useEffect, useState } from "react";
import { TransferContext } from "./context";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";

function TransferProvider({ children }: { children: ReactNode }) {
  const [transferDetails, setTransferDetails] = useState<{
    selectedCardId?: string;
    selectedUserId?: string;
    amount?: number;
  }>({

  })
  const { data } = useQuery("user", userInfoQuery);
  const id = data?.result?.cards[0]._id;
  useEffect(() => {
    setTransferDetails(prev => ({
      ...prev,
      selectedCardId: id
    }))
  }, [data, id]);
  return (
    <TransferContext.Provider value={{  }}>
      {children}
    </TransferContext.Provider>
  );
}
export default TransferProvider;
