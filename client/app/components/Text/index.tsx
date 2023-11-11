import { ComponentProps } from "react";

function Text({
  size,
  children,
  ...props
}: ComponentProps<"p"> & { size?: string }) {
  return (
    <p
      {...props}
      className={`${size ?? "text-4xl"} font-extrabold dark:text-white`}
    >
      {children}
    </p>
  );
}
export default Text