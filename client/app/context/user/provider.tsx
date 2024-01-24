import { ReactNode } from "react";
import { UserContext } from "./context";
import { UserResponse } from "@/app/types";

function UserProvider({
  response,
  children,
}: {
  children: ReactNode;
  response: UserResponse;
}) {
  return (
    <UserContext.Provider value={response}>{children}</UserContext.Provider>
  );
}
export default UserProvider;
