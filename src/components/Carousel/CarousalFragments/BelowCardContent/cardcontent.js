import React from "react";
import { Card, Row } from "react-bootstrap";

export const CardTextBeneath = ({ movie }) => {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Body className="textbeneath">
          <Row
            style={{ fontWeight: "300", fontSize: "10px", color: "#949CB0" }}
          >
            {movie.release_date ? movie.release_date.split("-")[0] : null}
          </Row>
          <Row className="textsize">
            {movie.title && movie.title.length > 20
              ? movie.title.substring(0, 10) + ".."
              : movie.title}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
