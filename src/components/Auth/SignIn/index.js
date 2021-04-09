import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { signinActions } from "../../../actions/signinactions";
import LoadingSpinner from "../../../UI_Frontendlib/atoms/loadingSpinner";
import { pathOr } from "ramda";
import { equals } from "ramda";
import { rules } from "../../../helpers/rules";
import { SignInGlobalStyle } from "./signinstyle";
import { analyticsService } from "../../../services/analyticsapi.service";
import "./style.scss";

export const MessageContent = ({ isExist, children }) => {
  const dispatch = useDispatch();
  return (
    <div className="ui-message-container ui-message-error">
      <div data-uia="text" className="ui-message-contents">
        <p
          className="message-container-close"
          onClick={() => dispatch({ type: "RESET_SIGIN" })}
        >
          x
        </p>
        {children ? (
          children
        ) : (
          <div
            onClick={() => {
              dispatch({ type: "RESET_SIGIN" });
            }}
          >
            {`Sorry, we can't find an account with this email address. Please try again or
                             ${" "}`}
            <a
              href="/signUp"
              style={{ color: "#ffffff" }}
              aria-label={"create a new account"}
            >
              create a new account
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [emailAddressEntered, setEmailEnteredState] = useState(false);

  // const [hasText, setHasText] = useState(false);

  // Reset on pre-authentication success
  const [useExists, setUserExists] = useState(false);
  const [redirectPostSignIn, setredirection] = useState(false);

  // React form handle methods
  const { handleSubmit, register, errors } = useForm();

  // selectors
  const isExists = useSelector((state) =>
    pathOr(null, ["userAuth", "emailaddress", "isExists"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["userAuth", "loading"])(state)
  );
  const preEmailAuth = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const message = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "message"])(state)
  );
  const emailAddress = useSelector((state) =>
    pathOr("", ["userAuth", "emailaddress", "username"])(state)
  );
  const reload = useSelector((state) =>
    pathOr("", ["userAuth", "reload"])(state)
  );
  const forgotPasswordEmailStatus = useSelector((state) =>
    pathOr("", ["userAuth", "forgotpasswordreq", "records", "responseCode"])(
      state
    )
  );
  const forgotPasswordEmailStatusMessage = useSelector((state) =>
    pathOr("", ["userAuth", "forgotpasswordreq", "records", "message"])(state)
  );
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const error = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "error"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);

  // if the user is signed in, then redirect them to home page,
  // and is reload necessary,
  // reload the page to effeciate the cookies on to browser
  useEffect(() => {
    if (isSignedIn) {
      (async function () {
        await analyticsService.addeventanalytics("login", "");
      })();
      // history.push('/home');
    }
    if (reload) {
      // window.location.reload();
      dispatch({ type: "RESET_RELOAD_STATUS" });
    }
  }, [isSignedIn, reload, dispatch]);

  useEffect(() => {
    if (
      message &&
      typeof message === "string" &&
      message.toLowerCase().includes("user not found")
    ) {
      history.push("/signUp");
    }
    return () => {
      // clean up
    };
  }, [message]);

  // Reset the toaster message display check on email verification check, on component mount / page refresh
  useEffect(() => {
    setEmailEnteredState(false);
    return () => {};
  }, []);

  // component did mount / initialiser constructor
  useEffect(() => {
    if (emailAddress && isExists) {
      setInputs({ ...inputs, email: emailAddress });
      setUserExists(isExists);
    }
  }, []);

  // effect for redirecting to home page post successful sign in
  useEffect(() => {
    if (redirectPostSignIn) {
      // history.push("/home");
    }
    return () => {
      // clean up
    };
  }, [redirectPostSignIn]);

  // User Exists and pre email validation success
  useEffect(() => {
    setUserExists(isExists);
    if (isExists === false) {
      // history.push('./signUp')
    }
  }, [isExists]);

  const onSubmit = (values) => {
    if (isExists) {
      return dispatch(
        signinActions.signin(inputs.email, values.password, () =>
          history.push("/home")
        )
      );
    }

    dispatch(signinActions.preSignInAuth(inputs.email));
    setInputs({ ...inputs, email: values.email, password: values.password });
  };

  const handleForgotPassword = () => {
    return history.push("/forgotpassword");
  };

  const userGreetingsMessage = () => {
    return (
      <>
        <b>Hello {emailAddress}. Welcome back!</b>
        <p style={{ marginTop: "4%" }}>
          Please Enter your password to Sign In to your account
        </p>
      </>
    );
  };

  const emailExistMessage = (error) => {
    return (
      <>
        <span>{error}</span> Please try Sign-ing in with correct password,{" "}
        <br /> or please try to{" "}
        <a href="/forgotpassword" style={{ color: "white" }}>
          reset your password{" "}
        </a>
        and we will send an email to you with further instructions.
      </>
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <SignInGlobalStyle />
      <div className="tentkotta-sans-font-loaded">
        <div className="basicLayout simplicity" dir="ltr">
          <div className="simpleContainer">
            <div className="centerContainer">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="regFormContainer">
                  {forgotPasswordEmailStatus == 200 && (
                    <MessageContent>
                      {forgotPasswordEmailStatusMessage}
                    </MessageContent>
                  )}
                  {isExists == false && <MessageContent />}
                  {emailAddressEntered && (
                    <MessageContent>
                      {"Enter email address to reset password"}
                    </MessageContent>
                  )}
                  {error && (
                    <MessageContent>
                      {error.includes("exists")
                        ? emailExistMessage(error)
                        : error}
                    </MessageContent>
                  )}
                  <div className="stepHeader-container">
                    <div className="stepHeader">
                      <h1 className="stepTitle">
                        Sign in or create an account
                      </h1>
                      <p>
                        Enter your registered email to sign in else we create
                        you an account.
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className="simpleForm structural ui-grid">
                      <li className="tkFormSpace">
                        <div className="tkInput ">
                          <div className="tkInputPlacement">
                            <label className="input_id" placeholder="email">
                              <input
                                type="email"
                                name="email"
                                value={inputs.email}
                                className={`tkTextField`}
                                onChange={(e) => {
                                  setInputs({
                                    ...inputs,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                                id="id_email"
                                maxLength="50"
                                minLength="5"
                                ref={register({
                                  required: "E-mail ID is Required",
                                  pattern: {
                                    value: pathOr(null, [
                                      "validation",
                                      "email",
                                    ])(rules),
                                    message: "invalid email address",
                                  },
                                })}
                              />
                              {errors.email && (
                                <p style={{ color: "red", fontSize: "10px" }}>
                                  {errors.email.message}
                                </p>
                              )}
                              <label htmlFor="id_email" className="placeLabel">
                                Email
                              </label>
                            </label>
                          </div>
                        </div>
                      </li>
                      {isExists ? (
                        <li className="tkFormSpace">
                          <div className="tkInput tkInputOversize">
                            <div className="tkInputPlacement">
                              <label
                                className="input_id"
                                placeholder="password"
                              >
                                <input
                                  type="password"
                                  name="password"
                                  className={`tkTextField`}
                                  id="id_password"
                                  autoComplete="password"
                                  maxLength="61"
                                  minLength="4"
                                  dir=""
                                  ref={register({
                                    required: "password is not filled",
                                    validate: (value) => value.length,
                                  })}
                                />
                                <label
                                  htmlFor="id_password"
                                  className={"placeLabel"}
                                >
                                  Password
                                </label>
                                {errors.password && (
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: "10px",
                                    }}
                                  >
                                    {errors.password.message}
                                  </p>
                                )}
                              </label>
                            </div>
                          </div>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
                <div className="submitBtnContainer">
                  <button
                    type="submit"
                    autoComplete="off"
                    className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                    placeholder="regForm_button_continue"
                  >
                    {isExists ? "Sign In" : `Continue`}
                  </button>
                </div>
                {isExists && (
                  <div className="forgotpassword">
                    <span
                      alt="forgot password"
                      className="link-forgot-password"
                      onClick={(e) => handleForgotPassword(e)}
                      style={{
                        color: "black",
                      }}
                    >
                      Forgot Password ?
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
