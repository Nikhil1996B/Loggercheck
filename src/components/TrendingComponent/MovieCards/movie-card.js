import React from "react";
import { pathOr } from "ramda";
import { CardContainer, Moviecardsstyle } from "./movie-card-style";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { placeholder_url, placeholder_url_small } from "./placeholderimg/index";
import one from "./placeholderimg/1.svg";
import two from "./placeholderimg/2.svg";
import three from "./placeholderimg/3.svg";
import four from "./placeholderimg/4.svg";
import five from "./placeholderimg/5.svg";
// TODO: Fetch from reducer
const imageUrl = "https://image.tmdb.org/t/p/";
const size = "w500";

export default function MovieCard({
  url = "https://via.placeholder.com/150",
  breakpoint,
  trending,
  history,
}) {
  const bp = pathOr("", ["sm"])(breakpoint);
  const firstItem = pathOr("", ["0"])(trending);
  const secondItem = trending ? trending.slice(1, 3) : [];
  const thirdItem = trending ? trending.slice(3, 5) : [];
  return (
    <>
      <Moviecardsstyle />
      <Container className={"moviecardwidth"}>
        <Row>
          <Col
            style={{
              ...CardContainer.image(
                (url = `${imageUrl}${size}${
                  firstItem && firstItem.backdrop_path
                }`)
              ),
              ...CardContainer.positionrelative(),
            }}
            sm={12}
            md={6}
            lg={6}
            className="trayfilterleft"
            onClick={() => {
              history.push(`contentdetails?id=${firstItem.id}`);
            }}
          >
            <div className="releasedate">
              <div
                style={{
                  color: "#949CB0",
                  fontSize: `80%`,
                  fontWeight: `300`,
                }}
              >
                {firstItem && firstItem.release_date && firstItem.release_date}
              </div>
              {firstItem && firstItem.original_title.length > 5
                ? firstItem.original_title.substring(0, 5) + ".."
                : firstItem.original_title}
            </div>
            <div style={{ ...CardContainer.bottomright() }}>
              <Image src={one} alt="movies list order" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="trayfilterright">
            <Container>
              <Row>
                {secondItem &&
                  secondItem.map((seconditem, key) => (
                    <Col
                      style={{
                        ...CardContainer.image(
                          (url = `${imageUrl}${size}${
                            seconditem && seconditem.backdrop_path
                          }`)
                        ),
                        ...{
                          marginTop: `${bp ? "1rem" : ""}`,
                        },
                      }}
                      className="smaller-resize"
                      key={key}
                      onClick={() => {
                        history.push(`contentdetails?id=${seconditem.id}`);
                      }}
                    >
                      <div className="releasedate">
                        <div
                          style={{
                            color: "#949CB0",
                            fontSize: `60%`,
                            fontWeight: `300`,
                          }}
                        >
                          {seconditem &&
                            seconditem.release_date &&
                            seconditem.release_date}
                        </div>
                        {seconditem && seconditem.original_title.length > 5
                          ? seconditem.original_title.substring(0, 5) + "..."
                          : secondItem.original_title}
                      </div>
                      <div style={{ ...CardContainer.bottomright() }}>
                        <Image
                          src={key === 0 ? two : three}
                          alt="movies list order"
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
              <Row>
                {thirdItem &&
                  thirdItem.map((thirdItem, key) => (
                    <Col
                      style={{
                        ...CardContainer.image(
                          (url = `${imageUrl}${size}${
                            thirdItem && thirdItem.backdrop_path
                          }`)
                        ),
                        ...CardContainer.topmargin(),
                      }}
                      className="smaller-resize"
                      key={key}
                      onClick={() => {
                        history.push(`contentdetails?id=${thirdItem.id}`);
                      }}
                    >
                      <div className="releasedate">
                        <div
                          style={{
                            color: "#949CB0",
                            fontSize: `60%`,
                            fontWeight: `300`,
                          }}
                        >
                          {thirdItem &&
                            thirdItem.release_date &&
                            thirdItem.release_date}
                        </div>
                        {thirdItem && thirdItem.original_title.length > 5
                          ? thirdItem.original_title.substring(0, 5) + "..."
                          : thirdItem.original_title}
                      </div>
                      <div style={{ ...CardContainer.bottomright() }}>
                        <Image
                          src={key === 0 ? four : five}
                          alt="movies list order"
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
