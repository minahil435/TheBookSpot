import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Box>
        <Header />
        <Box>{children}</Box>;
      </Box>
    </>
  );
}

export default Layout;
