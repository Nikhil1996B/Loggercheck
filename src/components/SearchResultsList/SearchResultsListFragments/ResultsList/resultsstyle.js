import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

export const ResultsListGolbalStyle = () => {
  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  return (
    <Global
      styles={css`
        .${themeName}-Search-Results-Page
          .movie-list-container
          .navbar-input
          ::-webkit-input-placeholder {
          font-size: 25px !important;
          color: #949cb0;
        }
        .${themeName}-Search-Results-Page
          .movie-list-container
          .navbar-input
          img {
          width: 38px !important;
          left: 92% !important;
        }

        @media screen and (max-width: 456px) {
          .${themeName}-Search-Results-Page
            .movie-list-container
            .navbar-input
            ::-webkit-input-placeholder {
            font-size: 8px !important;
            padding-left: 0 !important;
          }
          .${themeName}-Search-Results-Page .configfilter {
            font-size: 14px !important;
          }
          . .${themeName}-Search-Results-Page .filter-btn {
          }
          .${themeName}-Search-Results-Page .filterbtnwrapper {
            margin-left: 6% !important;
            width: 20% !important;
          }
          .${themeName}-Search-Results-Page .filter-btn img {
            height: 20px !important;
          }
          .${themeName}-Search-Results-Page
            .movie-list-container
            .navbar-input
            img {
            width: 10% !important;
            left: 74% !important;
          }
          .avatar {
            height: 25px !important;
            width: 24px !important;
          }
          .${themeName}-Search-Results-Page .moviescardtitle > div {
            margin: 0 !important;
            padding: 0 !important 4px;
            font-size: 18px !important;
          }
          .${themeName}-Search-Results-Page .moviescardtitle {
            padding: 0 !important;
            // margin: -10px 0 0 0 !important;
          }
          .${themeName}-Search-Results-Page
            .movie-list-container
            > div
            > div
            > div
            > div {
            // width: 100% !important;
          }
          .${themeName}-Search-Results-Page
            .movie-list-container
            .navbar-input
            input {
            padding: 0 !important;
          }
          .${themeName}-Search-Results-Page .moviescardtitle {
            margin: 0 !important;
            padding: 0 !important;
          }
        }

        @media screen and (width: 768px) {
          .${themeName}-Search-Results-Page
            .movie-list-container
            .navbar-input
            ::-webkit-input-placeholder {
            font-size: 14px !important;
            padding-left: 0 !important;
          }
          .${themeName}-Search-Results-Page
            .movie-list-container
            .navbar-input
            img {
            width: 38px !important;
            left: 76% !important;
          }
          .${themeName}-Search-Results-Page .configfilter {
            font-size: 24px !important;
          }
          .${themeName}-Search-Results-Page .filter-btn {
            width: 56% !important;
          }
          .${themeName}-Search-Results-Page .filter-btn img {
            height: 45px !important;
          }
          .${themeName}-Search-Results-Page .moviescardtitle {
            padding: 0 !important;
            margin: -20px 0 0 0 !important;
          }
          .${themeName}-Search-Results-Page .moviescardtitle > div {
            margin: 0 !important;
            padding: 0 !important 4px;
            font-size: 18px;
          }
        }
      `}
    />
  );
};
