import React from "react";
import { Global, css } from "@emotion/react";

export const SignInGlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
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
          .SignIn-background .basicLayout {
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
          .authuser-btn-style {
            margin: 0;
          }

          @media screen and (max-width: 480px) {
            .footer .footer-cols {
              grid-template-columns: repeat(1, 1fr);
            }

            .header-logo {
              width: 44% !important;
              margin: 8%;
            }
          }
          @media screen and (max-width: 768px) {
            .header-logo {
              width: 44% !important;
            }
          }
        `}
      />
    </>
  );
};
