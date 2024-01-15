import { ReactNode, useEffect, useState } from "react";
import { TransferContext } from "./context";
import { useQuery } from "react-query";
import { useUserInfoQuery } from "@/app/utils/queryFunctions";
import { TransferInterface } from "@/app/types";

function TransferProvider({ children }: { children: ReactNode }) {
  const userInfoQuery = useUserInfoQuery();
  const [transferDetails, setTransferDetails] = useState<
    TransferInterface<string>
  >({} as TransferInterface<string>);
  const { data } = useQuery("user", userInfoQuery);
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
