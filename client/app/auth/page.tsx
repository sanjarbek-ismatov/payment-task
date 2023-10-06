import H2 from "@/app/components/H2";
import { ComponentProps } from "react";
import DefaultInput from "../components/DefaultInput";
import CheckboxWithLabel from "../components/CheckboxWithLabel";
import Link from "next/link";
import DefaultButton from "../components/DefaultButton";

function AuthPage() {
  return (
    <div className="w-full pt-8">
      <div className="text-center py-5">
        <H2>Paymentga xush kelibsiz!</H2>
      </div>
      <div className="flex justify-center">
        <form className="block mx-5 w-full max-w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <DefaultInput type="tel" placeholder="+998999999999" required />
          <DefaultInput type="password" placeholder="Parolingiz" required />
          <CheckboxWithLabel label="Meni eslab qol" />
          <DefaultButton type="submit">Kirish</DefaultButton>
          <Link
            href="/auth/register"
            className="inline-flex mx-2 items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Ro'yhatdan o'tish
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default AuthPage;
