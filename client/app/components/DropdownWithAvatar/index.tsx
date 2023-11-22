"use client";
import {userInfoQuery} from "@/app/utils/queryFunctions";
import {useState} from "react";
import {useQuery} from "react-query";
import ImageComponent from "../Image";
import Link from "next/link";

function DropdownWithAvatar() {
    const {data} = useQuery("user", userInfoQuery);
    const [hiderClass, setHiderClass] = useState("hidden");
    const logOut = () => {
        localStorage.removeItem('x-token')
        window.location.reload()
    }
    return (
        <>
            <button
                onClick={() =>
                    setHiderClass(hiderClass === "hidden" ? "absolute" : "hidden")
                }
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
            >
                <span className="sr-only">Open user menu</span>
                <ImageComponent
                    url={data?.result?.image}
                    alt="user"
                    className="w-8 h-8 mr-2 rounded-full object-cover"
                />
                {data?.result?.fullName}
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {/* Dropdown menu */}
            <div
                id="dropdownAvatarName"
                className={`z-10 ${hiderClass} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">{data?.result?.phone}</div>
                    <div className="truncate">{data?.result?.email}</div>
                </div>
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                >
                    <li>
                        <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Bosh sahifa
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/transfer"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Pul o'tkazish
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/reports"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Hisobotlar
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/settings"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sozlamalar
                        </Link>
                    </li>
                </ul>
                <div className="py-2">
                    <button
                        onClick={logOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Chiqish
                    </button>
                </div>
            </div>
        </>
    );
}

export default DropdownWithAvatar;
