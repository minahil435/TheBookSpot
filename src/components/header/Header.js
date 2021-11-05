import { Box } from "@mui/system";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <>
      <Box style={{ display: "flex" }}>
        <img
          src="../../../images/logo.png"
          alt="The Book Spot Logo"
          style={{ width: "100px" }}
        />
        <IconButton sx={{ width: "100%", height: "100%" }}>
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default Header;
