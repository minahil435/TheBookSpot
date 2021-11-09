import { Box, fontSize } from "@mui/system";
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shoppingCartContext";


function Header() {
  const { shoppingCart } = useShoppingCart();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "black" }} position="static">
        <Toolbar>
          <Link to="/">
            <img
              src="../../../images/logo.png"
              alt="The Book Spot Logo"
              style={{ width: "100px" }}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "'Dancing Script', cursive;",
              fontSize: "64px",
              textAlign: "center",
            }}
          >
            The Book Spot
          </Typography>
         
          <Link to="/cart">
            <IconButton
                style={{ background: "white", position: 'relative' }}
              sx={{ width: "50px", height: "50px" }}>
              <ShoppingBagOutlinedIcon sx={{ color: (shoppingCart.length === 0) ? "black" : "red" }} fontSize="large" htmlColor="black"/>
              <div style={{
                position: 'absolute',
                top: '19px',
                fontSize: "large",
                fontWeight:"bold"   
              }}>{shoppingCart.length}</div>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
