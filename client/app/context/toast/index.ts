import { createContext, useReducer } from "react";
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
  payload: ToastPayload;
}
const ToastContext = createContext({ status: "none" } as ToastState);
const useToastState = <T>(promise: Promise<T>) => {
  function reducer(state: ToastState, action: ToastAction): ToastState {
    switch (action.type) {
      case "loading":
      case "success":
      case "error":
        return {
          status: action.type,
          ...action.payload,
        };
      default:
        return { status: "none" };
    }
  }
  const [state, dispatch] = useReducer(reducer, { status: "none" });
  return [state, dispatch];
};
export { ToastContext };
