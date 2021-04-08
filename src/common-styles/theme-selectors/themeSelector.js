import React from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";

export function ThemeHeader() {
  const theme = useSelector((state) => pathOr(null, ["ThemeState"])(state));
  console.log(theme);
}

const themeLayout = () => {};

const themeIcons = () => {};
