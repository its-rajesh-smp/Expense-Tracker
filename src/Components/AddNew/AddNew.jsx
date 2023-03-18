import React from "react";
import "./AddNew.css";

function AddNewBtn() {
  return <div onClick={addClickHandaler} className="AddNew-div">+</div>;
}



function addClickHandaler(){
    alert("Btn Clicked")
}



export default AddNewBtn;
