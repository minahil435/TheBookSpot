import React from "react";
import "./BookList.css"

function Booklist(props) {

    return (

        <div id="mainDiv">
            <div id="imagediv">
                <img className="BooklistImage"
                    // src={props.item.image}
                    // alt={props.item.name}
                    src="images/bookcover.jpeg"
                    alt="hello"
                />
            </div>
            <div id="authorName">
                {/* props.item.author */}
                hello
            </div>
            <div id="bookName">
                {/* props.item.name */}
                hello
            </div>

            <div id="addButton">
                <div><button id="addButtonstyle">Add to bag -$28 </button></div>
            </div>
        </div>

    )
}

export default Booklist;