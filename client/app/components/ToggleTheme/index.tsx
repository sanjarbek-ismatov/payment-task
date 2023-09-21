"use client";
import { useTheme } from "@/app/hooks/useTheme";

function ToggleTheme() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <i
        onClick={toggleTheme}
        className={`fa-regular ${
          theme === "light" ? "fa-moon text-gray-900" : "fa-sun text-white"
        }  cursor-pointer`}
      ></i>
    </>
  );
}

export default ToggleTheme;
