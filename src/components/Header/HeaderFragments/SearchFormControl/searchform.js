import React from "react";
import { HeaderContext } from "../../header-context";
import { Row } from "react-bootstrap";
import NavBarComponent from "../../../searchBar/NavBar";
import UserAuth from "../UserAuthentication/userauth";

export default function SearchForm() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <HeaderContext.Consumer>
      {({ dispatch, isSignedIn, breakpoint, displaysearch }) => (
        <Row
          onSubmit={(e) => handleClick(e)}
          className={"searchform-container"}
        >
          {displaysearch && <NavBarComponent />}
          <UserAuth breakpoint={breakpoint} />
        </Row>
      )}
    </HeaderContext.Consumer>
  );
}
