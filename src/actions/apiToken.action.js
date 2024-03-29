import { apiTokenService } from "../services";
import { apiTokenConstants } from "../constants";
import { themeActions } from "./theme.action";

export const apiTokenActions = {
  login,
  logout,
};

// var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    apiTokenService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        dispatch(themeActions.themes());
        sessionStorage.setItem("themeexist", true);
      },
      (error) => {
        dispatch(failure(error.toString()));
        //dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: apiTokenConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: apiTokenConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: apiTokenConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  apiTokenService.logout();
  return { type: apiTokenConstants.LOGOUT };
}
