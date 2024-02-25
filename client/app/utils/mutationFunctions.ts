"use client";
import {FormEvent} from "react";
import {toast} from "react-toastify";
import {Mutation, ServerResponse} from "../types";
import {getToken} from "./getToken";
import {QueryClient, useMutation} from "react-query";
import {useServer} from "@/app/context/server";
import {useToastState} from "@/app/context/toast";

export function useMutationFunc<B extends BodyInit, R = null>(
    url: string,
    method: string,
    withToken: boolean,
    forAuth?: "session" | "local"
) {
    const serverURL = useServer();

    const func = async (body: B) => {
        const token = getToken();

        const fixedURL = serverURL?.url + url;

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
            const gotToken = response.headers.get("x-token") || "";
            if (forAuth) {
                forAuth === "local"
                    ? localStorage.setItem("x-token", gotToken)
                    : sessionStorage.setItem("x-token", gotToken);
            }
            const data: ServerResponse<R> = await response.json();
            if (response.ok) return data;
            return Promise.reject(data);
        } catch (ex) {
            return {} as ServerResponse<R>;
        }
    };
    return useMutation(func);
}

export const useSubmitForm = (
    mutation: Mutation,
    queryClient?: QueryClient,
    queries?: string[],
    ...cbs: (() => void)[]
) => {
    const [, dispatch] = useToastState()
    return async function (event: FormEvent) {
        event.preventDefault();
        dispatch({type: "loading", payload: {message: "Loading..."}})
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const currentFormElement = event.currentTarget as HTMLFormElement;
        if (currentFormElement.cardNumber) {
            formData.set(
                "cardNumber",
                currentFormElement.cardNumber.value.split(" ").join("")
            );
        }
        mutation.mutateAsync(formData, {
            onSuccess() {
                queries?.forEach((query) => {
                    queryClient?.invalidateQueries(query);
                });
                for (const cb of cbs) {
                    cb();
                }
            },
        }).then(
            result => dispatch({
                type: "success",
                payload: result
            }),
            error => {
                dispatch({
                    type: "error",
                    payload: error
                })
            }
        )

    };
};

export const useSubmitData = (
    mutation: Mutation,
    queryClient?: QueryClient,
    body?: any,
    ...queries: string[]
) => {
    toast.loading("lolool");
    //   return toast.promise(
    //     async () => {
    //       const promise = mutation.mutateAsync(body, {
    //         onSuccess() {
    //           queries.forEach((query) => {
    //             queryClient?.invalidateQueries(query);
    //           });
    //         },
    //       });
    //       return promise;
    //     },
    //     {
    //       success: "Bajarildi",
    //       error: "Nimadir xato ketdi",
    //       pending: "Bajarilmoqda...",
    //     },
    //     toastOptions
    //   );
};
