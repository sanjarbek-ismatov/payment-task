import type { UserResponse } from "@/app/types";
import { createContext, useContext } from "react";

const UserContext = createContext({} as UserResponse);

const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext };
