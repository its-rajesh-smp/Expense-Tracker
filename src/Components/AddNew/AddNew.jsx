import React from "react";
import "./AddNew.css";

function AddNew() {
  return <div onClick={addClickHandaler} className="AddNew-div">+</div>;
}



function addClickHandaler(){
    alert("Btn Clicked")
}



export default AddNew;
