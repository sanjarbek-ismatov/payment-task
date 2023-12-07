import {ComponentProps} from "react";

/*
${fullWidth ? "w-full" : "w-auto"}
 */
function Card({children, fullWidth, ...props}: { fullWidth?: boolean } & ComponentProps<'div'>) {
    return <div {...props}
                className={`p-6 bg-white inline-block  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
        {children}
    </div>

}

export default Card