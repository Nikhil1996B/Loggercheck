import { updatePasswordService } from "../services/updatepasswordservice";
import { type } from "../constants/changepwdconstants";

const updatepwd = (emailid, password) => {
  return (dispatch) => {
    dispatch(request(emailid));
    updatePasswordService.updatepassword(emailid, password).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};

function request(newemailid) {
  return { type: type.UPDATE_PASSWORD_ADDRESS_REQUEST, newemailid };
}

function success(response) {
  return { type: type.UPDATE_PASSWORD_ADDRESS_SUCCESS, response };
}

function failure(error) {
  return { type: type.UPDATE_PASSWORD_ADDRESS_FAILURE, error };
}

export const updatepwdAction = {
  updatepwd,
};
