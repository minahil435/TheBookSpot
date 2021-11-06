import { Box } from "@mui/system";
import React from "react";
import AppBar from '@mui/material/AppBar';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'black' , width: '94.5%' } }position="static">
          <Toolbar>
        <img
          src="../../../images/logo.png"
          alt="The Book Spot Logo"
          style={{ width: "100px" }}
        />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Book Spot
          </Typography>
          <IconButton style={{ background: 'white'}} sx={{ width: "50px", height: "50px" }}>
          <ShoppingBagOutlinedIcon />
          </IconButton>
        </Toolbar>
        
  
    </AppBar>
      </Box>
  
  );
}

export default Header;
