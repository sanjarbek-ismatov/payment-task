import { ComponentProps, ReactNode } from "react";

function CreditCard({
  children,
  deletable,
  ...rest
}: { children?: ReactNode } & ComponentProps<"div"> & { deletable?: boolean }) {
  return (
    <div
      {...rest}
      className="group block m-3 max-w-sm w-[400px] h-[250px] p-6 relative bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {deletable && (
        <span className="group-hover:flex hidden justify-center items-center absolute right-[-10px] top-[-10px] h-[25px] w-[25px] rounded-full bg-red-500 text-white">
          <i className="fa-solid fa-x"></i>
        </span>
      )}
      {children ? (
        children
      ) : (
        <div className="text-center pt-3 cursor-pointer">
          <i className="fa-solid fa-plus text-9xl dark:text-white text-gray-900"></i>
          <p className="dark:text-white text-gray-900 text-sm">
            Yangi karta qo'shing
          </p>
        </div>
      )}
    </div>
  );
}

export default CreditCard;
