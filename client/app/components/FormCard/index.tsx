import { ComponentProps } from "react";

function FormCard({ children, ...props }: ComponentProps<"form">) {
  return (
    <form
      {...props}
      className="block mx-5 w-full max-w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {children}
    </form>
  );
}
export default FormCard;
