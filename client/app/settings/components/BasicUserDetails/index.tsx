import ProfileImageChanger from "@/app/settings/components/ProfileImageChanger";
import DefaultInput from "@/app/components/DefaultInput";
import { UserInterface } from "@/app/types";
import Card from "@/app/components/Card";
import SettingCard from "@/app/settings/components/SettingCard";

function BasicUserDetails({ details }: { details: UserInterface }) {
  return (
    <Card style={{ margin: "20px auto" }}>
     <SettingCard>
        <ProfileImageChanger src={details.image} />
        <div className="flex-1 m-3">
          <div className='flex w-full'>
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
          <DefaultInput
            name="country"
            label="Mamlakat"
            type='text'
            defaultValue={details.country}
          />
        </div>
     </SettingCard>
    </Card>
  );
}
export default BasicUserDetails;
