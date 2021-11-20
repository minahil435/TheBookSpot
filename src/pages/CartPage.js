import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItems/CartItem";
import Layout from "../components/layout/Layout";
import { useReduxShoppingCart } from "../redux/shoppingCartState";

function CartPage() {
  const { total } = useReduxShoppingCart();

  const shoppingCart = useSelector((state) => state.shoppingCart);

  return (
    <Layout>
      {shoppingCart.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "18px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Total Cost: $</Typography>
          <Typography sx={{ fontWeight: "bold" }}>{total}</Typography>
        </Box>
      ) : (
        <h1 style={{ display: "none" }}>this will never be seen</h1>
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
  );
}

export default CartPage;
