"use client";
import BasicUserDetails from "@/app/settings/components/BasicUserDetails";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";
import H2 from "@/app/components/H2";

function SettingsPage() {
  const { data } = useQuery("user", userInfoQuery);
  return (
    <div className='p-4 text-center'>
        <H2>Sozlamalar</H2>
      {data && data.result ? (
        <BasicUserDetails details={data.result} />
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default SettingsPage;
