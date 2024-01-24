import type { UserInterface } from "@/app/types";
import { createContext, useContext } from "react";

const UserContext = createContext({} as UserInterface | undefined);

const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext };
