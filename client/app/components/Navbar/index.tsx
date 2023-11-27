import DropdownWithAvatar from "@/app/components/DropdownWithAvatar";
import GradientButton from "@/app/components/GradientButton";
import ToggleTheme from "../ToggleTheme";

function Navbar() {
    return (
        <>
            <nav className="bg-white  z-50 w-full border-b dark:border-b-gray-800 dark:bg-gray-900">
                <div className="flex items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span
                            className="hidden ms:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              YouPay
            </span>
                    </a>
                    {/*<button*/}
                    {/*    data-collapse-toggle="navbar-default"*/}
                    {/*    type="button"*/}
                    {/*    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
                    {/*    aria-controls="navbar-default"*/}
                    {/*    aria-expanded="false"*/}
                    {/*>*/}
                    {/*    <span className="sr-only">Open main menu</span>*/}
                    {/*    <svg*/}
                    {/*        aria-hidden="true"*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 17 14"*/}
                    {/*    >*/}
                    {/*        <path*/}
                    {/*            stroke="currentColor"*/}
                    {/*            strokeLinecap="round"*/}
                    {/*            strokeLinejoin="round"*/}
                    {/*            strokeWidth={2}*/}
                    {/*            d="M1 1h15M1 7h15M1 13h15"*/}
                    {/*        />*/}
                    {/*    </svg>*/}
                    {/*</button>*/}
                    <div className="block w-auto" id="navbar-default">
                        <ul className="font-medium flex items-center justify-center p-0  border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0 bg-white  dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <GradientButton>Pul o'tkazish</GradientButton>
                            </li>

                            <li>
                                <DropdownWithAvatar/>
                            </li>
                            <li>
                                <ToggleTheme/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
