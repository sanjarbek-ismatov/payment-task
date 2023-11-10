"use client";
import BasicUserDetails from "@/app/settings/components/BasicUserDetails";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";
import H2 from "@/app/components/H2";
import Card from "@/app/components/Card";
import DefaultInput from "@/app/components/DefaultInput";
import { UserInterface } from "@/app/types";
import SettingCard from "@/app/settings/components/SettingCard";

function ContactSettings({ details }: { details: UserInterface }) {
  return (
    <Card>
      <SettingCard>
        <DefaultInput
          name="phone"
          label="Telefon raqami"
          defaultValue={details.phone}
        />
        <DefaultInput name="email" label="Email" defaultValue={details.email} />
      </SettingCard>
    </Card>
  );
}

function SettingsPage() {
  const { data } = useQuery("user", userInfoQuery);
  return (
    <div className="p-4 text-center">
      <H2>Sozlamalar</H2>
      {data && data.result ? (
        <form>
          <BasicUserDetails details={data.result} />
          <br />
          <ContactSettings details={data.result} />
        </form>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default SettingsPage;
