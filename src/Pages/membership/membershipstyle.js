import React from "react";
import { Global, css } from "@emotion/react";

export const MembershipGlobalStyle = () => {
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
          .membership-background {
            min-height: 80vh !important;
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
              grid-template-columns: repeat(1, 1fr);
            }
            .header-logo {
              width: 24% !important;
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
