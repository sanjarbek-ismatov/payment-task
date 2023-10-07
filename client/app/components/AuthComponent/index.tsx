"use client";
import H2 from "@/app/components/H2";
import DefaultInput from "@/app/components/DefaultInput";
import CheckboxWithLabel from "@/app/components/CheckboxWithLabel";
import Link from "next/link";
import DefaultButton from "@/app/components/DefaultButton";
import FormCard from "@/app/components/FormCard";
import LinkArrowRightIcon from "@/app/components/LinkArrowRightIcon";
import { useMutation } from "react-query";
import { FormEvent, useCallback, useState } from "react";
import Toast from "@/app/components/Toast";
import { toast } from "react-toastify";
import { toastOptions } from "@/app/data/variables";

function AuthComponent() {
  const [error, setError] = useState<string | undefined>();
  const [rememberToken, setRememberToken] = useState(false);
  const mutation = useMutation(async (body: BodyInit) => {
    const res = await fetch("http://localhost:4000/api/user/signing", {
      method: "POST",
      body,
    });
    const data = await res.json();
    const token = res.headers.get("x-token");
    if (res.ok) return { data, token };
    return Promise.reject(data.message);
  });
  const formSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      toast
        .promise(
          async () => {
            const promise = mutation.mutateAsync(
              new FormData(event.currentTarget as HTMLFormElement)
            );
            const response = await promise;
            setError(response.data.message);
            if (response.token)
              rememberToken
                ? localStorage.setItem("token", response.token)
                : sessionStorage.setItem("token", response.token);
            return promise;
          },
          {
            success: "Bajarildi",
            error: error ?? "Nimadir xato ketdi",
            pending: "Bajarilmoqda...",
          },
          toastOptions
        )
        .then(() => window.location.reload());
    },
    [error, mutation, rememberToken]
  );
  return (
    <>
      <div className="w-full pt-8">
        <div className="text-center py-5">
          <H2>Paymentga xush kelibsiz!</H2>
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
              <LinkArrowRightIcon />
            </Link>
          </FormCard>
        </div>
      </div>
      <Toast />
    </>
  );
}

export default AuthComponent;
