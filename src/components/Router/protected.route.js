import React from "react";
import { useSelector } from "react-redux";
import { equals, pathOr } from "ramda";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signIn", state: props.location }} />
        );
      }}
    />
  );
};

export const SignedInUser = ({ component: Component, ...rest }) => {
  const signedInStatus = useSelector((state) =>
    pathOr("", ["userAuth", "signInstatus", "responseCode"])(state)
  );
  const isSignedIn = equals(200, signedInStatus);
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: props.location }} />
        );
      }}
    />
  );
};
