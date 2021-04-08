import React from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCardGlobalStyle } from "./oncardcontentstyle";
export const CardContentOnCard = ({ movie, sm }) => {
  return (
    <>
      <MovieCardGlobalStyle />
      <Row className="cardcontent-container">
        <Col md={12} className="movie-data">
          {movie.release_date ? movie.release_date.split("-")[0] : null}
        </Col>
        <Col md={12} className="oncardtitle">
          {movie.title && movie.title.length > 20
            ? movie.title.substring(0, 10) + ".."
            : movie.title}
        </Col>
      </Row>
    </>
  );
};
