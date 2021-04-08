import React from "react";
import { pathOr, equals } from "ramda";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeTrailingSlash } from "../../helpers/helper";

const page_header_constants = {
  forgotpassword: "forgotpassword",
  home: "home",
  search: "search",
  success: "success",
  membership: "membership",
  paymentoptions: "paymentoptions",
  cardcheckout: "cardcheckout",
  resetpassword: "reset-password",
  termsofuse: "terms-of-use",
  about: "about",
  privacy: "privacy",
  signin: "signIn",
  signup: "signUp",
  player: "player",
  accountdetails: "accountdetails",
  contentdetails: "contentdetails",
  billingdetails: "billingdetails",
  streamingdetails: "streamingdetails",
  activatedevice: "activatedevice",
  mylist: "mylist",
  changeplan: "changeplan",
};

export function HeaderConfiguration() {
  const location = useLocation();
  const currentRoute = removeTrailingSlash(pathOr("", ["pathname"])(location));

  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);

  let headerConfig = {
    home: {
      avatar: isSignedIn ? true : false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      showbtn: isSignedIn ? false : true,
      url: "/signIn",
      currenturl: "/home",
    },
    contentdetails: {
      avatar: isSignedIn ? true : false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/contentdetails",
    },
    mylist: {
      avatar: isSignedIn ? true : false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/mylist",
    },
    search: {
      avatar: isSignedIn ? true : false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/search",
    },
    forgotpassword: {
      avatar: false,
      showbtn: false,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      currenturl: "/forgotpassword",
    },
    signIn: {
      avatar: false,
      showbtn: true,
      btntxt: "SIGN UP",
      url: "/signUp",
      currenturl: "/signIn",
    },
    signUp: {
      avatar: false,
      showbtn: true,
      btntxt: "Sign In",
      url: "/signIn",
      currenturl: "/signUp",
    },
    accountdetails: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/accountdetails",
    },
    streamingdetails: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/streamingdetails",
    },
    activatedevice: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/activatedevice",
    },
    billingdetails: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/billingdetails",
    },
    paymentoptions: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/paymentoptions",
    },
    cardcheckout: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/cardcheckout",
    },
    membership: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/membership",
    },
    changeplan: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/changeplan",
    },
    success: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/signIn",
      currenturl: "/success",
    },
    default: {
      avatar: false,
      showbtn: true,
      btntxt: !isSignedIn ? "SIGN IN" : "SIGN OUT",
      url: "/",
      currenturl: "/",
    },
  };

  switch (currentRoute) {
    case page_header_constants.home || "/":
      return headerConfig["home"];
    case page_header_constants.forgotpassword:
      return headerConfig["forgotpassword"];
    case page_header_constants.signin:
      return headerConfig["signIn"];
    case page_header_constants.signup:
      return headerConfig["signUp"];
    case page_header_constants.mylist:
      return headerConfig["mylist"];
    case page_header_constants.search:
      return headerConfig["search"];
    case page_header_constants.contentdetails:
      return headerConfig["contentdetails"];
    case page_header_constants.accountdetails:
      return headerConfig["accountdetails"];
    case page_header_constants.billingdetails:
      return headerConfig["billingdetails"];
    case page_header_constants.activatedevice:
      return headerConfig["activatedevice"];
    case page_header_constants.streamingdetails:
      return headerConfig["streamingdetails"];
    case page_header_constants.paymentoptions:
      return headerConfig["paymentoptions"];
    case page_header_constants.cardcheckout:
      return headerConfig["cardcheckout"];
    case page_header_constants.changeplan:
      return headerConfig["changeplan"];
    case page_header_constants.membership:
      return headerConfig["membership"];
    case page_header_constants.success:
      return headerConfig["success"];
    default:
      return headerConfig["default"];
  }
}
