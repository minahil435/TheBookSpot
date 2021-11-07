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
          <div className="bookGrid">
            {shoppingCart.length > 0 ? (
              shoppingCart.map((item) => (
                <Box key={item.id}>
                  <CartItem item={item} />
                </Box>
              ))
            ) : (
              <h4 style={{ textAlign: "center", width: "100%", marginTop: 48 }}>
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
