"use client";
import BasicUserDetails from "@/app/settings/components/BasicUserDetails";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";
import H2 from "@/app/components/H2";
import ContactSettings from "@/app/settings/components/ContactSettings";
import SettingCard from "@/app/settings/components/SettingCard";
import DefaultInput from "@/app/components/DefaultInput";
import Card from "@/app/components/Card";
import DefaultButton from "@/app/components/DefaultButton";
import GradientButton from "@/app/components/GradientButton";

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
          <br />
          <Card style={{ margin: "20px auto" }}>
            <SettingCard>
              <div className="w-full">
                <DefaultInput type="password" label="Joriy parol" />
                <DefaultInput
                  type="password"
                  name="password"
                  label="Yangi parol"
                />
                <DefaultInput type="password" label="Qayta takrorlang" />
              </div>
            </SettingCard>
          </Card>
          <div>
            <DefaultButton style={{ margin: "0 10px" }} type="submit">
              O'zgarishlarni saqlash
            </DefaultButton>
            <GradientButton>Kartalar bo'limi</GradientButton>
          </div>
        </form>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default SettingsPage;
