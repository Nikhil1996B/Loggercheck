import React from "react";
import { HeaderContext } from "../../header-context";
import { Nav } from "react-bootstrap";

export default function Category() {
  return (
    <HeaderContext.Consumer>
      {({ category, themename, displaycategories, isSignedIn }) => (
        <>
          {displaycategories && (
            <Nav className={`mr-auto ${themename}-category category-wrapper`}>
              <Nav.Link href="/?movies" className={"header-categories"}>
                Movies
              </Nav.Link>
              <Nav.Link href="/?web-series" className={"header-categories"}>
                Web Series
              </Nav.Link>
              {isSignedIn && (
                <Nav.Link href="/mylist" className={"header-categories"}>
                  My List
                </Nav.Link>
              )}
            </Nav>
          )}
          {!displaycategories && (
            <div className="display-header-category"></div>
          )}
        </>
      )}
    </HeaderContext.Consumer>
  );
}
