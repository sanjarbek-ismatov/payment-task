import { CreditCardInterface } from "@/app/types";
import { createContext, useContext } from "react";

export const SelectedCardContext = createContext(
  {} as {
    cardId?: CreditCardInterface["_id"];
    setCardId: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
);
export const useSelectedCardContext = () => {
  const selectedCardContext = useContext(SelectedCardContext);
  return selectedCardContext;
};
