import { ReactNode } from "react";
import { UserContext } from "./context";
import { UserInterface } from "@/app/types";

function UserProvider({
  userData,
  children,
}: {
  children: ReactNode;
  userData?: UserInterface;
}) {
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
export default UserProvider;
