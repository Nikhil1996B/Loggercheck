import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { pathOr, equals } from "ramda";
import { signupActions } from "../../../actions/signupactions";
import LoadingSpinner from "../../../UI_Frontendlib/atoms/loadingSpinner";
import { rules } from "../../../helpers/rules";
import { SignUpGlobalStyle } from "./signupstyle";
import { analyticsService } from "../../../services/analyticsapi.service";

require("./style.scss");

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const emailAddress = useSelector((state) =>
    pathOr("", ["subscriptionRequested", "emialaddress", "email"])(state)
  );

  const responseCode = useSelector((state) =>
    pathOr(null, ["userAuth", "emailaddress", "responseCode"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["userAuth", "loading"])(state)
  );

  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);
  const [hasText, setHasText] = useState(false);

  // React form handle methods
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    dispatch(
      signupActions.signup(inputs.email, values.password, () =>
        history.push("/membership")
      )
    );
    analyticsService.addeventanalytics("signup", "");
    setInputs({ ...inputs, email: values.email, password: values.password });
  };

  // useEffect for emailAddress
  useEffect(() => {
    if (!emailAddress) return;
    setInputs({ ...inputs, email: emailAddress });
  }, [emailAddress, responseCode]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SignUpGlobalStyle />
      <div className={"signupwrapper"}>
        <div className="tentkotta-sans-font-loaded">
          <div className="basicLayout simplicity" dir="ltr">
            <div className="simpleContainer">
              <div className="centerContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="regFormContainer">
                    {/* {responseCode == 200 && (
                      <MessageContent>
                        {`Congratulations ${username}! User created successfully. Please sign In following this link`}{" "}
                        <a href="/signIn" onClick={() => handleSignUpSuccess()}>
                          Sign In to your account
                        </a>
                      </MessageContent>
                    )} */}

                    <div className="stepHeader-container">
                      <div className="stepHeader">
                        <p className="step-indicator">Step 1 of 3</p>
                        <h1 className="stepTitle">
                          Create a password to start your membership.
                        </h1>
                        <p>
                          Just a few more steps and you're done! We hate
                          paperwork, too.
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
                                  className={`tkTextField`}
                                  id="id_email"
                                  maxLength="50"
                                  minLength="5"
                                  value={inputs.email}
                                  onChange={(e) =>
                                    setInputs({
                                      ...inputs,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
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
                                <label
                                  htmlFor="id_email"
                                  className="placeLabel"
                                >
                                  Email
                                </label>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li className="tkFormSpace">
                          <div className="tkInput ">
                            <div className="tkInputPlacement">
                              <label
                                className="input_id"
                                placeholder="mobile number(optional)"
                              >
                                <input
                                  type="text"
                                  name="phone"
                                  className={`tkTextField ${
                                    hasText ? "hasText" : ""
                                  }`}
                                  id="id_phone"
                                  maxLength="50"
                                  minLength="5"
                                  ref={register({
                                    // required: "phone number Required",
                                    pattern: {
                                      value: pathOr(null, [
                                        "validation",
                                        "phoneNumber",
                                      ])(rules),
                                      message: "invalid phone number",
                                    },
                                  })}
                                />
                                {errors.phone && (
                                  <p style={{ color: "red", fontSize: "10px" }}>
                                    {errors.phone.message}
                                  </p>
                                )}
                                <label
                                  htmlFor="id_phone"
                                  className="placeLabel"
                                >
                                  Mobile Number (Optional)
                                </label>
                              </label>
                            </div>
                          </div>
                        </li>
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
                                  className={`tkTextField ${
                                    hasText ? "hasText" : ""
                                  }`}
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
                                  className={`placeLabel`}
                                >
                                  Password
                                </label>
                                {errors.password && (
                                  <p style={{ color: "red", fontSize: "10px" }}>
                                    {errors.password.message}
                                  </p>
                                )}
                              </label>
                            </div>
                          </div>
                        </li>
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
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
