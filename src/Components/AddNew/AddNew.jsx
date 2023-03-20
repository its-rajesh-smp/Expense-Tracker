import React, { useState } from "react";
import "./AddNew.css";

import { AddCard } from "../AddEditCard/AddCard";

function AddNewBtn(props) {
  const [setCard, setFunc] = useState(props.effect);

  function addClickHandaler() {
    setCard === false ? setFunc(true) : setFunc(true);
  }

  return (
    <>
      {
        setCard && (
          <AddCard effect={setFunc} listHandeler={props.listHandeler} />
        ) /*Passing  A Function To AddCard with the useState function when we execute this function it effect in this component */
      }
      <div onClick={addClickHandaler} className="AddNew-div">
        +
      </div>
      ;
    </>
  );
}

export default AddNewBtn;
