import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

export default function Accountdetailsglobalstyle() {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: InterLight !important;
          }

          @media screen and (max-width: 546px) {
            .${themeName}-account-details-Page .navbar-brand img {
              width: 100% !important;
            }

            .${themeName}-account-details-Page .headercomp {
              padding: 2% 6% !important;
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
}
