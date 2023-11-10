import {ComponentProps} from "react";

function Card({children, ...props}: ComponentProps<'div'>){
    return <div {...props} className="p-6 bg-white inline-block w-auto border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {children}
    </div>

}
export default Card