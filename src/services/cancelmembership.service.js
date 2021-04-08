import { cancelmembershipcofig } from "./config";
import { __decrypttoken } from "../helpers/aes";
import { browserName, isMobile } from "react-device-detect";
import { handleResponse } from "./siginservice";

var deviceID = browserName;

export const cancelmembershipService = {
  cancelmembership,
};

async function cancelmembership(briefinfo, cancellationreason) {
  const auth = __decrypttoken();

  const requestoptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      briefinfo,
      cancellationreason,
      deviceId: `${deviceID}`,
      devicename: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    }),
  };

  return fetch(
    `${cancelmembershipcofig.url}${cancelmembershipcofig.path}`,
    requestoptions
  )
    .then(handleResponse)
    .then((cancelreqstatus) => {
      return cancelreqstatus;
    });
}
