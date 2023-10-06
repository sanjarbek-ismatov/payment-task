import { ComponentProps } from "react";

function Select({
  children,
  label,
  ...props
}: ComponentProps<"select"> & { label?: string }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}

        <select
          {...props}
          className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {children}
        </select>
      </label>
    </>
  );
}
export default Select;
