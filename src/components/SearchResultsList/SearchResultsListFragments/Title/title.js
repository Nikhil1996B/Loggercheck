import React from "react";
import { pathOr } from "ramda";
import { Card } from "react-bootstrap";
import { CardTitleStyle, CardBodyStyle } from "./title-style.js";

export default function Title({ title = "Movies", breakpoint }) {
  const bp = pathOr("", ["sm"])(breakpoint);
  return (
    <Card style={CardBodyStyle(bp)} className="float-left moviescardtitle">
      <Card.Body style={CardTitleStyle()}>{title}</Card.Body>
    </Card>
  );
}
