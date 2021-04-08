import React, { useState } from "react";
import { pathOr } from "ramda";
import { Card, Row, Col } from "react-bootstrap";
import { filterTypeTxtStyle } from "./filter-style";

export default function Filter({
  types = [],
  active,
  filtertype,
  handleFilterClick,
  breakpoint,
}) {
  const [selectedGenere, seSelectedGenere] = useState("Drama");
  const sm = pathOr("", ["sm"])(breakpoint);
  return (
    <Card className="mx-auto border-0">
      <Card.Body className="filtercardbody">
        <Row className="mx-auto mt-3">
          {filtertype &&
            filtertype.map((filterby, key) => (
              <Col
                style={filterTypeTxtStyle.text(selectedGenere == filterby, sm)}
                key={key}
                className={`${filterby} ${key} trayfilterby`}
                onClick={() => {
                  handleFilterClick(filterby);
                  seSelectedGenere(`${filterby}`);
                }}
              >
                {filterby}
              </Col>
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
}
