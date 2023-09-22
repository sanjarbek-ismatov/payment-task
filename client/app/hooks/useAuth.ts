"use client";
import { useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
  }, []);
};