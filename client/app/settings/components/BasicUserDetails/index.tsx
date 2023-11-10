import ProfileImageChanger from "@/app/settings/components/ProfileImageChanger";
import DefaultInput from "@/app/components/DefaultInput";
import { UserInterface } from "@/app/types";
import Card from "@/app/components/Card";

function BasicUserDetails({ details }: { details: UserInterface }) {
  return (
    <Card>
      <form className="flex w-[800px] items-end">
        <ProfileImageChanger src={details.image} />
        <div className="flex-1 m-3">
          <DefaultInput
            name="fullName"
            type="text"
            defaultValue={details.fullName}
          />
          <DefaultInput
            name="birthday"
            type="date"
            defaultValue={new Date(details.birthday)
              .toISOString()
              .substring(0, 10)}
          />
        </div>
      </form>
    </Card>
  );
}
export default BasicUserDetails;
