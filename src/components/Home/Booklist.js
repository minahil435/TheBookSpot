import React from "react";
import "./BookList.css";
// import { useShoppingCart } from "../../context/shoppingCartContext";
import { useReduxShoppingCart } from "../../redux/shoppingCartState";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Booklist(props) {
  const { addItemToCart } = useReduxShoppingCart();
  const { item } = props;

  return (
    <div id="mainDiv">
      <div id="imagediv">
        <img
          className="BooklistImage"
          src={props.item.image}
          alt={props.item.title}
        />
      </div>
      <div id="authorName">{item.author}</div>
      <div id="bookName">{item.title}</div>
      <div id="addButton">
        <div>
          <button id="addButtonstyle" onClick={() => addItemToCart(item)}>
            <Box sx={{ display: "flex" }}>
              <Typography>Add to bag - $</Typography>
              <Typography>{item.price / 100}</Typography>
            </Box>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booklist;
