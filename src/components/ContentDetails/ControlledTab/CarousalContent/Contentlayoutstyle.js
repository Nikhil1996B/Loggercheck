import React from "react";
import { Global, css } from "@emotion/react";

export const TrayFilterGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          .tray-with-filter {
            padding: 0 1rem;
          }
          .tray-with-filter
            .carousel-content
            > div
            > div
            > div
            > div
            > div:first-of-type {
            height: 25vh;
          }
          .tray-with-filter
            .carousel-content
            > div
            > div
            > div
            > div
            > div:first-of-type {
            height: 39vh;
          }
        `}
      />
    </>
  );
};
