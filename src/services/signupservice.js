import { signup } from "./config";
import { encrypt, encryptValue } from "../helpers";
import { browserName, isMobile } from "react-device-detect";
import Cookies from "js-cookie";
import axiosApiInstance from "./axiosinterceptor.service";

export const signUpService = {
  signUp,
};

async function signUp(username, password) {
  const pwd = await encrypt(password);
  var deviceID = browserName;
  return axiosApiInstance
    .post(`${signup.apiUrl}${signup.getApiToken}`, {
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
