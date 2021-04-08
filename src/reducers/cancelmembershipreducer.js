import { type } from "../constants/cancelmembershipconstants";

const initialState = {};

function CancelMembershipReducer(state = initialState, action) {
  switch (action.type) {
    case type.CANCEL_MEMBERSHIP_REQUEST_REQUEST:
      return { ...state, loading: true, response: action.response };
    case type.CANCEL_MEMBERSHIP_REQUEST_FAILURE:
      return { ...state, loading: false, response: action.response };
    case type.CANCEL_MEMBERSHIP_REQUEST_SUCCESS:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default CancelMembershipReducer;
