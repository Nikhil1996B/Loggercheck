import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardStyle } from "./detailsstyle";
import { useMediaQuery } from "../../../Header/viewportHook";

export const DetailsTab = ({ production, writing, crew }) => {
  const sm = useMediaQuery("(max-width:456px)");
  return (
    <>
      <Container className="details-wrapper">
        <Card.Body>
          <Container>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {production.length > 0 ? (
                  <div className="details-card-title">Production</div>
                ) : null}
              </Col>
              <Col md={10}>
                {production && production.length > 0 ? (
                  <div className="details-brand-clor">
                    {production.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {production.length > 0 ? (
                  <div className="details-card-title">Writing</div>
                ) : null}
              </Col>
              <Col md={10}>
                {writing && writing.length > 0 ? (
                  <div className="details-brand-clor">
                    {writing.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
            <Row style={CardStyle.Details()}>
              <Col md={2}>
                {crew && crew.length > 0 ? (
                  <div className="details-card-title">crew</div>
                ) : null}
              </Col>
              <Col md={10}>
                {crew && crew.length > 0 ? (
                  <div className="details-brand-clor">
                    {crew.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Container>
    </>
  );
};
