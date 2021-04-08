import React from "react";
// import { pathOr } from 'ramda';
import SliderSection from "./SliderSection/slider-section";
import { TrayComponentGlobalStyle } from "./traycomponentstyle";

export default function TrayWithTitle({ breakpoint, title = "", traycontent }) {
  // const xl = pathOr('', ['lg'])(breakpoint);
  return (
    <>
      <TrayComponentGlobalStyle />
      <div className={`tray-wrapper ${"traycomp"}`}>
        <SliderSection
          traycontent={traycontent}
          breakpoint={breakpoint}
          title={title}
        />
      </div>
    </>
  );
}
