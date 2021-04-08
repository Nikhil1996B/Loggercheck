import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import play from "../../assets/play.svg";
import like from "../../assets/like.svg";
import plus from "../../assets/plus.svg";
import { TitleStyle } from "./titlestyle";
import { analyticsService } from "../../../../../services/analyticsapi.service";

export default function Title({ smallsize, contentid }) {
  return (
    <Card.Title>
      <Row>
        <Col md={6} style={TitleStyle.column(smallsize)}>
          <span
            onClick={() =>
              analyticsService.contentalaytics(
                "content",
                "play_started",
                contentid
              )
            }
          >
            <Image
              src={play}
              alt="play"
              style={TitleStyle.image(smallsize)}
              className={"huecolor"}
            />
          </span>
          {!smallsize ? (
            <span style={TitleStyle.span(smallsize)}>play</span>
          ) : null}
        </Col>
        <Col md={6} style={TitleStyle.textalign()}>
          <span
            onClick={() =>
              analyticsService.contentalaytics(
                "content",
                "play_started",
                contentid
              )
            }
          >
            <Image
              src={plus}
              alt="add to list"
              style={TitleStyle.rightImage(smallsize)}
              className={"huecolor"}
            />
          </span>
          <span
            onClick={() =>
              analyticsService.contentalaytics("content", "liked", contentid)
            }
          >
            <Image
              src={like}
              alt="like"
              style={TitleStyle.leftImage(smallsize)}
              className={"huecolor"}
            />
          </span>
        </Col>
      </Row>
    </Card.Title>
  );
}
