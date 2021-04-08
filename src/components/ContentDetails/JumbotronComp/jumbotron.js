import React from "react";
import { pathOr } from "ramda";
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Row } from "react-bootstrap";
import Title from "./Title/title";
import Overview from "./Overview/overview";
import Buttonsection from "./Button/buttonsection";
import {
  JumbotronStyle,
  ContainerStyle,
  JumbotronWrapperStyle,
} from "./jumbotronstyle";

export default function JumbotronComp({
  movieDetails,
  hours,
  minutes,
  director,
  image_base_url,
  movie_id,
}) {
  const history = useHistory();
  const title = pathOr("", ["title"])(movieDetails);
  const overview = pathOr("", ["overview"])(movieDetails);
  const release_date = pathOr("", ["release_date"])(movieDetails);
  const adult = pathOr("", ["adult"])(movieDetails);
  const backdrop_path = pathOr("", ["backdrop_path"])(movieDetails);
  const url = `${image_base_url}${backdrop_path}`;
  const handleClick = () => {
    history.push("/player");
  };
  return (
    <div>
      <JumbotronWrapperStyle />
      <Jumbotron style={JumbotronStyle(url)} className="jumbotron-wrapper">
        <Container style={ContainerStyle()} className="jumbotron-ctr-wrapper">
          <Row>
            <Title
              title={title}
              overview={overview}
              hours={hours}
              minutes={minutes}
              release_date={release_date}
              adult={adult}
            />
            <Buttonsection handleClick={handleClick} movie_id={movie_id} />
            <Overview overview={overview} director={director} />
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
