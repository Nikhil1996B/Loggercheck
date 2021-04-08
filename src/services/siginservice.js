import {
  signIn,
  signOut,
  preSignInEmailVal,
  resetPass,
  resetPassEmail,
  rotateSignInKey,
} from "./config";
import { encrypt, encryptValue } from "../helpers";
import { __decrypttoken } from "../helpers/aes";
import { browserName, isMobile } from "react-device-detect";
import Cookies from "js-cookie";
import axiosApiInstance from "./axiosinterceptor.service";

export const signinService = {
  preSignInAuth,
  signin,
  signout,
  resetPassword,
  rstPwdEmail,
  rotateAccessKey,
};

async function preSignInAuth(username) {
  return axiosApiInstance
    .post(`${preSignInEmailVal.apiUrl}${preSignInEmailVal.getApiToken}`, {
      email: username,
    })
    .then((userExists) => {
      return userExists.data;
    })
    .catch((e) => console.log(e));
}

async function signin(username, password) {
  const pwd = await encrypt(password);
  var deviceID = browserName;
  return axiosApiInstance
    .post(`${signIn.apiUrl}${signIn.getApiToken}`, {
      email: username,
      password: pwd,
      deviceId: `${deviceID}`,
      devicename: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    })
    .then(async (user) => {
      const signInValue = await encryptValue(JSON.stringify(user.data));
      Cookies.set("signInStatus", JSON.stringify(signInValue), { expires: 7 });
      Cookies.set("username", JSON.stringify(username), { expires: 7 });
      return user.data;
    })
    .catch((err) => console.log(err));
}

async function signout() {
  var deviceID = browserName;
  return axiosApiInstance
    .post(`${signOut.apiUrl}${signOut.getApiToken}`, {
      deviceId: `${deviceID}`,
    })
    .then((res) => {
      Cookies.remove("username");
      Cookies.remove("signInStatus");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      Cookies.remove("signInStatus");
      Cookies.remove("username");
    });
  // localStorage.removeItem("apiToken");
}

async function rstPwdEmail(email) {
  var deviceID = browserName;
  return axiosApiInstance
    .post(`${resetPassEmail.apiUrl}${resetPassEmail.resetPassword}`, {
      email,
      deviceId: `${deviceID}`,
      devicename: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    })
    .then((userExists) => {
      return userExists.data;
    })
    .catch((e) => console.log(e));
}

async function resetPassword(code, pd) {
  var deviceID = browserName;
  const pwd = await encrypt(pd);
  return axiosApiInstance
    .post(`${resetPass.apiUrl}${resetPass.getApiToken}`, {
      code,
      newPassword: pwd,
      deviceId: `${deviceID}`,
      devicename: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    })
    .then((userExists) => {
      return userExists.data;
    })
    .catch((e) => console.log(e));
}

async function rotateAccessKey(idToken) {
  const auth = __decrypttoken();
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
      refreshtoken: `${idToken}`,
    }),
  };
  return fetch(
    `${rotateSignInKey.apiUrl}${rotateSignInKey.getAccessKeyToken}`,
    requestOptions
  )
    .then(handleResponse)
    .then((userExists) => {
      Cookies.set("signInStatus", JSON.stringify(userExists), { expires: 7 });
      return userExists;
    });
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto signout if 401 response returned from api
        signout();
      }
      const error =
        (data && (data.error || data.message)) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
