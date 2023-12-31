"use client";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {userInfoQuery} from "@/app/utils/queryFunctions";
import Text from "../components/Text";
import {useMutationFunc, submitForm} from "@/app/utils/mutationFunctions";
import Toast from "@/app/components/Toast";
import Spinner from "@/app/components/Spinner";
import BasicUserDetails from "@/app/settings/components/BasicUserDetails";
import ContactSettings from "@/app/settings/components/ContactSettings";
import PasswordSettings from "@/app/settings/components/PasswordSettings";
import SubmitSettings from "@/app/settings/components/SubmitSettings";
import SEOHead from "@/app/components/SEOHead";


function SettingsPage() {
    const {data} = useQuery("user", userInfoQuery);
    const mutation = useMutationFunc('/api/user/update', 'PUT', true)
    const queryClient = useQueryClient()
    const submit = submitForm(mutation, queryClient)
    return (
        <>
            <head>
                <SEOHead title='Sozlamalar'/>
            </head>
            <div className="p-4 text-center">
                <Text size='text-md'>Sozlamalar</Text>
                {data && data.result ? (
                    <form onSubmit={submit}>
                        <BasicUserDetails details={data.result}/>
                        <br/>
                        <ContactSettings details={data.result}/>
                        <br/>
                        <PasswordSettings/>
                        <SubmitSettings/>
                    </form>

                ) : (
                    <div className='w-full mt-24 flex justify-center'><Spinner
                        size={'8'}/></div>
                )}
            </div>
            <Toast/>
        </>
    );
}

export default SettingsPage;
