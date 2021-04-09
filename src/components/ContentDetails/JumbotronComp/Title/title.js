import React from "react";
import { Card, Row, Image } from "react-bootstrap";
import { CardStyle } from "./titlestyle";
import fullhd from "../../assets/fullhd.svg";
import subtitles from "../../assets/subtitles.svg";

export default function Title({
  title,
  overview,
  hours,
  minutes,
  release_date,
  adult,
}) {
  return (
    <Card style={CardStyle.card()}>
      <Card.Body style={CardStyle.card()}>
        <Card.Title className="jumbotron-card-title">{title}</Card.Title>
        <Row>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
            className="jumbotron-movie-details"
          >
            {hours > 0 ? `${hours}h ` : ""}
            {minutes > 0 ? `${minutes}min` : ""}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
          >
            {release_date ? release_date.substr(0, 4) : ""}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
          >
            Certificate:
            {adult ? " 18+" : " U"}
          </div>
          <div
            style={{
              ...CardStyle.movierunTime(),
            }}
          >
            <Image
              src={subtitles}
              style={{ marginRight: "1rem" }}
              alt="add to subtitles"
            />
            <Image src={fullhd} alt="available in full HD" />
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
}
