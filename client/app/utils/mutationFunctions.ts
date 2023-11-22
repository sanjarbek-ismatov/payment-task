import {FormEvent} from "react";
import {toast} from "react-toastify";
import {toastOptions} from "../data/variables";
import {Mutation, ServerResponse} from "../types";
import {getToken} from "./getToken";
import {QueryClient} from "react-query";
import getServerUrl from "@/app/utils/getServerUrl";

export function mutationFunc<B extends BodyInit, R = null>(
    url: string,
    method: string,
    withToken: boolean,
    forAuth?: "session" | "local"
) {
    return async (body: B) => {
        const token = getToken();
        const serverURL = getServerUrl()
        const fixedURL = serverURL + url

        try {
            const response = await fetch(fixedURL, {
                method,
                body,
                headers: {
                    ...(!(body instanceof FormData) && {
                        ["Content-Type"]: "application/json",
                    }),
                    ...(withToken && {
                        ["x-token"]: token || "",
                    }),
                },
            });
            const gotToken = response.headers.get('x-token') || ""
            if (forAuth) {
                forAuth === 'local' ? localStorage.setItem("x-token", gotToken)
                    : sessionStorage.setItem("x-token", gotToken);
            }
            const data: ServerResponse<R> = await response.json();
            if (response.ok) return data
            return Promise.reject(data.message);
        } catch (ex) {
            return {} as ServerResponse<R>;
        }
    };
}

export const submitForm = (
    mutation: Mutation,
    queryClient?: QueryClient,
    queries?: string[],
    ...cbs: (() => void)[]
) => {
    return async function (event: FormEvent) {
        event.preventDefault();
        toast.promise(
            async () => {
                const formData = new FormData(event.currentTarget as HTMLFormElement);
                const currentFormElement = event.currentTarget as HTMLFormElement;
                if (currentFormElement.cardNumber) {
                    formData.set(
                        "cardNumber",
                        currentFormElement.cardNumber.value.split(" ").join("")
                    );
                }
                return mutation.mutateAsync(formData, {
                    onSuccess() {
                        queries?.forEach((query) => {
                            queryClient?.invalidateQueries(query);
                        });
                        for (const cb of cbs) {
                            cb()
                        }
                    },
                });
            },
            {
                success: "Bajarildi",
                error: "Nimadir xato ketdi",
                pending: "Bajarilmoqda...",
            },
            toastOptions
        );
    };
};
export const submitData = (
    mutation: Mutation,
    queryClient?: QueryClient,
    body?: any,
    ...queries: string[]
) => {
    return toast.promise(
        async () => {
            const promise = mutation.mutateAsync(body, {
                onSuccess() {
                    queries.forEach((query) => {
                        queryClient?.invalidateQueries(query);
                    });
                },
            });
            return promise;
        },
        {
            success: "Bajarildi",
            error: "Nimadir xato ketdi",
            pending: "Bajarilmoqda...",
        },
        toastOptions
    );
};
