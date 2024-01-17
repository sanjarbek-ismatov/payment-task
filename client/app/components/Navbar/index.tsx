"use client";
import DropdownWithAvatar from "@/app/components/DropdownWithAvatar";
import GradientButton from "@/app/components/GradientButton";
import ToggleTheme from "../ToggleTheme";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";

function Navbar() {
  const token = useAuth();
  return (
    <>
      <nav className="bg-white  z-50 w-full border-b dark:border-b-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/99Ky60R/image-1.png"
              className="h-8 mr-3"
              alt="YouPay Logo"
            />
            <span className="hidden md:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              YouPay
            </span>
          </Link>
          <div className="block w-auto" id="navbar-default">
            <ul className="font-medium flex items-center p-0  border-gray-100 rounded-lg space-x-8 mt-0 border-0 bg-white  dark:bg-gray-900 dark:border-gray-700">
              {token !== "none" && (
                <>
                  <li>
                    <i className="fa-regular fa-bell text-white text-lg cursor-pointer"></i>
                  </li>
                  <li>
                    <Link href="/transfer">
                      <GradientButton>Pul o'tkazish</GradientButton>
                    </Link>
                  </li>

                  <li>
                    <DropdownWithAvatar />
                  </li>
                </>
              )}
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
