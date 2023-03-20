import React from "react";
import "./AddNewButton.css";

function AddNewBtn(props) {
  return (
      <div onClick={props.onClick}  className="AddNew-div">+</div>
  );
}

export default AddNewBtn;
