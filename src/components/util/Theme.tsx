import { createTheme } from "@mui/material/styles";

export const customColors = {
  background: "#282A36",
  currentLine: "#44475A",
  foreground: "#F8F8F2",
  comment: "#6272A4",
  cyan: "#8BE9FD",
  green: "#50FA7B",
  orange: "#FFB86C",
  pink: "#FF79C6",
  purple: "#BD93F9",
  red: "#FF5555",
  yellow: "#F1FA8C",
};

export const theme = createTheme({
  palette: {
    background: {
      default: customColors.background,
    },
    primary: {
      main: customColors.background,
    },
    text: {
      primary: customColors.foreground,
    },
    warning: {
      main: customColors.red,
    },
    success: {
      main: customColors.green,
    },
  },
});
