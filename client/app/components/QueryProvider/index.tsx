import { ReactNode } from "react";
import { useUserInfoQuery } from "@/app/utils/queryFunctions";
import UserProvider from "@/app/context/user/provider";
import { useQuery } from "react-query";
function QueryProvider({ children }: { children: ReactNode }) {
  const userInfoQuery = useUserInfoQuery();
  const { data, refetch } = useQuery("user", userInfoQuery);
  return <UserProvider response={{ data, refetch }}>{children}</UserProvider>;
}
export default QueryProvider;
