"use client";
import {useEffect, useState} from "react";

const useAuth = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("x-token") || sessionStorage.getItem('x-token');
        setToken(token || "none")
    }, []);
    return token
};
export {useAuth}