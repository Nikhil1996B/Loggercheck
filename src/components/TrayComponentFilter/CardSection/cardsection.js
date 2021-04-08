import React from "react";
import Home from "../../Carousel/Home";
import useWindowSize from "../../../helpers/viewport";
import { pathOr } from "ramda";
export default function CardSection({ trending, displayCard, redirecturl }) {
  const size = useWindowSize();

  return (
    <Home
      movies={trending}
      displayCard={pathOr(768, ["width"])(size) < 546 ? 3 : 8}
      redirecturl={redirecturl}
      displayTextOnCard={false}
      displayHoverState={true}
      smallsize={true}
    />
  );
}
