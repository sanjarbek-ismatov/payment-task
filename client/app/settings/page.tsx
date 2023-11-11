"use client";
import BasicUserDetails from "@/app/settings/components/BasicUserDetails";
import { useQuery } from "react-query";
import { userInfoQuery } from "@/app/utils/queryFunctions";
import Text from "../components/Text";
import ContactSettings from "@/app/settings/components/ContactSettings";
import SettingCard from "@/app/settings/components/SettingCard";
import DefaultInput from "@/app/components/DefaultInput";
import Card from "@/app/components/Card";
import DefaultButton from "@/app/components/DefaultButton";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";

function PasswordSettings() {
  return (
    <Card style={{ margin: "20px auto" }}>
      <div className="mb-4">
        <Text size="text-md">Parolni almashtirish</Text>
      </div>
      <SettingCard>
        <div className="w-full">
          <DefaultInput type="password" label="Joriy parol" />
          <DefaultInput type="password" name="password" label="Yangi parol" />
          <DefaultInput type="password" label="Qayta takrorlang" />
        </div>
      </SettingCard>
    </Card>
  );
}

function SettingsPage() {
  const { data } = useQuery("user", userInfoQuery);
  return (
    <div className="p-4 text-center">
      <Text>Sozlamalar</Text>
      {data && data.result ? (
        <form>
          <BasicUserDetails details={data.result} />
          <br />
          <ContactSettings details={data.result} />
          <br />
          <PasswordSettings />
          <div>
            <DefaultButton style={{ margin: "0 10px" }} type="submit">
              O'zgarishlarni saqlash
            </DefaultButton>
            <Link href="/">
              <GradientButton>Kartalar bo'limi</GradientButton>
            </Link>
          </div>
        </form>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default SettingsPage;
