import React from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";

export const NavBarStyle = (bgColor = "") => {
  return {
    background: `${bgColor ? bgColor : "black"}`,
  };
};

export const HeaderGlobalStyle = ({ breakpoint }) => {
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("", ["themeName"])(themes);
  return (
    <>
      <Global
        styles={css`
          .headercomp {
            padding: 1rem 1rem 0.5rem 1rem;
          }

          .figure-wrapper {
            margin-bottom: 0;
          }

          .logo-image {
            width: 88%;
          }

          .display-header-category {
            min-width: 80%;
          }

          .header-categories {
            color: #ffffff !important;
            font-size: 1rem;
            margin: 0 1rem;
            font-family: Inter;
          }

          .category-wrapper {
            padding-left: 10%;
          }

          .authuser-btn-style {
            background: #e1540f;
            color: #ffffff;
            border: none;
            text-transform: uppercase;
            font-size: 11px;
            padding: 0.4rem 1.2rem;
            margin-right: 2rem;
          }

          .avatar-icon {
            height: 44px;
            width: 44px;
            margin-right: 1rem;
          }

          // mobile devices
          @media screen and (max-width: 456px) {
            .searchform-container {
              display: contents;
            }

            .avatar {
              height: 25px !important;
              width: 24px !important;
            }
            .avatar-icon {
              height: 30px;
              width: 30px;
            }

            .header-categories {
              font-size: 0.8rem;
              margin: 0 0.5rem;
            }

            .logo-image {
              width: 60%;
            }

            .category-wrapper {
              display: none;
            }

            .headercomp .navbar-brand {
              width: 44%;
            }

            .display-header-category {
              min-width: 40%;
            }

            .authuser-btn-style {
              font-size: 10px;
              margin-right: 0;
              width: 25%;
              padding: 0.25rem;
            }

            .${themeName}-Home-Page .tray-with-filter {
              // padding: 0 0.15rem;
              margin-bottom: 3%;
            }

            .${themeName}-billing-details-Page .headercomp {
              padding: 2% 6%;
            }
          }

          // remove this once the themes background is fetched from the configuration
          .${themeName}-account-details-Page .authuser-btn-style,
          .${themeName}-billing-details-Page .authuser-btn-style,
          .${themeName}-recent-streaming-details-Page .authuser-btn-style,
          .membership-background .authuser-btn-style,
          .changeplan-background .authuser-btn-style,
          .payment-option-background .authuser-btn-style {
            background: transparent;
            margin: 0;
            padding: 0;
          }

          @media screen and (width: 768px) {
            .avatar {
              height: 30px !important;
              width: 30px !important;
            }

            .header-categories {
              font-size: 0.8rem;
              margin: 0 0.5rem;
            }
            .display-header-category {
              min-width: 40%;
            }

            .header-categories {
              font-size: 0.8rem !important;
              margin: 0 !important;
            }

            .${themeName}-Home-Page .category-wrapper,
            .${themeName}-content-details-Page .category-wrapper,
            .${themeName}-Search-Results-Page .category-wrapper,
            .${themeName}-my-list-Page .category-wrapper {
              margin-left: 0 !important;
            }

            .${themeName}-Home-Page .jumbotroncarddetails {
              margin-top: 29% !important;
            }

            .${themeName}-Home-Page .jumbotroncarddetails .card-title {
              font-size: 27px !important;
            }

            .${themeName}-Home-Page .jumbotroncarddetails .addtolisttxt {
              font-size: 15px !important;
            }
          }

          @media screen and (max-width: 768px) {
            .category-wrapper {
              padding-left: 0;
            }
            .headerv1-logo {
              width: 30%;
              margin-top: 1rem;
            }
          }

          @media screen and (min-width: 556px) and (max-width: 1260px) {
            .header-categories {
              font-size: 0.8rem;
            }
            .category-wrapper {
              padding-left: 2%;
            }
          }
        `}
      />
    </>
  );
};
