import { ComponentProps, ReactNode } from "react";
const defaultInputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
function DefaultInput({
  label,
    children
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 mx-2 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
        {children}
    </div>
  );
}
function Input({label, ...props }: ComponentProps<"input"> & {label?: string}) {
  return (
    <DefaultInput>
      <input {...props} className={defaultInputClasses} />
    </DefaultInput>
  );
}
function Select({label, children, ...props }: ComponentProps<"select">  & {label?: string}) {
  return (
    <DefaultInput label={label}>
      <select {...props} className={defaultInputClasses}>{children}</select>
    </DefaultInput>
  );
}
export {Input, Select};
