import { tos } from "./config";
import { handleResponse } from "./api.service";
import { __decrypttoken } from "../helpers/aes";

export const staticInfoService = {
  getInfo,
};

async function getInfo(pattern) {
  const auth = __decrypttoken();
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    }),
  };
  return fetch(`${tos.url}${pattern}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    });
}
