"use client";
import { useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);
  useLayoutEffect(() => {
    const token = localStorage.getItem("token") ?? sessionStorage.getItem('token');
    setAuth(Boolean(token))
  }, []);
  return [auth, setAuth]
};
export {useAuth}