import React, { useState } from "react";
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
  return (
    <Card className="mx-auto border-0">
      <Card.Body className="trendingnowfilterbody">
        <Row className="mx-auto mt-3">
          {filtertype &&
            filtertype.map((filterby, key) => (
              <Col
                style={filterTypeTxtStyle.text(selectedGenere === filterby)}
                key={key}
                className={`${filterby} ${key} filterby`}
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
