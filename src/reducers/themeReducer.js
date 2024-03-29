import { themesConstants } from "../constants";

const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case themesConstants.GET_THEME_REQUEST:
      return { loading: true };
    case "APITOKEN_LOGIN_REQUEST":
      return { loading: true };
    case themesConstants.GET_THEME_FAILURE:
      return { ...action.theme, loading: false };
    case themesConstants.GET_THEME_SUCCESS:
      return {
        ...action.theme,
        loading: false,
      };
    case "APITOKEN_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "APITOKEN_LOGIN_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default ThemeReducer;
