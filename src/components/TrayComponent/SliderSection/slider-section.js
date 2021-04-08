import React from "react";
import Home from "../../Carousel/Home";
import { pathOr } from "ramda";
import useWindowSize from "../../../helpers/viewport";

export default function SliderSection({
  traycontent,
  display,
  breakpoint,
  title,
}) {
  const sm = pathOr("", ["sm"])(breakpoint);
  const size = useWindowSize();

  return (
    <Home
      displayTextOnCard={true}
      movies={traycontent}
      displayCard={pathOr(768, ["width"])(size) < 546 ? 3 : 5}
      progressBar={false}
      displayHoverState={true}
      redirecturl={"/contentdetails"}
      title={title}
    />
  );
}
