import React from "react";
import { pathOr } from "ramda";
import leftarrow from "../../assets/left-arrow.svg";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { CardTitleStyle, CardBodyStyle } from "./title-style.js";
import { useMediaQuery } from "../../../Header/viewportHook";

export default function Title({ title = "My List", breakpoint }) {
  const bp = pathOr("", ["sm"])(breakpoint);
  const sm = useMediaQuery("(max-width: 456px)");
  return (
    <Card className="float-left mylist-card-body">
      <Card.Body className="mylist-card-title">
        <span
          onClick={() => {
            return (window.location.pathname = "/");
          }}
        >
          <Image
            src={leftarrow}
            alt={"back to home"}
            className="mylist-image-container"
          />
        </span>
        <span className="mylist-section-title">{title}</span>
      </Card.Body>
    </Card>
  );
}
