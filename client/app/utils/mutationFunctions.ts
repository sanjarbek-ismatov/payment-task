import { FormEvent } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../data/variables";
import { Mutation, ServerResponse } from "../types";
import { getToken } from "./getToken";
import { QueryClient } from "react-query";

export function mutationFunc<B extends BodyInit, R = null>(
  url: string,
  method: string,
  withToken: boolean
) {
  return async (body: B) => {
    const token = getToken();
    const res = await fetch(url, {
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
    try {
      const data = await res.json();
      if (res.ok) return data as ServerResponse<R>;
      return Promise.reject(data.message);
    } catch (ex) {
      return {} as ServerResponse<R>;
    }
  };
}

export const formSubmit = (
  mutation: Mutation,
  queryClient: QueryClient,
  ...queries: string[]
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
        const promise = mutation.mutateAsync(formData, {
          onSuccess() {
            queries.forEach((query) => {
              queryClient.invalidateQueries(query);
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
