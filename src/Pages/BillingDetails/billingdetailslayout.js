import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

const BillingdetailPageLayout = () => {
  // const themeObj = useSelector((state) => pathOr(null, ['ThemeState', 'layout'])(state));
  const themes = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  return (
    <>
      <Global
        styles={css`
          body,
          html {
            height: initial !important;
          }
          body {
            .billingdetailspage-background {
              min-height: 60vh;
              background: white;
              width: 100%;
            }
          }
          .${themeName}-billing-details-Page {
            .headercomp {
              background: transparent
                linear-gradient(180deg, #e1540f 0%, #fbb08b 100%) 0% 0%
                no-repeat padding-box !important;
            }
            .upgrade {
              background: #e1540f !important;
            }
          }
          .footer ul li p {
            color: #212121;
            font-weight: bold;
          }
          .footer,
          .footer a {
            color: black;
          }
          .callus {
            color: #212121;
            font-weight: bold;
          }
          label {
            display: flex;
          }
          .myaccountpage-background .basicLayout {
            min-height: 60vh;
          }
          .footer {
            background: #f8f8f8;
            border: none;
          }
          .footer .footer-cols {
            grid-template-columns: repeat(3, 1fr);
          }
          .header-logo {
            margin: 1%;
          }

          @media screen and (max-width: 480px) {
            .footer .footer-cols {
              grid-template-columns: repeat(2, 1fr);
            }
            .header-logo {
              width: 44% !important;
              margin: 8%;
            }
          }
          @media screen and (max-width: 768px) {
            .header-logo {
              width: 14% !important;
            }
          }
        `}
      />
    </>
  );
};

export default BillingdetailPageLayout;
