import React from "react";
import {
  Jumbotron,
  Button,
  Card,
  Container,
  Row,
  Image,
} from "react-bootstrap";
import { pathOr } from "ramda";
import { HeroBanner } from "../../hero-banner-context";
import {
  JubotronStyle,
  CardStyle,
  SubscriptionStyleTitle,
} from "./jumbotron-style";
import JumbotronLayout from "./jubotronlayoutstyle";
import CustomizedInputBase from "../../subscriptionForm";

export default function JumbotronComp() {
  return (
    <HeroBanner.Consumer>
      {({ url, isSignedIn, handleClick, plus, play, breakpoint }) => (
        <>
          <JumbotronLayout />
          <Jumbotron
            style={JubotronStyle(url)}
            fluid
            className={"rounded-0 jumbotronwrapper"}
          >
            {isSignedIn ? (
              <Card className="jumbotroncarddetails">
                <Card.Body>
                  <Card.Title className="jumbotron-title">MASTER</Card.Title>
                  <Card.Subtitle className="mb-2 subtitles">
                    2009 | ACTION-THRILLER | 179 Minutes
                  </Card.Subtitle>
                  <Container>
                    <Row className="jumbotron-card-wrapper">
                      <Button className="play" onClick={() => handleClick()}>
                        <Row>
                          <Image
                            src={`${play}`}
                            alt="play button"
                            className="imageCont"
                          />
                          <span className="btnTxt">{"play"}</span>
                        </Row>
                      </Button>
                      <Button
                        className="addToList"
                        style={CardStyle.addToList()}
                        onClick={() => {}}
                      >
                        <Row>
                          <Image
                            src={plus}
                            alt="shortlist movie"
                            className="addtolistimg"
                          />
                          <span className="addtolisttxt">Add to my list</span>
                        </Row>
                      </Button>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            ) : (
              <Card className="jumbtronsubscribe">
                <Card.Body>
                  <Card.Subtitle className="subscription">
                    get your subscription now
                  </Card.Subtitle>
                  <CustomizedInputBase />
                </Card.Body>
              </Card>
            )}
          </Jumbotron>
        </>
      )}
    </HeroBanner.Consumer>
  );
}
