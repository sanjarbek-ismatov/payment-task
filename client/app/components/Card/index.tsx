import {ComponentProps} from "react";

function Card({children, fullWidth, ...props}: { fullWidth?: boolean } & ComponentProps<'div'>) {
    return <div {...props}
                className={`p-6 bg-white inline-block sm:w-auto w-full  border border-gray-200 rounded-lg shadow hover:border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-400`}>
        {children}
    </div>

}

export default Card