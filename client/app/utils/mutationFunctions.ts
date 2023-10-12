import { FormEvent } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../data/variables";
import { Mutation, ServerResponse } from "../types";
import { getToken } from "./getToken";
import { QueryClient, UseMutationResult } from "react-query";

export const mutationFunc = (
  url: string,
  method: string,
  withToken: boolean
) => {
  return async (body: BodyInit) => {
    const token = getToken();

    const res = await fetch(url, {
      method,
      body,
      ...(withToken && {
        headers: {
          ["x-token"]: token || "",
          ...(!(body instanceof FormData) && {
            ["Content-Type"]: "application/json",
          }),
        },
      }),
    });
    try {
      const data = await res.json();
      if (res.ok) return data as ServerResponse;
      return Promise.reject(data.message);
    } catch (ex) {
      return {} as ServerResponse;
    }
  };
};

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
  queryClient: QueryClient,
  body: any,
  ...queries: string[]
) => {
  toast.promise(
    async () => {
      const promise = mutation.mutateAsync(JSON.stringify(body), {
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
