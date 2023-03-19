import React, { useState } from "react";
import "./AddNew.css";
import {AddCard} from "../AddEditCard/AddEditCard";

function AddNewBtn() {

  const[setCard,setFunc]=useState(false)

  function addClickHandaler(){
    setCard===false ? setFunc(true) : setFunc(true)
  }

  return(
    <>
      {setCard && <AddCard />}
      <div onClick={addClickHandaler} className="AddNew-div">+</div>;
    </>
    ) 
    
}







export default AddNewBtn;
