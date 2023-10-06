import CheckboxWithLabel from "@/app/components/CheckboxWithLabel";
import DefaultButton from "@/app/components/DefaultButton";
import DefaultInput from "@/app/components/DefaultInput";
import FormCard from "@/app/components/FormCard";
import H2 from "@/app/components/H2";
import LinkArrowRightIcon from "@/app/components/LinkArrowRightIcon";
import Select from "@/app/components/Select";
import Link from "next/link";
import countries from "@/app/data/countries.json";
function RegisterPage() {
  return (
    <div className="w-full pt-8">
      <div className="text-center py-5">
        <H2>Ro'yhatdan o'tish</H2>
      </div>
      <div className="flex justify-center">
        <FormCard>
          <DefaultInput
            name="fullName"
            type="text"
            label="Ism"
            placeholder="To'liq ismingiz"
            required
          />
          <DefaultInput
            label="Telefon raqam"
            name="phone"
            type="tel"
            placeholder="Telefon raqamingiz"
            required
          />
          <DefaultInput
            label="Email"
            name="email"
            type="email"
            placeholder="Pochtangiz"
            required
          />
          <DefaultInput
            name="birthday"
            type="date"
            placeholder="Tug'ilgan sana"
            label="Tug'ilgan sanangiz"
            required
          />
          <Select label="Mamlakatingiz">
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </Select>
          <div className="my-4">
            <DefaultButton type="submit">Hisob yaratish</DefaultButton>
            <Link
              href="/auth"
              className="inline-flex mx-2 items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Menda hisob mavjud
              <LinkArrowRightIcon />
            </Link>
          </div>
        </FormCard>
      </div>
    </div>
  );
}
export default RegisterPage;
