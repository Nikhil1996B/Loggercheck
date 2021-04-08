import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const moviecard = {
  background: (imageUrl, size, movie, sm) => ({
    width: `$sm ? : 'auto'`,
    background: `linear-gradient(360deg, #000000 0%, #00000024 100%),
         url(${imageUrl}${size}${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    border: "0",
  }),
  container: (sm) => ({
    padding: `${sm ? "0" : "0"}`,
  }),
  beneathCardText: () => ({
    background: "#131722",
    border: "0",
    fontSize: "14px",
    color: "white",
  }),
};

export const CarousalStyle = () => {
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          html,
          .app {
            line-height: 1.5;
            background: #141414;
            color: #fff;
          }

          a {
            text-decoration: none;
            color: #fff;
          }

          .app {
            margin-top: 7%;
          }

          .movie-card {
            background-position: 50% 50%;
            background: transparent
              linear-gradient(
                180deg,
                var(--tentkotta-color-000000) 0%,
                #00000024 100%
              )
              0% 0% no-repeat padding-box;
            opacity: 1;
            margin: 1px;
            background-position: center center;
            background-size: cover;
            display: flex;
            flex: 1;
          }

          .displayhoverScreen {
            display: none;
            z-index: 7;
            opacity: 0;
          }

          .cardhover:hover .displayhoverScreen {
            top: -14px !important;
            transform: scale(1);
            position: absolute;
            display: flow-root;
            -webkit-animation: fadeIn 0.6s;
            animation: fadeIn 0.6s;
            z-index: 7;
            opacity: 1;
          }

          .carousel-content > div > div > div > div {
            margin: 0 1%;
          }

          .movie-card-container {
            margin-left: 2px;
            opacity: 1;
          }

          .movie-card-text {
            position: absolute;
            padding: 14px;
            font-weight: bold;
            text-shadow: 2px 2px #000;
            position: absolute;
            font-weight: bold;
            text-shadow: 2px 2px #000;
            bottom: 1px;
          }

          .movie-card-info {
            align-items: center;
          }

          .movie-card-info div {
            margin-right: 10px;
          }

          .play-icon {
            img {
              height: 76px;
              position: absolute;
              width: 72px;
              border-radius: 50%;
              opacity: 0;
              margin-top: 62px;
              margin-left: 73px;
            }
          }

          .movie-card:hover .play-icon img {
            opacity: 1;
          }

          .movie-card-title {
            font: var(--tentkotta-font-style-normal) normal
              var(--tentkotta-font-weight-600) var(--tentkotta-font-size-20);
            font-family: InterLight;
            letter-spacing: var(--tentkotta-character-spacing-0);
            color: var(--tentkotta-color-ffffff);
            letter-spacing: 0px;
          }

          .movie-card-year {
            font-size: 80%;
            color: #fff;
            font-weight: 300;
          }

          .movie-card-rating {
            font-size: 90%;
            background-color: #222;
            border: 1px solid #aaa;
            color: #fff;
            padding: 0 5px 0 5px;
          }

          .movie-card-description {
            font-size: 40%;
          }

          .movie-list-container {
            margin: 0px 20px 20px 20px;
          }

          .movie-list-container h1 {
            padding: 10px;
            font-size: 38px;
            // font: var(--tentkotta-font-family-inter);
            // letter-spacing: var(--tentkotta-character-spacing-0);
            color: var(--tentkotta-color-ffffff);
            margin: 0;
          }

          .movie-list-grid {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .movie-list-grid li {
            padding: 10px 15px;
            text-align: left;
            width: 30%;
          }

          .default-button.round-button {
            border-radius: 50%;
            padding: 5px 3px 5px 3px;
          }

          .default-button {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.75;
            background-color: #222;
            border: 1px solid #aaa;
            color: #fff;
            padding: 8px 25px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }

          .default-button:hover {
            background-color: #333;
          }

          .default-button:focus {
            outline: 0;
          }

          .play-button {
            opacity: 1;
            background-color: #ff0000;
            border: none;
            color: #fff;
            padding: 8px 25px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }

          .play-button:focus {
            outline: 0;
          }

          .carousel-container {
            padding: 0 6px 0 6px;
            margin: 0 5px 10px 0;
          }

          .icon-background,
          .euKzJn {
            // background: ${bgcolor};
            background: none;
          }

          .gwZiig {
            width: 100%;
            overflow-y: hidden;
          }

          .carousel-title {
            display: flex;
            // padding-bottom: 24px;
            padding-left: 4px;
            font: var(--tentkotta-font-style-normal) normal
              var(--tentkotta-font-weight-normal) 25px /
              var(--tentkotta-line-spacing-38)
              var(--tentkotta-font-family-inter);
            letter-spacing: var(--tentkotta-character-spacing-0);
            color: var(--tentkotta-color-ffffff);
            text-align: left;
            margin: 0;
          }

          /*.carousel-content div {
          overflow: hidden;
        }*/

          .horzontal-fill {
            height: 0;
            width: 64%;
          }

          .text-below {
            padding: 10px 0;
            .year {
              font: var(--tentkotta-font-style-normal) normal
                var(--tentkotta-font-weight-normal)
                var(--tentkotta-font-size-12) / var(--tentkotta-line-spacing-38)
                var(--tentkotta-font-family-inter);
              letter-spacing: var(--tentkotta-character-spacing-0);
              color: var(--tentkotta-color-949cb0);
            }
            .title {
              text-align: left;
              color: var(--tentkotta-color-ffffff);
            }
          }
          .hoverscreen-wrapper {
            background: ${bgcolor};
            border-radius: 1rem;
            box-shadow: "6px 3px 12px #362F2FD1";
            right: 1.5rem;
          }
          .hoverscreen-wrapper:first-of-type {
            right: 0.8rem;
          }

          .textbeneath {
            background: ${bgcolor};
            border: 0;
            font-size: 14px;
            color: white;
          }

          .huecolor:hover {
            filter: invert(0.5) sepia(4) saturate(5) hue-rotate(685deg);
            -webkit-filter: invert(0.5) sepia(4) saturate(5) hue-rotate(685deg);
          }

          @media screen and (max-width: 456px) {
            .carousel-title {
              font-size: 14px;
              text-align: center;
            }
            .icon-background,
            .euKzJn {
              display: none;
            }
            .displayhoverScreen {
              display: none;
            }
            .cardhover:hover .displayhoverScreen {
              display: none;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @-webkit-keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      />
    </>
  );
};
