import { ReactNode, useState } from "react";
import { SelectedCardContext } from "./context";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";

function SelectedCardProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery("user", userInfoQuery);
  const [cardId, setCardId] = useState(data?.result?.cards[0]._id);
  return (
    <SelectedCardContext.Provider value={{ cardId, setCardId }}>
      {children}
    </SelectedCardContext.Provider>
  );
}
export default SelectedCardProvider;
