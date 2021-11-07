import React from "react";
import "./BookList.css";
import { useShoppingCart } from "../../context/shoppingCartContext";

function Booklist(props) {
  const { addItemToCart, shoppingCart } = useShoppingCart();
  const { item } = props;
  console.log(shoppingCart);

  return (
    <div id="mainDiv">
      <div id="imagediv">
        <img
          className="BooklistImage"
          src={props.item.image}
          alt={props.item.title}
        />
      </div>
      <div id="authorName">{props.item.author}</div>
      <div id="bookName">{props.item.title}</div>
      <div id="addButton">
        <div>
          <button id="addButtonstyle" onClick={() => addItemToCart({ item })}>
            {" "}
            Add to bag -${props.item.price / 100}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booklist;
