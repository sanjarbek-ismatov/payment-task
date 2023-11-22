"use client"
import DefaultButton from "@/app/components/DefaultButton";
import DefaultInput from "@/app/components/DefaultInput";
import FormCard from "@/app/components/FormCard";
import Text from "../../components/Text";
import LinkArrowRightIcon from "@/app/components/LinkArrowRightIcon";
import Select from "@/app/components/Select";
import Link from "next/link";
import countries from "@/app/data/countries.json";
import {useMutation} from "react-query";
import {mutationFunc, submitForm} from "@/app/utils/mutationFunctions";
import {useRouter} from "next/navigation";
import Toast from "@/app/components/Toast";

function RegisterPage() {
    const mutation = useMutation(mutationFunc('/api/user/signup', "POST", false))
    const router = useRouter()
    const formSubmit = submitForm(mutation, undefined, [], () => router.replace('/'))
    return (
        <>
            <div className="w-full pt-8">
                <div className="text-center py-5">
                    <Text>Ro'yhatdan o'tish</Text>
                </div>
                <div className="flex justify-center">
                    <FormCard onSubmit={formSubmit}>
                        <DefaultInput
                            name="fullName"
                            type="text"
                            label="Ism"
                            placeholder="To'liq ismingiz"
                            required
                        />
                        <DefaultInput
                            label="Telefon raqam"
                            name="phone"
                            type="tel"
                            placeholder="Telefon raqamingiz"
                            required
                        />
                        <DefaultInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Pochtangiz"
                            required
                        />
                        <DefaultInput
                            name="birthday"
                            type="date"
                            placeholder="Tug'ilgan sana"
                            label="Tug'ilgan sanangiz"
                            required
                        />
                        <Select name='country' label="Mamlakatingiz">
                            {countries.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </Select>
                        <DefaultInput name='password' type="password" label='Parol yarating' placeholder='**********'
                                      required/>
                        <div className="my-4">
                            <DefaultButton type="submit">Hisob yaratish</DefaultButton>
                            <Link
                                href="/auth"
                                className="inline-flex mx-2 items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Menda hisob mavjud
                                <LinkArrowRightIcon/>
                            </Link>
                        </div>
                    </FormCard>
                </div>
            </div>
            <Toast/>
        </>
    );
}

export default RegisterPage;
