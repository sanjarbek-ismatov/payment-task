import H2 from "@/app/components/H2";
import DefaultInput from "../components/DefaultInput";
import CheckboxWithLabel from "../components/CheckboxWithLabel";
import Link from "next/link";
import DefaultButton from "../components/DefaultButton";
import FormCard from "../components/FormCard";
import LinkArrowRightIcon from "../components/LinkArrowRightIcon";

function AuthPage() {
  return (
    <div className="w-full pt-8">
      <div className="text-center py-5">
        <H2>Paymentga xush kelibsiz!</H2>
      </div>
      <div className="flex justify-center">
        <FormCard>
          <DefaultInput type="tel" placeholder="+998999999999" required />
          <DefaultInput type="password" placeholder="Parolingiz" required />
          <CheckboxWithLabel label="Meni eslab qol" />
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
  );
}

export default AuthPage;
