import { updatePassword } from "./config";
import { encrypt } from "../helpers";
import { browserName, isMobile } from "react-device-detect";
import { handleResponse } from "./siginservice";
import { __decrypttoken } from "../helpers/aes";

var deviceID = browserName;

export const updatePasswordService = {
  updatepassword,
};

async function updatepassword(currentpwd, newpassword) {
  const auth = __decrypttoken();
  const encryptednewpwd = await encrypt(newpassword);
  const encryptedcurrpwd = await encrypt(currentpwd);
  const requestoptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      encryptedcurrpwd: encryptedcurrpwd,
      encryptednewpwd: encryptednewpwd,
      deviceId: `${deviceID}`,
      devicename: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    }),
  };

  return fetch(`${updatePassword.url}${updatePassword.path}`, requestoptions)
    .then(handleResponse)
    .then((emailupdatestatus) => {
      return emailupdatestatus;
    });
}
