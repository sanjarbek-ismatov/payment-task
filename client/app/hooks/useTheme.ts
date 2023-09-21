"use client";
import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) localStorage.setItem("theme", "light");
    setTheme(localTheme ?? "light");
  }, []);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return [theme, toggleTheme] as [string, () => void];
};
export { useTheme };
