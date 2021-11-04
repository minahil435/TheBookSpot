import React from "react";
import "./BookList.css"

function Booklist(props) {

    return (

        <div id="mainDiv">
            <div id="imagediv">
                <img className="BooklistImage"
                    src={props.item.image}
                    alt={props.item.title}
                />
            </div>
            <div id="authorName">
                {props.item.author}
            </div>
            <div id="bookName">
                {props.item.title}
            </div>

            <div id="addButton">
                <div><button id="addButtonstyle">Add to bag -${props.item.price} </button></div>
            </div>
        </div>

    )
}

export default Booklist;