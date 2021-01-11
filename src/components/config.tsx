import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#40E0D0",
      dark: "#146E81",
      light: "#D9FDEC",
    },
    secondary: {
      main: "#FF5BC4",
      dark: "#76117A",
      light: "#FFDEE6",
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
      default: "#fff",
    },
  },
});

export default theme;
