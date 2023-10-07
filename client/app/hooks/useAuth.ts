"use client";
import { useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | null>();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem('token');
    setToken(token)
  }, []);
  return token
};
export {useAuth}