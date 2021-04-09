import React from "react";
import leftarrow from "../../assets/left-arrow.svg";
import { Card, Image } from "react-bootstrap";

export default function Title({ title = "My List", breakpoint }) {
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
