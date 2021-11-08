import { DeleteForeverOutlined } from "@mui/icons-material";
import { Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { useShoppingCart } from "../../context/shoppingCartContext";


function CartItem({ item }) {
  const { deleteItemFromCart } = useShoppingCart();
  return (
    <Card>
      <Box display="flex" flexDirection="column">
        <Box>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "350px", objectFit: "cover" }}
            image={item.image}
            alt={item.title}
          />
        </Box>
        <Box
          px={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexGrow={1}
        >
          <Box>
            <Typography fontWeight="bold" textAlign="center">
              {item.title}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography fontWeight="bold" color="primary">
              Book Cost: $
            </Typography>
            <Typography fontWeight="bold" color="primary">
              {item.price / 100}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography fontWeight="bold" color="primary">
              Quantity: x
            </Typography>
            <Typography fontWeight="bold" color="primary">
              {item.quantity}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton aria-label="delete" onClick={() => deleteItemFromCart({item})}>
              <Typography fontWeight="bold" color="delete">
                Delete Item
              </Typography>
              <DeleteForeverOutlined fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
