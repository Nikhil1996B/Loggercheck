import axios from "axios";
import { __decrypttoken } from "../helpers/aes";
import { apiTokenService } from "./api.service";
import Cookies from "js-cookie";
import { decryptValue } from "../helpers/aes";
import { pathOr } from "ramda";

export const getCookie = (name) => Cookies.get(name);

const axiosApiInstance = axios.create({
  timeout: 4000,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const cookiedata =
      getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
        ? decryptValue(getCookie("signInStatus"))
        : "";
    const value = await __decrypttoken();
    const __parseData = cookiedata ? JSON.parse(cookiedata) : "";
    const token = await pathOr("", ["idToken"])(__parseData);

    config.headers = {
      Authorization: `Bearer ${value}`,
      Accept: "application/json",
      idToken: `${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await apiTokenService.login();
      const apiToken = await __decrypttoken();
      originalRequest.data = await JSON.parse(originalRequest.data);
      originalRequest.headers["Authorization"] = apiToken
        ? `Bearer ${apiToken}`
        : "";
      return axiosApiInstance(originalRequest);
    }
    if (error.response.status === 400) {
      let { data } = error.response;
      if (data && data.error === "Email already exists") {
        return { data: { error: data.error || data.message } };
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
