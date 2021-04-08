import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const TrendingNowStyle = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );

  return (
    <>
      <Global
        styles={css`
          .trendingnowcontainer {
            margin-bottom: 3rem;
          }

          .title-container {
            padding-left: 0px;
          }

          .trending-movies-title {
            width: 100%;
            border: none;
          }

          .trending-movies-title-text {
            width: 100%;
            background: ${bgcolor};
            color: white;
            font-size: 24px;
            padding-left: 0px;
            font-weight: bold;
          }

          .filterby {
            padding-right: 2rem;
            font-size: 14px;
          }

          .trendingnowfilterbody {
            background: ${bgcolor};
            border: none;
          }

          //   mobile devices
          @media screen and (max-width: 455px) {
            .trending-movies-title-text {
              font-size: 14px;
              padding-bottom: 0;
              padding-top: 0;
              text-align: center;
            }

            .trendingnowfilterbody {
              padding: 0 0 0.25rem 0;
              display: flex;
            }

            .trendingnowcol {
              padding: 0;
            }

            .trendingnowcontainer,
            .moviecardwidth {
              margin-bottom: 1rem !important;
              width: 97%;
            }

            .filterby {
              padding-bottom: 4px;
              font-size: 12px;
              padding-right: 0.5rem;
            }

            .trayfilterleft img {
              height: 60px;
            }

            .trayfilterright img {
              height: 40px;
            }
          }

          // landscape mode
          @media all and (orientation: landscape) and (min-width: 568px) and (max-width: 1024px) {
            .trayfilterleft {
              width: 49% !important;
              flex: inherit;
            }

            .trayfilterleft img {
              height: 60px;
            }

            .trayfilterright img {
              height: 40px;
            }

            .trayfilterright {
              width: 49% !important;
              flex: inherit;
            }

            .trendingnowcontainer,
            .moviecardwidth {
              max-width: 96%;
            }

            .releasedate {
              font-size: 12px !important;
            }

            .trendingnowcontainer .card-body {
              padding: 0;
              font-size: 20px;
            }

            .trendingnowfilterbody {
              margin-bottom: 1rem;
            }

            .trendingnowcol > div {
              background: ${bgcolor};
            }
          }

          // large screens and above
          @media screen and (min-width: 1200px) {
            .trendingnowcontainer {
              max-width: 98%;
            }
          }

          // extra large screens
          @media screen an (min-width: 1440px) {
            .trendingnowcontainer {
              margin-left: 2rem;
            }
          }
        `}
      />
    </>
  );
};
