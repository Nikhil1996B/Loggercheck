import React from "react";
import { HeaderContext } from "../../header-context";
import { Container, Row, Button, Image, Card, Figure } from "react-bootstrap";
import { pathOr } from "ramda";
import cancel from "./icons/cancel.svg";
import SideNav from "react-simple-sidenav";

import {
  CardHeaderStyle,
  CardStyle,
  ImageStyle,
  CrossBtnStyle,
  FigureStyle,
  SubscribeBtnStyle,
} from "./user-auth-style";

// icons
import logout from "../../assets/logout.svg";
import devices from "./icons/devices.svg";
import movieclapper from "./icons/movie-clapper.svg";
import series from "./icons/series.svg";

export const SideMenuContent = ({
  icons = "",
  setShow,
  handleSignInClick,
  history,
  dispatch,
  header_user_config,
}) => {
  //   const devices = pathOr("", ["devices"])(icons);
  const account = pathOr("", ["account"])(icons);

  return (
    <Container style={{ display: "block" }}>
      <Row>
        <Card style={CardHeaderStyle()}>
          <div className="float-right">
            <button
              type="button"
              className={"close"}
              aria-label="Close"
              onClick={() => setShow(false)}
            >
              <Image
                src={cancel}
                alt={"close account overlay"}
                style={CrossBtnStyle()}
              />
            </button>
          </div>
        </Card>
      </Row>
      <Row>
        <Card style={CardStyle()}>
          <Row>
            <Image
              src={movieclapper}
              alt={"checkout our movie clapper"}
              style={ImageStyle()}
            ></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
              }}
            >
              Movies
            </Card.Body>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card style={CardStyle()}>
          <Row>
            <Image src={series} style={ImageStyle()} alt={"movies"}></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
              }}
            >
              Web Series
            </Card.Body>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card style={CardStyle()}>
          <Row>
            <Image
              src={devices}
              alt={"devices support"}
              style={ImageStyle()}
            ></Image>
            <Card.Body
              style={{
                border: "none",
                maxWidth: "74%",
                paddingTop: "3%",
              }}
            >
              Devices
            </Card.Body>
          </Row>
        </Card>
      </Row>

      <Row className={"account-logout"}>
        <Card style={{ ...CardStyle(), minHeight: "12vh", border: "none" }}>
          <Row className="mx-auto">
            <Figure
              style={FigureStyle.figure()}
              onClick={() => {
                history.push("/accountdetails");
              }}
            >
              <Figure.Image
                src={account}
                alt="account"
                style={FigureStyle.image()}
              ></Figure.Image>
              <Figure.Caption style={FigureStyle.caption()}>
                Account
              </Figure.Caption>
            </Figure>
            <Figure
              style={FigureStyle.figure()}
              onClick={() => {
                handleSignInClick(
                  header_user_config.url,
                  header_user_config.currenturl
                );
                setShow(true);
              }}
            >
              <Figure.Image
                src={logout}
                alt="logout"
                style={FigureStyle.image()}
              ></Figure.Image>
              <Figure.Caption style={FigureStyle.caption()}>
                Logout
              </Figure.Caption>
            </Figure>
          </Row>
        </Card>
      </Row>

      <Row>
        <Button
          onClick={() => {
            dispatch({ type: "RESET_SIGIN" });
            history.push("/signUp");
          }}
          style={SubscribeBtnStyle}
          className="mx-auto"
        >
          Subscribe
        </Button>
      </Row>
    </Container>
  );
};

export const MenueCard = ({
  show,
  setShow,
  icons,
  handleSignInClick,
  dispatch,
  history,
  header_user_config,
}) => {
  return (
    <SideNav
      navStyle={{
        minWidth: "30%",
        minHeight: "100%",
        height: "auto",
        backgroundColor: "#131722",
      }}
      showNav={show}
      onHideNav={() => setShow(false)}
      itemStyle={{ backgroundColor: "#131722" }}
      openFromRight={false}
      itemHoverStyle={{ backgroundColor: "#CDDC39" }}
    >
      <SideMenuContent
        icons={icons}
        setShow={setShow}
        handleSignInClick={handleSignInClick}
        dispatch={dispatch}
        history={history}
        header_user_config={header_user_config}
      />
    </SideNav>
  );
};

export const AuthenticatedUser = () => {
  return (
    <HeaderContext.Consumer>
      {({
        profile,
        setShow,
        show,
        handleSignInClick,
        emailAddress,
        icons,
        dispatch,
        history,
        header_user_config,
      }) => (
        <>
          <img
            src={profile}
            // src={account}
            alt="signed-in avatar"
            id="signedIn"
            className={"avatar avatar-icon"}
            onClick={() => setShow(!show)}
          />
          <MenueCard
            setShow={setShow}
            show={show}
            icons={icons}
            handleSignInClick={handleSignInClick}
            dispatch={dispatch}
            history={history}
            header_user_config={header_user_config}
          />
        </>
      )}
    </HeaderContext.Consumer>
  );
};

export default function UserAuth() {
  return (
    <HeaderContext.Consumer>
      {({ isSignedIn, handleSignInClick, header_user_config }) => (
        <>
          {header_user_config && header_user_config.showbtn && (
            <Button
              onClick={() =>
                handleSignInClick(
                  header_user_config.url,
                  header_user_config.currenturl
                )
              }
              className="authuser-btn-style"
            >
              {header_user_config && header_user_config.btntxt}
            </Button>
          )}
          {header_user_config && header_user_config.avatar && (
            <AuthenticatedUser />
          )}
        </>
      )}
    </HeaderContext.Consumer>
  );
}
