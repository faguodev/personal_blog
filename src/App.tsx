import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppContainerSite } from "./components/sites/AppContainerSite";
import { theme } from "./components/util/Theme";

const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainerSite />
      </ThemeProvider>
    </>
  );
};

export default App;
