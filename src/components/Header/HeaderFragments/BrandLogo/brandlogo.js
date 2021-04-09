import React from "react";
import { Navbar, Figure } from "react-bootstrap";
import { HeaderContext } from "../../header-context";

export default function Brandlogo() {
  return (
    <HeaderContext.Consumer>
      {({ logo, breakpoint }) => (
        <Navbar.Brand
          href={"/"}
          className="headerv1-logo"
          aria-label={"Navigate to home"}
        >
          <Figure className="figure-wrapper">
            <Figure.Image
              className="logo-image"
              alt={"brand logo"}
              src={`${logo}`}
            ></Figure.Image>
          </Figure>
        </Navbar.Brand>
      )}
    </HeaderContext.Consumer>
  );
}
