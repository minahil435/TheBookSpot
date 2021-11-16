import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          background: "#f7f5ec",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "69%" }}>
          <Header />
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
