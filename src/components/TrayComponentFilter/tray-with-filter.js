import React from "react";
import Filter from "./Filter/filter";
import Title from "./Title/title";
import CardSection from "./CardSection/cardsection";
import { Row, Col } from "react-bootstrap";
import { pathOr } from "ramda";
import { TrayFilterGlobalStyle } from "./tray-with-filter-style";

export default function TrayWithFilter({
  title = "New Movies",
  trending = [],
  breakpoint,
  filtertype,
  handleFilterClick,
}) {
  const sm = pathOr("", ["sm"])(breakpoint);
  return (
    <>
      <TrayFilterGlobalStyle />
      <div className="tray-with-filter">
        <div className="carousalWrapper">
          <Row>
            <Col sm={12} md={6}>
              <Title breakpoint={breakpoint} title={title} />
            </Col>
            <Col sm={12} md={6}>
              <Filter
                breakpoint={breakpoint}
                filtertype={filtertype}
                handleFilterClick={handleFilterClick}
              />
            </Col>
          </Row>
        </div>
      </div>
      <>
        <div className="tray-with-filter">
          <div className="carousalWrapper" id="carousal-filter">
            <CardSection
              trending={trending}
              displayCard={sm}
              redirecturl={"/movies"}
            />
          </div>
        </div>
      </>
    </>
  );
}
