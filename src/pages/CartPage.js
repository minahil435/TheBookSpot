import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem from "../components/cartItems/CartItem";
import Layout from "../components/layout/Layout";
import Spinner from "../components/spinner/Spinner";
import { useShoppingCart } from "../context/shoppingCartContext";

function CartPage() {
  const { shoppingCart, addItemToCart } = useShoppingCart();

  return (
    <div id="homeMainDiv">
      <div id="homeMainDivWidth">
        <Layout>
          {shoppingCart.length > 0 ? (
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mt: "18px",
                }}
              >
                Total Cost:
              </Typography>
            </Box>
          ) : (
            <h1 style={{ display: "none" }}>invisible</h1>
          )}
          <div className="bookGrid">
            {shoppingCart.length > 0 ? (
              shoppingCart.map((item) => (
                <Box key={item.id}>
                  <CartItem item={item} />
                </Box>
              ))
            ) : (
              <h4 style={{ textAlign: "center", width: "100%", marginTop: 24 }}>
                You don't have any books in your cart yet!
              </h4>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default CartPage;
