import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Global, css } from "@emotion/react";

export const ListMovieGlobalStyle = () => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  return (
    <>
      <Global
        styles={css`
          .filter-btn .img-thumbnail {
            border: none;
            background: transparent 0% 0% no-repeat padding-box;
            borderradius: 5px;
          }
          @media all and (orientation: landscape) and (min-width: 568px) and (max-width: 1024px) {
            .${themeName}-my-list-Page
              .movie-list-container
              .movie-list-grid
              li {
              width: 32% !important;
            }
          }
        `}
      />
    </>
  );
};
