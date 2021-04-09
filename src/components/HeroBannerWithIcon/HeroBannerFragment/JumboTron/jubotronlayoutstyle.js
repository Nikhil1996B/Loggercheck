import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const JumbotronLayout = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          .jumbotroncarddetails,
          .jumbtronsubscribe {
            margin-top: 19%;
            margin-left: 10%;
            background: transparent;
            width: 30rem;
          }

          .jumbotron-title {
            text-transform: uppercase;
            margin: 18px 0;
            font-weight: bold;
            color: #ffffff;
            font-size: 50px;
          }

          .jumbotronwrapper {
            min-height: 40.125rem;
            background-repeat: no-repeat, repeat;
            background-color: ${bgcolor};
            background-position: center;
            background-size: cover;
          }

          .subscription {
            margin-bottom: 2rem;
            font-weight: 800;
            color: #ffffff;
            text-transform: capitalize;
            font-size: 26px;
          }

          .addtolisttxt {
            margin-left: 1rem;
            text-transform: uppercase;
            font-family: Inter;
            color: #ffffff;
            font-size: 18px;
          }

          .addtolistimg {
            height: 17px;
          }

          .addToList {
            padding: 1rem 3rem;
            border-radius: 10px;
            border: 1px solid #ffffff;
          }
          .btnTxt {
            text-transform: uppercase;
            font-family: Inter;
            font-weight: bold;
            color: #000000;
            font-size: 18px;
          }

          .imageCont {
            width: 24px;
            height: 24px;
            padding-right: 6px;
          }

          .play {
            background-color: #ffffff;
            margin-right: 1rem;
            border: none;
            border-radius: 10px;
            padding: 1rem 3rem;
          }

          .jumbotron-card-wrapper {
            margin-top: 2rem;
          }

          .subtitles {
            color: #ffffff;
            font-size: 14px;
            margin: 18px 0;
            margin-bottom: 4rem;
            text-transform: uppercase;
            font-weight: 300;
          }

          // mobile devices
          @media screen and (max-width: 455px) {
            .jumbotroncarddetails,
            .jumbtronsubscribe {
              width: 21rem;
            }

            .jumbotron-title {
              font-size: 28px;
            }

            .jumbtronsubscribe {
              margin-top: 37% !important;
            }

            .jumbotronwrapper {
              min-height: 20.125rem;
              margin-bottom: 0;
            }

            .subscription {
              font-size: 16px;
              margin-bottom: 1.25rem !important;
            }

            .play {
              padding: 0.25rem 2rem !important;
              border-radius: 2px;
              padding: 0.5rem 3rem;
            }

            .addToList {
              padding: 0.5rem 2rem !important;
              border-radius: 4px;
            }

            .btnTxt {
              font-size: 10px !important;
            }

            .imageCont {
              width: 20px !important;
              height: 14px !important;
            }

            .addtolisttxt {
              font-size: 10px !important;
            }

            .addtolistimg {
              height: 10px !important;
            }
          }

          // landscape mode
          @media all and (orientation: landscape) and (min-width: 568px) and (max-width: 1024px) {
            .jumbtronsubscribe {
              margin-top: 16% !important;
            }
            .jumbotronwrapper {
              min-height: 30rem !important;
              max-height: 30rem;
            }
            .subscription {
              font-size: 15px !important;
              margin-bottom: 0.25rem !important;
            }
            .play {
              padding: 0.25rem 2rem !important;
            }
            .addToList {
              padding: 0.25rem 2rem !important;
            }
            .btnTxt {
              font-size: 10px !important;
            }
            .imageCont {
              width: 20px !important;
              height: 14px !important;
            }
            .addtolisttxt {
              font-size: 10px !important;
            }
            .addtolistimg {
              height: 14px !important;
            }

            @media screen and (max-width: 768px) {
              .makeStyles-root-9 {
                width: 92%;
              }
              .makeStyles-root-1 {
                width: 90% !important;
              }
            }

            @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
              .home-background {
                video {
                  bottom: 42% !important;
                }
                .img-wrapper {
                  min-height: 50vh;
                }
                .info-section {
                  bottom: 28%;
                }
              }
            }

            @media screen and (max-width: 455px) {
              .subscriptionbtn {
                padding: 0.5rem !important;
              }
            }

            // @font-face {
            //   font-family: "InterLight";
            //   src: local("InterLight"),
            //     url("../../assets/fonts/InterLight.ttf") format("woff");
            //   font-weight: normal;
            // }
          }
        `}
      />
    </>
  );
};

export default JumbotronLayout;
