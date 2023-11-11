import {UserInterface} from "@/app/types";
import Card from "@/app/components/Card";
import SettingCard from "@/app/settings/components/SettingCard";
import DefaultInput from "@/app/components/DefaultInput";

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
export default ContactSettings