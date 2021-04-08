import React from "react";
import { Global, css } from "@emotion/react";

export const CardContainer = {
  image: (url) => ({
    backgroundImage: `linear-gradient(360deg, #000000 0%, #00000024 100%),url(${url})`,
    backgroundRepeat: `no-repeat, repeat`,
    backgroundColor: "#131722",
    backgroundPosition: `50% 50%`,
    backgroundSize: "cover",
  }),
  topmargin: () => ({
    marginTop: "1rem",
  }),
  positionrelative: () => ({
    position: "realative",
  }),
  positionabsolute: () => ({
    position: "absolute",
  }),
  bottomright: () => ({
    position: `absolute`,
    bottom: `8px`,
    right: `16px`,
    fontSize: `18px`,
    color: "white",
  }),
};

export const Moviecardsstyle = () => {
  return (
    <>
      <Global
        styles={css`
          .trayfilterleft {
            min-height: 55vh;
          }

          .smaller-resize {
            min-height: 28vh;
            margin: 0 1rem;
          }

          .releasedate {
            position: absolute;
            bottom: 8px;
            left: 16px;
            font-size: 18px;
            color: white;
          }

          @media screen and (max-width: 576px) {
            .trayfilterleft,
            .trayfilterright {
              min-height: 30vh;
              padding-right: 0;
              padding-left: 0;
            }
            .smaller-resize {
              margin: 0 0.2rem;
            }
            .releasedate {
              font-size: 12px;
            }
          }

          @media screen and (min-width: 1200px) {
            .moviecardwidth {
              max-width: 100%;
            }
          }
        `}
      />
    </>
  );
};
