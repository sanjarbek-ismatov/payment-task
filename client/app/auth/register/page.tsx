import CheckboxWithLabel from "@/app/components/CheckboxWithLabel";
import DefaultButton from "@/app/components/DefaultButton";
import DefaultInput from "@/app/components/DefaultInput";
import FormCard from "@/app/components/FormCard";
import H2 from "@/app/components/H2";
import LinkArrowRightIcon from "@/app/components/LinkArrowRightIcon";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="w-full pt-8">
      <div className="text-center py-5">
        <H2>Ro'yhatdan o'tish</H2>
      </div>
      <div className="flex justify-center">
        <FormCard>
          <DefaultInput type="tel" placeholder="+998999999999" required />
          <DefaultInput type="password" placeholder="Parolingiz" required />
          <DefaultButton type="submit">Kirish</DefaultButton>
          <Link
            href="/auth/register"
            className="inline-flex mx-2 items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Menda hisob mavjud
            <LinkArrowRightIcon />
          </Link>
        </FormCard>
      </div>
    </div>
  );
}
export default RegisterPage;
