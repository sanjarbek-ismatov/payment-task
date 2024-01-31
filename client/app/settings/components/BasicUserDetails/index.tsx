import ProfileImageChanger from "@/app/settings/components/ProfileImageChanger";
import {Input, Select} from "@/app/components/DefaultInput";
import {UserInterface} from "@/app/types";
import Card from "@/app/components/Card";
import SettingCard from "@/app/settings/components/SettingCard";
import Text from "@/app/components/Text";
import countries from '@/app/data/countries.json'

function BasicUserDetails({details}: { details: UserInterface }) {
    return (
        <Card style={{margin: "20px auto"}} fullWidth>
            <div className="mb-4">
                <Text size="text-md">Foydalanuvchi ma'lumotlari</Text>
            </div>
            <SettingCard>
                <ProfileImageChanger src={details.image}/>
                <div className="flex-1 m-3">
                    <div className="flex flex-col lg:flex-row items-center w-full">
                        <Input
                            name="fullName"
                            type="text"
                            label="Ismingiz"
                            defaultValue={details.fullName}
                        />
                        <Input
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
