import React from "react";
import "./BookList.css";

import { useDispatch } from 'react-redux';

function Booklist(props) {
  
  const dispatch = useDispatch();
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
      <div id="authorName">{props.item.author}</div>
      <div id="bookName">{props.item.title}</div>
      <div id="addButton">
        <div>
          <button id="addButtonstyle" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
            {" "}
            Add to bag -${props.item.price / 100}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booklist;
