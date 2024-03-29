import React from "react";
import { Card } from "react-bootstrap";

export default function Title({ title = "Trending Movies" }) {
  return (
    <Card className="float-left trayfiltertitle">
      <Card.Body className="trayfiltertxt">{title}</Card.Body>
    </Card>
  );
}
