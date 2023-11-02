import {CreditCardInterface, ServerResponse, TransferInterface, UserInterface} from "../types";

export const userInfoQuery = async () => {
  const token = localStorage.getItem("x-token");
  const response = await fetch("http://localhost:4000/api/user/me", {
    headers: {
      ["x-token"]: token as string,
    },
  });
  return (await response.json()) as ServerResponse<UserInterface>;
};
export const cardInfoQuery =  (id: string) => {
  return async () => {
    const response = await fetch(`http://localhost:4000/api/card/get`, {
      headers: {
        ['_id']: id
      }
    })
    return await response.json() as ServerResponse<CreditCardInterface>
  }
}
export const transfersQuery = async () => {
  const token = localStorage.getItem('x-token')
  const response = await fetch("http://localhost:4000/api/transfer/get/all", {
    headers: {
      ["x-token"]: token as string,
    },
  });
  return (await response.json()) as ServerResponse<TransferInterface[]>;
}