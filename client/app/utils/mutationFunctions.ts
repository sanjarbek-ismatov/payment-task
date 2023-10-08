import { ServerResponse } from "../types";
import { getToken } from "./getToken";

export  const mutationFunc = (url: string, method: string, withToken: boolean) => {
    return async (body: BodyInit) => {
      const token = getToken();
      const res = await fetch(url, {
        method,
        body,
        ...(withToken && {
          headers: {
            ["x-token"]: token || "",
          },
        }),
      });
      const data = await res.json();
      if (res.ok) return data as ServerResponse;
      return Promise.reject(data.message);
    };
  };