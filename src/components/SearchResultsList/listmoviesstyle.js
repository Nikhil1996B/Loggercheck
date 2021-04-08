import React from "react";
import { Global, css } from "@emotion/react";

export const ListMovieGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .filter-btn .img-thumbnail {
            border: none;
            background: transparent 0% 0% no-repeat padding-box;
            borderradius: 5px;
          }
        `}
      />
    </>
  );
};
