import React from "react";
import { Global, css } from "@emotion/react";

export const MovieCardGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .cardcontent-container {
            position: absolute;
            padding-left: 0.25rem;
            bottom: 8px;
            left: 12px;
            color: white;
            font-size: 18px;
          }

          .movie-data {
            color: #949cb0;
            font-size: 14px;
          }

          @media screen and (max-width: 576px) {
            .cardcontent-container {
              font-size: 12px;
            }
            .movie-data {
              font-size: 10px;
            }
            .oncardtitle {
              font-size: 14px;
            }
          }
          @media all and (orientation: landscape) {
            .oncardtitle {
              font-size: 12px !important;
            }
          }
        `}
      />
    </>
  );
};
