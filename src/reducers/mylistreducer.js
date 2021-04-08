import { types } from "../actions/mylistactions";

const mylist = (state = {}, action) => {
  switch (action.type) {
    case types.GET_MY_LIST_CONTENT_SUCCESS:
      return { ...state, ...action, loading: false };
    case types.GET_MY_LIST_CONTENT_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default mylist;
