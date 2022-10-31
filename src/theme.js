import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    maroon: "#FE414D",
    lightgrey: "#eee",
    gainsboro: "#ddd",
    dimgrey: "#666",
    grey: "#777",
    green: "#198754",
  },
  fonts: [`"Hind", sans-serif`],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  textAligns: {
    left: "left",
    right: "right",
    center: "center",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
