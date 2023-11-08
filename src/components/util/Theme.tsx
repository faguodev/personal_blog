import { createTheme } from "@mui/material/styles";

export const customColors = {
  primaryColor: "#42427D",
  primaryColorDark: "#2C2C53",
  primaryColorLight: "#8a8ac1",
  sky: "#C7F2FF",
  rose: "#FFE5EE",
  green: "#6b8f71",
  tomato: "#fe654f",
  white: "#FFFFFF",
  body1: "#1D1E18",
};

export const theme = createTheme({
  palette: {
    background: {
      default: customColors.white,
    },
    primary: {
      main: customColors.primaryColor,
      dark: customColors.primaryColorDark,
      light: customColors.primaryColorLight,
    },
    text: {
      primary: customColors.primaryColor,
    },
    warning: {
      main: customColors.tomato,
    },
    success: {
      main: customColors.green,
    },
  },
});
