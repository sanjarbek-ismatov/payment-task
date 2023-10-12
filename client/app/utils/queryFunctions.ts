import { ServerResponse, UserInterface } from "../types";

export const userInfoQuery = async () => {
  const token = localStorage.getItem("x-token");
  const response = await fetch("http://localhost:4000/api/user/me", {
    headers: {
      ["x-token"]: token as string,
    },
  });
  return (await response.json()) as ServerResponse<UserInterface>;
};
