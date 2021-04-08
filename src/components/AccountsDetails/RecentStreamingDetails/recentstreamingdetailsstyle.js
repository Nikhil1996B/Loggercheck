import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
export const recentstreamingstyle = {
  container: () => ({
    maxWidth: "100%",
    border: "none",
    margin: "0",
    padding: "0 1rem",
  }),
  title: () => ({
    fontSize: "25px",
    color: "#585858",
    fontWeight: "bold",
  }),
  subtitle: () => ({
    fontSize: "16px",
    color: "#585858",
    fontWeight: "400",
    maxWidth: "90%",
    borderBottom: "0.5px solid #585858",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  }),
  devicetitle: () => ({
    fontSize: "18px",
    color: "#585858",
    fontWeight: "bold",
  }),
  devicesubtitle: () => ({
    fontSize: "16px",
    padding: "0.25rem 0",
    margin: "0",
    color: "#585858",
    fontWeight: "400",
  }),
  button: () => ({
    maxWidth: "10%",
    padding: "0.5rem",
    marginLeft: "1rem",
    background: "#E1540F",
    color: "#FFFFFF",
    border: "none",
    textTransform: "uppercase",
    borderRadius: "1px",
  }),
};

export const RecentStreamingGlobalStyle = () => {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(theme);
  return (
    <>
      <Global
        styles={css`
          @media screen and (max-width: 456px) {
            .${themeName}-recent-streaming-details-Page .navbar-brand img {
              width: 100% !important;
            }
            .${themeName}-recent-streaming-details-Page .headercomp {
              padding: 2% 6% !important;
            }
          }
        `}
      />
    </>
  );
};
