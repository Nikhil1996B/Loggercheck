import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

export const TrayFilterGlobalStyle = () => {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(theme);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          .carousalWrapper {
            width: 100%;
            .filter {
              // position: absolute;
              margin-right: 18px;
              // width: 47%;
              display: flex;
              right: 0;
              ul {
                display: flex;
                li {
                  list-style-type: none;
                  text-emphasis: none;
                  margin: 10px 15px;
                  a:hover {
                    font: var(--tentkotta-font-style-normal) normal
                      var(--tentkotta-font-weight-normal)
                      var(--tentkotta-font-size-14) /
                      var(--tentkotta-line-spacing-38)
                      var(--tentkotta-font-family-inter);
                    color: var(--tentkotta-color-ff8b53);
                  }
                  a {
                    font: var(--tentkotta-font-style-normal) normal
                      var(--tentkotta-font-weight-normal)
                      var(--tentkotta-font-size-14) /
                      var(--tentkotta-line-spacing-38)
                      var(--tentkotta-font-family-inter);
                    color: var(--tentkotta-color-949cb0);
                  }
                }
              }
              hr {
                height: 0;
                margin-top: 43px;
                margin-right: 18px;
              }
              h1 {
                margin-left: 28px;
              }
            }

            .carousel-title {
              font: var(--tentkotta-font-style-normal) normal
                var(--tentkotta-font-weight-normal) 25px /
                var(--tentkotta-line-spacing-38)
                var(--tentkotta-font-family-inter);
              letter-spacing: var(--tentkotta-character-spacing-0);
              color: var(--tentkotta-color-ffffff);
              width: 50%;
            }
          }
          .active {
            background: none !important;
            a {
              color: var(--tentkotta-color-ff8b53) !important;
            }
          }
          .tray-with-filter {
            padding: 0 1rem;
            .carousel-content
              > div
              > div
              > div
              > div
              > div
              > div:first-of-type {
              height: 25vh;
            }
            h1 {
              font: var(--tentkotta-font-style-normal) normal
                var(--tentkotta-font-weight-normal) 32px /
                var(--tentkotta-line-spacing-38)
                var(--tentkotta-font-family-inter);
              letter-spacing: var(--tentkotta-character-spacing-0);
            }
          }

          .filtercardbody {
            border: none;
            background: ${bgcolor};
          }

          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
            .carousel-title {
              hr {
                display: none;
              }
            }
          }

          @media screen and (max-width: 456px) {
            .carousel-title {
              font-size: 14px;
            }
          }

          .tray-with-filter {
            padding: 0 1rem;
          }

          .tray-with-filter
            .carousel-content
            > div
            > div
            > div
            > div
            > div:first-of-type {
            height: 25vh;
          }

          .tray-with-filter
            .carousel-content
            > div
            > div
            > div
            > div
            > div:first-of-type {
            height: 39vh;
          }

          .trayfiltertitle {
            border: none;
            width: 100%;
            padding: 0;
            background: ${bgcolor};
            fontweight: 600;
          }

          .trayfiltertxt {
            width: 100%;
            background: ${bgcolor};
            color: white;
            font-size: 28px;
          }

          .trayfilterby {
            font-size: 14px;
            padding-right: 2rem;
          }

          // landscape view
          @media all and (orientation: landscape) and (min-width: 568px) and (max-width: 1024px) {
            .trayfiltertxt {
              font-size: 24px !important;
              text-align: left !important;
              padding: 0 0 0 1rem;
            }

            .filtercardbody {
              display: block !important;
              padding: 0 0 4px 0 !important;
            }

            .trayfilterby {
              font-size: 11px;
            }

            .textsize {
              font-size: 11px !important;
            }

            .trayfiltertitle {
              padding: 0 !important;
            }

            body .${themeName}-Home-Page.trayInfoWrapper {
              padding-left: 1rem !important;
            }

            .popular-movies-mob {
              padding-left: 1rem;
            }
          }

          // small devices
          @media screen and (max-width: 455px) {
            .trayfiltertxt {
              font-size: 14px;
              padding-left: 2%;
              padding-bottom: 0;
              text-align: center;
            }
            .trayfilterby {
              padding-right: 0.5rem;
            }

            .filtercardbody {
              display: flex;
            }

            .filtercardbody {
              display: block !important;
              padding: 0 0 4px 0 !important;
            }

            .trayfilterby {
              font-size: 11px;
            }

            .textsize {
              font-size: 11px !important;
            }

            .trayfiltertitle {
              padding: 0 !important;
            }
          }

          // ipad view
          @media screen and (width: 768px) {
            .trayfilterby {
              padding: 0px;
            }

            .tray-with-filter {
              margin-bottom: 1rem;
            }
          }
        `}
      />
    </>
  );
};
