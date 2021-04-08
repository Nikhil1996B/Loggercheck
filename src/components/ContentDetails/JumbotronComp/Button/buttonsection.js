import React from "react";
import { Row, Button, Container, Image } from "react-bootstrap";
import play from "../../assets/play.svg";
import like from "../../assets/like.svg";
import plus from "../../assets/plus.svg";
import { CardStyle } from "./buttonstyle";
import { analyticsService } from "../../../../services/analyticsapi.service";

export default function Buttonsection({ handleClick, movie_id }) {
  return (
    <Container style={CardStyle.container()}>
      <Row>
        <Button
          className="jumbotron-play"
          onClick={() => {
            analyticsService.contentalaytics(
              "content",
              "play_started",
              movie_id
            );
            handleClick();
          }}
        >
          <Row>
            <Image
              src={`${play}`}
              alt="play button"
              className="imageCont-btn"
            />
            <span className="btnTxtjumbotron-play-btn-txt">{"play"}</span>
          </Row>
        </Button>
        <Image src={plus} roundedCircle className="jumbotron-icon-wrapper" />
        <Image src={like} roundedCircle className="jumbotron-icon-wrapper" />
      </Row>
    </Container>
  );
}
