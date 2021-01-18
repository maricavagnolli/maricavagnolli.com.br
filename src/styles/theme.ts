import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#146e81",
      dark: "#004354",
      light: "#509cb0",
    },
    success: {
      main: "#3ABC4E",
      dark: "#0B5A34",
      light: "#E0FBD8",
    },
    info: {
      main: "#1E88E5",
    },
    warning: {
      main: "#FFD400",
    },
    background: {
      default: "#FAFAFA",
    },
  },
});

export default theme;
