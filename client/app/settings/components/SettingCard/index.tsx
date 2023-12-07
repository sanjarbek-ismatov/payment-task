import {ComponentProps} from "react";

function SettingCard({children, ...props}: ComponentProps<"div">) {
    return <div {...props} className="flex max-w-[800px] w-full m-auto text-left">{children}</div>;
}

export default SettingCard;
