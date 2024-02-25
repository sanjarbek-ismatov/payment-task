import {createContext, useReducer, useState} from "react";
import {toast} from "react-toastify";

type ToastStatus = "none" | "loading" | "success" | "error";
type ToastPayload = {
    message?: string;
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
    const [toastId, setToastId] = useState<string | number>()

    function reducer(_: ToastState, action: ToastAction): ToastState {
        switch (action.type) {
            case "loading":
            case "success":
            case "error":
                toastId && toast.dismiss(toastId)
                const newToast = toast[action.type](`${action.payload?.message}`)
                setToastId(newToast)

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
