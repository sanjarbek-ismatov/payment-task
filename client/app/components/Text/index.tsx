import { ComponentProps } from "react";

function Text({
  size,
  children,
  ...props
}: ComponentProps<"p"> & { size?: string }) {
  return (
    <p
      {...props}
      className={`${
        size ?? "lg:text-4xl"
      } md:text-2xl sm:text-xl text-sm font-extrabold dark:text-white`}
    >
      {children}
    </p>
  );
}
export default Text;
