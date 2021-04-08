import { themeConfig } from "./config";
import { handleResponse } from "./api.service";
import { __decrypttoken } from "../helpers/aes";

export const themeService = {
  theme,
};

async function theme() {
  const auth = __decrypttoken();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${auth}`,
    },
  };
  return fetch(
    `${themeConfig.apiUrl}${themeConfig.getApiToken}`,
    requestOptions
  )
    .then(handleResponse)
    .then((theme) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      // localStorage.setItem("theme", console.log(theme.result));
      return theme.result;
    });
}
