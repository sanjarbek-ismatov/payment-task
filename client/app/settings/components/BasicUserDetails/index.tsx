import ProfileImageChanger from "@/app/settings/components/ProfileImageChanger";
import DefaultInput from "@/app/components/DefaultInput";
import { UserInterface } from "@/app/types";
import Card from "@/app/components/Card";
import SettingCard from "@/app/settings/components/SettingCard";
import Text from "@/app/components/Text";
import Select from "@/app/components/Select";
import countries from '@/app/data/countries.json'
function BasicUserDetails({ details }: { details: UserInterface }) {
  return (
    <Card style={{ margin: "20px auto" }}>
      <div className="mb-4">
        <Text size="text-md">Foydalanuvchi ma'lumotlari</Text>
      </div>
      <SettingCard>
        <ProfileImageChanger src={details.image} />
        <div className="flex-1 m-3">
          <div className="flex w-full">
            <DefaultInput
              name="fullName"
              type="text"
              label="Ismingiz"
              defaultValue={details.fullName}
            />
            <DefaultInput
              name="birthday"
              type="date"
              label="Tug'ilgan sanangiz"
              defaultValue={new Date(details.birthday)
                .toISOString()
                .substring(0, 10)}
            />
          </div>
            <Select name='country' label='Mamlakat' defaultValue={details.country}>
                {countries.map((country) => (
                    <option key={country.code} value={country.name}>{country.name}</option>
                ))}
            </Select>
        </div>
      </SettingCard>
    </Card>
  );
}
export default BasicUserDetails;
