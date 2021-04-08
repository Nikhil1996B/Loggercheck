import React from "react";
import { Global, css } from "@emotion/react";

export const activatedevicestyle = {
  container: (sm) => ({
    maxWidth: `${sm ? "100%" : "40%"}`,
    textAlign: "center",
    marginBottom: "3rem",
  }),
  title: (sm) => ({
    fontSize: "25px",
    color: "#585858",
    fontWeight: "bold",
    textAlign: `${sm ? "center" : "left"}`,
  }),
  subtitle: (sm) => ({
    fontSize: "15px",
    color: "#585858",
    textAlign: `${sm ? "center" : "left"}`,
  }),
  button: () => ({
    background: "#E1540F",
    color: "#FFFFFF",
    fontSize: "18px",
    padding: "1rem",
    width: "100%",
    margin: "1rem",
    border: "0",
    textTransform: "uppercase",
  }),
  formInput: () => ({
    width: `46px`,
    height: `52px`,
    marginRight: "0.5rem",
    border: `1px solid #707070`,
  }),
  inputField: () => ({
    border: "0",
    fontWeight: "bold",
  }),
};

export const Activateddevicelayout = () => {
  return (
    <>
      <Global
        styles={css`
                /* Chrome, Safari, Edge, Opera */
                input[type=number]::-webkit-inner-spin-button,
            input[type=number]::-webkit-outer-spin-button {
                    -webkit - appearance: none;
              margin: 0;
            }
            /* Firefox */
            input[type=number] {
                    -moz - appearance: textfield;
            }
            input:focus {
                outline: none !important;
            }
            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            /* Firefox */
                 input[type=number] {
                 -moz-appearance: textfield;
            }
            `}
      />
    </>
  );
};
