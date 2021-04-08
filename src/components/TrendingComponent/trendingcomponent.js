import React from "react";
import { pathOr } from "ramda";
import Title from "./Title/title";
import Filter from "./Filter/filter";
import MovieCard from "./MovieCards/movie-card";
import { Container, Row, Col } from "react-bootstrap";
import { TrendingNowStyle } from "./trendingnowlayout";

export default function TrendingNowTray({
  title = "Trending Now",
  trending = [],
  breakpoint,
  history,
  filtertype,
  handleFilterClick,
}) {
  return (
    <>
      <TrendingNowStyle />
      <Container className="trendingnowcontainer">
        <Row>
          <Col sm={12} md={6} className="title-container">
            <Title breakpoint={breakpoint} title={title} />
          </Col>
          <Col sm={12} md={6} className="trendingnowcol">
            <Filter
              breakpoint={breakpoint}
              filtertype={filtertype}
              handleFilterClick={handleFilterClick}
            />
          </Col>
          <MovieCard
            breakpoint={breakpoint}
            trending={trending}
            history={history}
          />
        </Row>
      </Container>
    </>
  );
}
