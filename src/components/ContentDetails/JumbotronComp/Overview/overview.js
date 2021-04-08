import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { CardStyle } from "./overviewstyle";
import { useMediaQuery } from "../../../Header/viewportHook";

export default function Overview({ overview, director }) {
  const sm = useMediaQuery("(max-width: 456px)");
  const overviewtxt = `The film Master is about JD a Personality Development professor. He is addicted to alcohol due to depression. There comes a moment that forces him to leave the college and go work as a teacher at Juvenile for a few months. As JD spends time, he comes to understand that the youngsters of the detention home are being exploited by a deadly gangster Bhavani by pushing these young minds into addiction.`;
  const substrgoverview =
    overviewtxt && overviewtxt.length > 10
      ? overviewtxt.substring(0, 100) + "..."
      : overviewtxt;
  return (
    <>
      <Card style={CardStyle.card()}>
        <Card.Body style={CardStyle.card()}>
          <Container>
            <Row
              style={{ ...CardStyle.container() }}
              className="jumbotron-overview"
            >
              {sm ? substrgoverview : overviewtxt}
            </Row>
            <Row style={CardStyle.Details()}>
              <Col className="jumbotron-overview-card-title" md={2}>
                Director
              </Col>
              <Col md={10} className="jumbotron-overview-color">
                {director}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col className="jumbotron-overview-card-title" md={2}>
                Director
              </Col>
              <Col md={10} className="jumbotron-overview-color">
                {director}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col className="jumbotron-overview-card-title" md={2}>
                Director
              </Col>
              <Col md={10} style={CardStyle.brandcolor(sm)}>
                {director}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
