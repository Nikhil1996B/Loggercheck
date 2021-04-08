import { signUpService } from "../services";
import { signInConstants } from "../constants/userauthconstants";

export const signupActions = {
  signup,
  resetSignUpState,
};

function signup(username, password, cb) {
  return (dispatch) => {
    dispatch(request({ username }));
    signUpService.signUp(username, password).then(
      (user) => {
        dispatch(success({ username, ...user }));
        console.log(user);
        cb();
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}
function request(user) {
  return { type: signInConstants.SIGNIN_REQUEST, user };
}
function success(user) {
  return { type: signInConstants.SIGNIN_SUCCESS, user };
}
function failure(error) {
  return { type: signInConstants.SIGNIN_FAILURE, error };
}

// Reset Sigin
function resetSignUpState() {
  return { type: signInConstants.RESET_SIGIN };
}
