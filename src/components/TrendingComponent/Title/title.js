import React from "react";
import { Card } from "react-bootstrap";

export default function Title({ title = "Trending Movies", breakpoint }) {
  return (
    <Card className="trending-movies-title float-left">
      <Card.Body className="trending-movies-title-text">{title}</Card.Body>
    </Card>
  );
}
