import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box>This is the content of the page.</Box>;
    </>
  );
}

export default Layout;
