import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router/RouteNames";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 2 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-start",
            gap: "48px",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(RouteNames.ROOT);
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            noWrap
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(RouteNames.ABOUT_ME);
            }}
          >
            About Me
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
