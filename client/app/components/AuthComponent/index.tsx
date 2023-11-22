"use client";
import Text from "../Text";
import DefaultInput from "@/app/components/DefaultInput";
import CheckboxWithLabel from "@/app/components/CheckboxWithLabel";
import Link from "next/link";
import DefaultButton from "@/app/components/DefaultButton";
import FormCard from "@/app/components/FormCard";
import LinkArrowRightIcon from "@/app/components/LinkArrowRightIcon";
import {useMutation, useQueryClient} from "react-query";
import {useState} from "react";
import Toast from "@/app/components/Toast";
import {mutationFunc, submitForm} from "@/app/utils/mutationFunctions";

function AuthComponent() {
    const queryClient = useQueryClient()
    const [rememberToken, setRememberToken] = useState(false);
    const mutation = useMutation(mutationFunc("/api/user/signing", "POST", true, rememberToken ? "local" : "session"))
    const formSubmit = submitForm(mutation, queryClient, [], () => window.location.reload())
    return (
        <>
            <div className="w-full pt-8">
                <div className="text-center py-5">
                    <Text>Paymentga xush kelibsiz!</Text>
                </div>
                <div className="flex justify-center">
                    <FormCard onSubmit={formSubmit}>
                        <DefaultInput
                            label="Pochta"
                            type="email"
                            name="email"
                            placeholder="Pochtangiz"
                            required
                        />
                        <DefaultInput
                            label="Parol"
                            type="password"
                            name="password"
                            placeholder="Parolingiz"
                            required
                        />
                        <CheckboxWithLabel
                            checked={rememberToken}
                            onChange={() => setRememberToken(!rememberToken)}
                            label="Meni eslab qol"
                        />
                        <DefaultButton type="submit">Kirish</DefaultButton>
                        <Link
                            href="/auth/register"
                            className="inline-flex mx-2 items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Ro'yhatdan o'tish
                            <LinkArrowRightIcon/>
                        </Link>
                    </FormCard>
                </div>
            </div>
            <Toast/>
        </>
    );
}

export default AuthComponent;
