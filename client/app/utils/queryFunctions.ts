import {
  CreditCardInterface,
  ServerResponse,
  TransferInterface,
  UserInterface,
} from "../types";
import { getToken } from "@/app/utils/getToken";
import { useServer } from "../context/server";

export const useUserInfoQuery = () => {
  const url = useServer().url;
  return async () => {
    const token = getToken();
    const response = await fetch(`${url}/api/user/me`, {
      headers: {
        ["x-token"]: token as string,
      },
    });
    return (await response.json()) as ServerResponse<UserInterface>;
  };
};
export const useCardInfoQuery = () => {
  const url = useServer().url;
  return (id: string) => {
    return async () => {
      const response = await fetch(`${url}/api/card/get`, {
        headers: {
          ["_id"]: id,
        },
      });
      return (await response.json()) as ServerResponse<CreditCardInterface>;
    };
  };
};
export const useTransfersQuery = () => {
  const url = useServer().url;
  return async () => {
    const token = localStorage.getItem("x-token");
    const response = await fetch(`${url}/api/transfer/get/all`, {
      headers: {
        ["x-token"]: token as string,
      },
    });
    return (await response.json()) as ServerResponse<TransferInterface[]>;
  };
};
