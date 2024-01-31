import {UserInterface} from "@/app/types";
import Card from "@/app/components/Card";
import SettingCard from "@/app/settings/components/SettingCard";
import {Input as DefaultInput} from "@/app/components/DefaultInput";
import Text from "@/app/components/Text";

function ContactSettings({details}: { details: UserInterface }) {
    return (
        <Card fullWidth>
            <div className="mb-4">
                <Text size="text-md">Kontakt ma'lumotlari</Text>
            </div>
            <SettingCard>
                <DefaultInput
                    name="phone"
                    label="Telefon raqami"
                    defaultValue={details.phone}
                />
                <DefaultInput name="email" label="Email" defaultValue={details.email}/>
            </SettingCard>
        </Card>
    );
}

export default ContactSettings