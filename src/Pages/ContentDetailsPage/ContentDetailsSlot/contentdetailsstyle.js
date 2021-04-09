import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const ContentDetailsPageLayout = () => {
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
            .contentpage-background {
              background-color: ${bgcolor};
              height: 164vh !important;
              .headerShadow {
                background: transparent
                  linear-gradient(180deg, #00000096 0%, #0000001a 100%) 0% 0%
                  no-repeat padding-box;
                position: relative;
              }
              .upgrade {
                background: #e1540f !important;
              }
            }
          }
        `}
      />
    </>
  );
};

export default ContentDetailsPageLayout;
