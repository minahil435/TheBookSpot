import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import CartItem from "../components/cartItems/CartItem";
import Layout from "../components/layout/Layout";
import Spinner from "../components/spinner/Spinner";
import { useShoppingCart } from "../context/shoppingCartContext";

function CartPage() {
  const { shoppingCart, addItemToCart } = useShoppingCart();
  const [price, setPrice] = useState(0);

  function addsAllBookCosts() {
    let total = 0;
    for (const book of shoppingCart) {
      total += (book.quantity * book.price) / 100;
    }
    setPrice(total);
  }

  useEffect(() => {
    addsAllBookCosts();
  }, [shoppingCart]);

  return (
    <div id="homeMainDiv">
      <div id="homeMainDivWidth">
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
              <Typography sx={{ fontWeight: "bold" }}>{price}</Typography>
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
      </div>
    </div>
  );
}

export default CartPage;
