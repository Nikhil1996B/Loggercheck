import React from "react";
import { Global, css } from "@emotion/react";

export const TrayComponentGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
                .tray-wrapper {
                    padding: 0 0.5rem;
                    .carousel-content > div > div > div > div > div > div:first-of-type {
                        height: 45vh;
                    }
                    .carousel-content > div > div > div > div {
                        margin: 0 1%;
                    }
                    .carousel-content > div > div > div {
                        margin-bottom: 4rem;
                        margin-top: 1rem;
                    }
                }
                .traycomp {
                    margin: 0px 0.8rem;
                }
                
                /* Portrait and Landscape */
                @media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
                    .tray-wrapper {
                        .carousel-content > div > div > div > div > div > div:first-of-type {
                            height: 34vh;
                        }
                        .carousel-content > div > div > div > div {
                            margin: 0 2%;
                        }
                        .carousel-content > div > div > div {
                            margin-bottom: 0;
                        }
                    }
                    .traycomp {
                        margin: 0px;
                    }
                }
               .tray-wrapper {
                padding: 0 0.15rem;
                .carousel-content > div > div > div > div > div > div:first-of-type {
                    height: 21.43rem;
                }
                .carousel-content > div > div > div > div {
                    margin: 0 1%;
                }
              }
                 @media screen and (max-width: 768px) {
                .tray-wrapper {
                    padding: 0;
                    .carousel-content > div > div > div > div > div > div:first-of-type {
                        height: 30vh;
                    }
                }

            @media screen and (max-width: 455px ) {
                .tray-wrapper {
                    padding: 0;
                }
                .traycomp {
                    margin: 0px;
                }
                .tray-wrapper .carousel-content > div > div > div > div > div > div:first-of-type {
                    height: 26vh;
            }
            .carousel-content > div > div > div {
                margin-bottom: 4rem;
                margin-top: 1rem;
            }
            }

            /* Portrait and Landscape */
            @media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
                .tray-wrapper .carousel-content > div > div > div > div > div > div:first-of-type {
                        height: 30vh;
                }
            }

            @media all and (orientation: landscape) and (min-width: 568px ) and (max-width: 1024px) {
                .tray-wrapper .carousel-content > div > div > div > div > div > div:first-of-type {
                        height: 25vh !important;
                }
            }
                `}
      />
    </>
  );
};
