import {ComponentProps} from "react";

function CreditCard({
                        children,
                        selected,
                        ...rest
                    }: ComponentProps<"div"> & { selected?: boolean }) {
    return (
        <div
            className={`${
                selected ? "border-green-500" : "border-transparent"
            } border-2 rounded md:inline-block block w-auto h-auto`}
        >
            <div
                {...rest}
                className="group cursor-pointer m-2 sm:w-1/2 h-auto  md:w-[400px] md:min-h-[250px]  p-6 relative bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
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
        </div>
    );
}

export default CreditCard;
