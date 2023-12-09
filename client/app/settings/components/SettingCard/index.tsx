import {ComponentProps} from "react";

function SettingCard({children, ...props}: ComponentProps<"div">) {
    return <div {...props}
                className="lg:flex  sm:w-[550px] lg:w-[750px] w-full sm:m-auto text-left">{children}</div>;
}

export default SettingCard;
