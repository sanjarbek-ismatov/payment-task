"use client";
import { useEffect, useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | null>();
  useEffect(() => {
    const token = localStorage.getItem("x-token") || sessionStorage.getItem('x-token');
    setToken(token)
  }, []);
  return token
};
export {useAuth}