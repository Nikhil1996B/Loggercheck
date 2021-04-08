import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
// import VideoPreview from "../../../UI_Frontendlib/molecules/previewVideoPlayer";
import Title from "./HoverScreenFragments/Title/title";
import Description from "./HoverScreenFragments/Description/description";
import Subtitle from "./HoverScreenFragments/Subtitles/subtitle";
import { Link } from "react-router-dom";
import { hoverscreenstyle } from "./hoverscreenstyle";

const HoverScreen = ({
  item,
  api_key,
  media_type,
  backgroundImage,
  smallsize = false,
  displayCard,
  index,
}) => {
  const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
  const [sendConfigurations, setSendConfigurations] = useState({
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "23%",
    // height: "100%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    opacity: 0,
    backgroundSize: "cover",
    overflow: "hidden",
    border: "none",
    outline: "none",
  });
  const config = {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  };
  // config videoautoplay
  const [autoPlayConfig, setAutoPlayConfig] = React.useState({
    opacity: 0,
  });
  // React.useEffect(() => {
  //   let timer = setTimeout(function () {
  //     setAutoPlayConfig({ ...autoPlayConfig, opacity: 1 });
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // const handleMouseHover = () => {
  //   return setTimeout(function () {
  //     setAutoPlayConfig({ ...autoPlayConfig, opacity: 1 });
  //     setSendConfigurations({ ...sendConfigurations, opacity: 1 });
  //   }, 5000);
  // };

  return (
    <Card
      style={{
        width: `${smallsize ? "14rem" : "20rem"}`,
        height: `${smallsize ? "17rem" : "25.25rem"}`,
        top: `${smallsize ? "0.8rem" : ""}`,
        right: `${
          displayCard === index + 1
            ? `${
                smallsize
                  ? `${
                      displayCard && displayCard.length > 6 ? "7rem" : "4.9rem"
                    }`
                  : "3.3rem"
              }`
            : ""
        }`,
        boxShadow: "6px 3px 12px #362F2FD1",
      }}
      className={"hoverscreen-wrapper"}
      id={`hoverscreen-wrapper`}
      // onMouseOver={() => handleMouseHover()}
      // onMouseOut={() =>
      //   setSendConfigurations({ ...sendConfigurations, opacity: 0 })
      // }
    >
      <Link
        to={`/${media_type}?id=${item.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        {/* <VideoPreview videoConfigStyle={sendConfigurations} config={config} /> */}
        <Card.Img
          variant="top"
          src={backgroundImage}
          style={hoverscreenstyle.image(smallsize)}
        />
        <Card.Body
          style={{
            padding: `${smallsize ? "0.45rem 0.25rem 0 0.25rem" : ""}`,
            marginBottom: `${smallsize ? `0.35rem` : ""}`,
          }}
        >
          <Container
            style={{
              padding: `${smallsize ? "" : "0 0.15rem"}`,
            }}
          >
            <Title smallsize={smallsize} contentid={item.id} />
            <Description smallsize={smallsize} />
            <Subtitle smallsize={smallsize} />
          </Container>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default HoverScreen;
