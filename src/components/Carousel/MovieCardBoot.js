import React from "react";
import { pathOr } from "ramda";
import { useHistory } from "react-router-dom";
import Progress from "../../UI_Frontendlib/atoms/linerprogress";
import HoverScreen from "./HoverScreen/hoverscreen";
// import { Link } from "react-router-dom";
import { CardTextBeneath } from "./CarousalFragments/BelowCardContent/cardcontent";
import { useMediaQuery } from "../../components/Header/viewportHook";
import { Container, Card } from "react-bootstrap";
import { moviecard } from "./movicardstyle";
import { CardContentOnCard } from "./CarousalFragments/OnCardCardContent/oncardcontent";
import { analyticsService } from "../../services/analyticsapi.service";

import { CarousalStyle } from "./movicardstyle";

const imageUrl = "https://image.tmdb.org/t/p/";
const size = "w500";

const MovieCard = ({
  movie,
  style,
  progressBar = false,
  displayTextOnCard = false,
  displayHoverState = false,
  redirecturl,
  smallsize,
  displayCard,
  index,
}) => {
  const history = useHistory();

  const breakpoint = {
    sm: useMediaQuery("(max-width: 576px)"),
    md: useMediaQuery("(max-width: 768px)"),
    lg: useMediaQuery("(min-width:1200px"),
  };
  const sm = pathOr("", ["sm"])(breakpoint);
  const setPosition = (item) => {
    var x = document.getElementById(`1${item.id}`);
    var divItem = document.getElementById(`2${item.id}`);
    var count = 0;

    if (divItem && divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };

  return (
    <>
      <CarousalStyle />
      <Container
        style={moviecard.container(sm)}
        className={"cardhover"}
        onClick={() => {
          analyticsService.contentalaytics("content", "play_started", movie.id);
          history.push(`contentdetails?id=${movie.id}`);
          // return window.location.pathname = `${redirecturl}`
        }}
      >
        <Card style={{ border: "none" }}>
          <Card.Body
            style={moviecard.background(imageUrl, size, movie, sm)}
            id={`1${movie.id}`}
            onMouseEnter={() => {
              if (displayHoverState) {
                setPosition(movie);
              }
            }}
          ></Card.Body>
          {displayHoverState && (
            <div className="displayhoverScreen" id={`2${movie.id}`}>
              <HoverScreen
                item={movie}
                api_key={""}
                media_type={""}
                backgroundImage={`${imageUrl}${size}${movie.backdrop_path}`}
                smallsize={smallsize}
                displayCard={displayCard}
                index={index}
              />
            </div>
          )}
          {displayTextOnCard && <CardContentOnCard movie={movie} sm={sm} />}
        </Card>
        {progressBar && <Progress value={70} />}
        {!displayTextOnCard && <CardTextBeneath movie={movie} sm={sm} />}
      </Container>
    </>
  );
};

export { MovieCard };
