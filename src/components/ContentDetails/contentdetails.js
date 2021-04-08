import React from "react";
import { pathOr } from "ramda";
import "./styles.scss";
import JumbotronComp from "./JumbotronComp/jumbotron";
import Controlledtab from "./ControlledTab/controlledtab";

export const ContentDetails = ({
  credits,
  movieDetails,
  videos,
  trailer_id,
  YoutubePlay,
  hours,
  minutes,
  crew,
  director,
  production,
  writing,
  opts,
  image_base_url,
  breakpoint,
  movie_id,
}) => {
  const sm = pathOr("", ["sm"])(breakpoint);
  return (
    <>
      <JumbotronComp
        movieDetails={movieDetails}
        hours={hours}
        minutes={minutes}
        director={director}
        image_base_url={image_base_url}
        movie_id={movie_id}
      />
      <Controlledtab
        production={production}
        writing={writing}
        crew={crew}
        breakpoint={sm}
      />
    </>
  );
};
