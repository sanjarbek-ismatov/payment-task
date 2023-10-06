import { ComponentProps } from "react";

function CheckboxWithLabel({
  label,
  ...props
}: { label?: string } & ComponentProps<"input">) {
  return (
    <div className="flex items-center mb-6 w-full">
      <label className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          {...props}
          type="checkbox"
          defaultValue=""
          className="w-4 h-4 m border mr-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
export default CheckboxWithLabel;
