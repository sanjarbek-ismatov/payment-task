import Card from "@/app/components/Card";
import Text from "@/app/components/Text";
import SettingCard from "@/app/settings/components/SettingCard";
import {Input as DefaultInput} from "@/app/components/DefaultInput";

function PasswordSettings() {
    return (
        <Card style={{margin: "20px auto"}} fullWidth>
            <div className="mb-4">
                <Text size="text-md">Parolni almashtirish</Text>
            </div>
            <SettingCard>
                <div className="w-full">
                    <DefaultInput type="password" label="Joriy parol"/>
                    <DefaultInput type="password" name="password" label="Yangi parol"/>
                    <DefaultInput type="password" label="Qayta takrorlang"/>
                </div>
            </SettingCard>
        </Card>
    );
}

export default PasswordSettings