import { ComponentProps } from "react";

function H2({ children }: ComponentProps<"h2">) {
  return (
    <h2 className="text-4xl font-extrabold dark:text-white">{children}</h2>
  );
}
export default H2