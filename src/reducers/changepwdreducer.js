import { type } from "./constants";

const initialState = {};

function ChangePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_PASSWORD_ADDRESS_REQUEST:
      return { ...state, loading: true, response: action.response };
    case type.UPDATE_PASSWORD_ADDRESS_FAILURE:
      return { ...state, loading: false, response: action.response };
    case type.UPDATE_PASSWORD_ADDRESS_SUCCESS:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default ChangePasswordReducer;
