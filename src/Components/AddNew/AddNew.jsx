import React, { useState } from "react";
import "./AddNew.css";
import AddEditCard from "../AddEditCard/AddEditCard";

function AddNewBtn() {

  const[setCard,setFunc]=useState(false)

  function addClickHandaler(){
    setCard==false ? setFunc(true) : setFunc(true)
  }

  return(
    <>
      {setCard && <AddEditCard />}
      <div onClick={addClickHandaler} className="AddNew-div">+</div>;
    </>
    ) 
    
}







export default AddNewBtn;
