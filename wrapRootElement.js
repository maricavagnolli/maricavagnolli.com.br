import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import theme from "./src/styles/theme";
import GlobalStyles from "./src/styles/global";

export const wrapRootElement = ({ element }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </StyledThemeProvider>
  );
};
