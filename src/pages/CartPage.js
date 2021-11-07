import { Box } from "@mui/system";
import React from "react";
import CartItem from "../components/cartItems/CartItem";
import Layout from "../components/layout/Layout";
import { useShoppingCart } from "../context/shoppingCartContext";

function CartPage() {
  const { shoppingCart, addItemToCart } = useShoppingCart();

  return (
    <div id="homeMainDiv">
      <div id="homeMainDivWidth">
        <Layout>
          <Box style={{ display: "flex", flexWrap: "wrap" }}>
            {shoppingCart.map((item) => (
              <Box key={item.id}>
                <CartItem item={item} />
              </Box>
            ))}
          </Box>
        </Layout>
      </div>
    </div>
  );
}

export default CartPage;
