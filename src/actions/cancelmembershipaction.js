import { cancelmembershipService } from "../services/cancelmembership.service";
import { type } from "../constants/cancelmembershipconstants";

const cancelmembershiprequest = (briefinfo, cancellationreason) => {
  return (dispatch) => {
    dispatch(request(briefinfo));
    cancelmembershipService
      .cancelmembership(briefinfo, cancellationreason)
      .then(
        (response) => {
          dispatch(success(response));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
  };
};

function request(briefinfo) {
  return { type: type.CANCEL_MEMBERSHIP_REQUEST_REQUEST, briefinfo };
}

function success(response) {
  return { type: type.CANCEL_MEMBERSHIP_REQUEST_SUCCESS, response };
}

function failure(error) {
  return { type: type.CANCEL_MEMBERSHIP_REQUEST_FAILURE, error };
}

export const cancelMembershipAction = {
  cancelmembershiprequest,
};
