"use client";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("x-token") || sessionStorage.getItem('x-token');
    setToken(Boolean(token))
  }, []);
  return token
};
export {useAuth}