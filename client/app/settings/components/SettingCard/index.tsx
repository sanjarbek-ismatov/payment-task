import { ComponentProps } from "react";

function SettingCard({ children, ...props }: ComponentProps<"div">) {
  return <div {...props} className="flex w-[800px] text-left">{children}</div>;
}
export default SettingCard;
