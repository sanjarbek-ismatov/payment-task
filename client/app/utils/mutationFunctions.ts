import { FormEvent } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../data/variables";
import { Mutation, ServerResponse } from "../types";
import { getToken } from "./getToken";
import { QueryClient, UseMutationResult } from "react-query";

export  const mutationFunc = (url: string, method: string, withToken: boolean) => {
    return async (body: BodyInit) => {
      const token = getToken();
    
      const res = await fetch(url, {
        method,
        body,
        ...(withToken && {
          headers: {
            ["x-token"]: token || "",
            ["Content-Type"]: body instanceof FormData ? "multipart/form-data" : "application/json"
          },
        }),
      
      });
      try{
         const data = await res.json();
         if (res.ok) return data as ServerResponse;
         return Promise.reject(data.message);
      } catch(ex){
          return {} as ServerResponse
      }
    };
  };

  export const formSubmit = (mutation: Mutation, queryClient: QueryClient, ...queries: string[]) =>  {
    return async function (event: FormEvent) {
      event.preventDefault();
      toast.promise(
        async () => {
          const promise = mutation.mutateAsync(
            new FormData(event.currentTarget as HTMLFormElement),
            {
              onSuccess() {
                queries.forEach((query) => {
                  queryClient.invalidateQueries(query);
                });
              },
            }
          );
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
  }
  export const submitData = (mutation: Mutation, queryClient: QueryClient, body: any, ...queries: string[]) => {
    toast.promise(
      async () => {
        const promise = mutation.mutateAsync(
          JSON.stringify(body),
          {
            onSuccess() {
              queries.forEach((query) => {
                queryClient.invalidateQueries(query);
              });
            },
          }
        );
        return promise;
      },
      {
        success: "Bajarildi",
        error: "Nimadir xato ketdi",
        pending: "Bajarilmoqda...",
      },
      toastOptions
    );
  }