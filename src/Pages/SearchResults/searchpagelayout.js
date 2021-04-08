import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const SearchResultsPageLayout = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const tenantname = pathOr("default", ["themeName"])(themes);

  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
          body,
          html {
            height: initial !important;
            background: ${bgcolor} !important;
          }

          body {
            .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              .movie-card {
              width: 148px;
              height: 196px;
            }
            .${tenantname}-Search-Results-Page
              .movie-list-container
              .movie-list-grid
              li {
              width: 14%;
            }

            .search-background {
              background-color: ${bgcolor};
              min-height: 100vh !important;

              .movie-card-text {
                bottom: auto;
              }

              .headerShadow {
                position: relative;
                background: black;
              }

              .movie-list-grid .movie-card {
                width: 148px;
                height: 196px;
              }

              .movie-list-grid .upgrade {
                background: transparent
                  linear-gradient(180deg, #ffbb3b 0%, #ffa90a 100%) 0% 0%
                  no-repeat;
              }
            }
            @media screen and (max-width: 768px) {
              .search-background .movie-list-grid li {
                width: 50%;
              }
              .${tenantname}-Search-Results-Page
                .movie-list-container
                .navbar-input
                img {
                // width: 6% !important;
              }
              .${tenantname}-Search-Results-Page
                .movie-list-container
                .navbar-input {
                margin: 5px -40px 7px 24px;
              }
              .${tenantname}-Search-Results-Page
                .movie-list-container
                .navbar-input-container {
                height: 54px !important;
                margin-right: 0 !important;
                width: 87% !important;
                margin-bottom: 2rem;
              }
            }
            @media screen and (max-width: 480px) {
              .${tenantname}-Search-Results-Page
                .movie-list-container
                .movie-list-grid
                li {
                width: 49% !important;
              }
            }

            @media only screen and (device-width: 768px) {
              .${tenantname}-Search-Results-Page
                .movie-list-container
                .movie-list-grid
                li {
                width: 24%;
              }
            }
          }
        `}
      />
    </>
  );
};

export default SearchResultsPageLayout;
