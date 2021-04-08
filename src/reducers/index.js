import { combineReducers } from "redux";

import ThemeState from "./themeReducer";
import HomepageState from "./homepagereducer";
import search from "./searchreducer";
import subscriptionRequested from "../components/HeroBannerWithIcon/herobannerreducer";
import userAuth from "./userreducer";
import PwdResetState from "./resetpwdreducer";
import StaticContentReducer from "./staticpagereducer";
import ChangeEmailState from "./changeemailreducer";
import mylist from "./mylistreducer";
import membership from "./membershipreducer";

// import component reducers
const reducers = {
  ThemeState,
  StaticContentReducer,
  HomepageState,
  search,
  subscriptionRequested,
  userAuth,
  PwdResetState,
  ChangeEmailState,
  mylist,
  membership,
};

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
