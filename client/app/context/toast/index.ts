import {createContext, useReducer} from "react";
import {toast} from "react-toastify";
import {toastOptions} from "@/app/data/variables";

type ToastStatus = "none" | "loading" | "success" | "error";
type ToastPayload = {
    message?: string;
    error?: string;
    code?: number;
};
type ToastState = {
    status: ToastStatus;
} & ToastPayload;

interface ToastAction {
    type: ToastStatus;
    payload?: ToastPayload;
}

const ToastContext = createContext({status: "none"} as ToastState);
const useToastState = () => {
    function reducer(state: ToastState, action: ToastAction): ToastState {
        switch (action.type) {
            case "loading":
            case "success":
            case "error":
                toast[action.type](action.payload?.message || action.payload?.error, toastOptions)
                return {
                    status: action.type,
                    ...action.payload,
                }
            default:
                return {status: "none"};
        }
    }

    const [state, dispatch] = useReducer(reducer, {status: "none"});

    return [state, dispatch] as [typeof state, typeof dispatch]
};
export {ToastContext as default, useToastState};
