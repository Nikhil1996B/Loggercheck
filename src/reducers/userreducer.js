import {
  signInConstants,
  preAuthValidation,
  resetPwdEmail,
  resetAccessToken,
} from "../constants/userauthconstants";
import Cookies from "js-cookie";
import { decryptValue } from "../helpers/aes";
import { pathOr } from "ramda";

export const getCookie = (name) => Cookies.get(name);

const cookiedata =
  getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
    ? decryptValue(getCookie("signInStatus"))
    : "";

const __parseAuthData = () => {
  const __parseData = cookiedata ? JSON.parse(cookiedata) : "";
  const idToken = pathOr("", ["idToken"])(__parseData);
  const refreshToken = pathOr("refreshToken", [])();
  const expiresIn = pathOr("", ["expiresIn"])();
  const message = pathOr("", ["message"])();
  const responseCode = pathOr("", ["responseCode"])();
  return {
    idToken,
    refreshToken,
    expiresIn,
    message,
    responseCode,
  };
};

const initialState = {
  emailaddress: null,
  forgotpasswordreq: null,
  loading: false,
  signInstatus: {
    ...__parseAuthData(),
  },
  reload: false,
};

function userAuth(state = initialState, action) {
  switch (action.type) {
    case preAuthValidation.EMAIL_ADDRESS_EXIST_SUCCESS:
      return {
        ...state,
        emailaddress: action.user,
        isExists: action.isExists,
        loading: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signInstatus: action.user,
        error: undefined,
        reload: true,
        loading: false,
      };
    case preAuthValidation.EMAIL_ADDRESS_EXIST_REQUEST:
      return { ...state, loading: true };
    case signInConstants.RESET_SIGIN:
      return {
        ...state,
        emailaddress: "",
        isExists: null,
        forgotpasswordreq: { records: null },
        signInstatus: null,
      };
    case signInConstants.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case signInConstants.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        emailaddress: null,
        forgotpasswordreq: null,
      };
    case signInConstants.SIGNIN_SUCCESS:
      return {
        ...state,
        signInstatus: action.user,
        error: undefined,
        reload: true,
        loading: false,
      };
    case signInConstants.RESET_RELOAD_STATUS:
      return { ...state, reload: false };
    case preAuthValidation.EMAIL_ADDRESS_EXIST_FAILURE:
      return { ...state, error: action.error, loading: false };
    case signInConstants.SIGNOUT:
      return { ...state, signInstatus: null, reload: true };
    case resetPwdEmail.RESET_PASSWORD_EMAIL_REQUEST:
      return { ...state, forgotpasswordreq: { records: null }, loading: true };
    case resetPwdEmail.RESET_PASSWORD_EMAIL_SUCCESS:
      return {
        ...state,
        forgotpasswordreq: { records: action.user },
        loading: false,
      };
    case resetPwdEmail.RESET_PASSWORD_EMAIL_FAILURE:
      return { ...state, forgotpasswordreq: { records: [] }, loading: false };
    case resetAccessToken.RESET_ACCESS_TOKEN_REQUEST:
      return { ...state, loading: true };
    case resetAccessToken.RESET_ACCESS_TOKEN_SUCCESS:
      return { ...state, loading: false, signInstatus: { ...action.response } };
    case resetAccessToken.RESET_ACCESS_TOKEN_FAILURE:
      return { ...state, loading: false, error: action.response };
    default:
      return state;
  }
}

export default userAuth;
