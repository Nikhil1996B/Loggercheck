import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const HomePageLayout = () => {
  const theme = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          body,
          html {
            height: initial !important;
            font-family: InterLight;
          }
          .footer {
            background: ${bgcolor};
          }
          body {
            font-family: InterLight !important;
            .${themeName}-Home-Page {
              width: 100% !important;
              position: relative;
              background: ${bgcolor};
              min-height: 90vh !important;
              .headerShadow {
                position: initial;
              }
            }
            .${themeName}-homepage-section {
              position: relative;
            }

            .${themeName}-Home-Page header {
              position: absolute;
              width: 100%;
              top: 0;
            }

            .${themeName}-Home-Page header .headercomp {
              background: transparent
                linear-gradient(180deg, #00000096 0%, #0000001a 100%) 0% 0%
                no-repeat padding-box !important;
              z-index: 5;
            }

            .${themeName}-homepage-section {
              background: ${bgcolor};
            }

            .${themeName}-Home-Page .trayInfoWrapper {
              padding-left: 3rem;
            }

            .upgrade {
              font-family: InterLight, sans-serif;
              background: #e1540f !important;
            }
          }
          @media screen and (max-width: 480px) {
            .${themeName}-Home-Page .trayInfoWrapper {
              padding-left: 0px !important;
            }
          }
          @media only screen and (device-width: 768px) {
            .${themeName}-Home-Page .trayInfoWrapper {
              padding-left: 0px !important;
            }
          }

          @font-face {
            font-family: "InterLight";
            src: local("InterLight"),
              url("../../assets/fonts/InterLight.ttf") format("woff");
            font-weight: normal;
          }
        `}
      />
    </>
  );
};

export default HomePageLayout;
