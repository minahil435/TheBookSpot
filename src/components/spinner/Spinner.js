import React from "react";
import "./spinner.css";

function Spinner() {
  return (
    <>
      <h4 style={{ textAlign: "center", width: "100%", color: "blue" }}>
        Loading your favorite reads...
      </h4>
      <div class="loader"></div>
    </>
  );
}

export default Spinner;
