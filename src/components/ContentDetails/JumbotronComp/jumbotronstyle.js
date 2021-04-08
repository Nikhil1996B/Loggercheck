import React from "react";
import { Global, css } from "@emotion/react";

export const JumbotronStyle = (url) => {
  const gradient = `linear-gradient(90deg, #131722 0%, #131722 17%, #131722 29%, #0A0A0A42 100%)`;
  return {
    backgroundImage: `${gradient},url(${url})`,
    borderRadius: "none",
    padding: "0",
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    border: "0",
  };
};

export const ContainerStyle = () => {
  return {
    border: "none",
  };
};

export const JumbotronWrapperStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .jumbotron-wrapper {
            min-height: 70vh;
          }

          .jumbotron-ctr-wrapper {
            margin: 0rem 1rem 1rem 1rem;
          }
          .jumbotron-play {
            background-color: #ffffff;
            margin-right: 1rem;
            border: none;
            padding: 0.5rem 2rem;
          }

          .imageCont-btn {
            height: 20px;
            width: 20px;
          }

          .jumbotron-card-title {
            font-size: 38px;
            color: white;
          }

          .jumbotron-movie-details {
            font-size: 18px;
          }

          .jumbotron-overview {
            margin: 0.5rem 0;
            letter-spacing: 0.49px;
            max-width: 65%;
            color: #949cb0;
          }

          .btnTxtjumbotron-play-btn-txt {
            text-transform: uppercase;
            font-size: 14px;
            color: #000000;
            font-weight: bold;
            padding-left: 6px;
          }

          .jumbotron-overview-card-title {
            color: #949cb0;
            font-size: 18px;
            padding-left: 0px;
            border-radius: none;
            border: none;
          }

          .jumbotron-overview-color {
            color: #feb896;
          }

          .jumbotron-play-btn-txt {
            color: #000000;
            font-size: 16px;
            text-transform: uppercase;
            font-style: Inter;
            padding-left: 4px;
            font-weight: 800;
          }

          .jumbotron-icon-wrapper {
            background: #6b7182;
            padding: 1rem;
            margin-right: 1rem;
          }

          @media screen and (max-width: 576px) {
            .jumbotron-wrapper {
              min-height: 56vh;
            }

            .jumbotron-play {
              padding: 0.15rem 1rem;
            }

            .imageCont-btn {
              height: 10px;
            }

            .jumbotron-card-title {
              font-size: 18px;
              color: #ffffff;
              border: none;
            }

            .jumbotron-movie-details {
              font-size: 12px;
            }

            .jumbotron-overview {
              font-size: 12px;
              max-width: 100%;
            }

            .jumbotron-overview-card-title {
              font-size: 12px;
            }

            .jumbotron-overview-color {
              font-size: 12px;
              padding-left: 0;
            }

            .jumbotron-play-btn-txt {
              font-size: 10px;
            }

            .jumbotron-icon-wrapper {
              padding: 0.5rem;
            }
          }
        `}
      />
    </>
  );
};
