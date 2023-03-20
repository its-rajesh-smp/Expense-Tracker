import React from "react";
import "./AddExpenseCard.css";
import { BlurCard } from "../Cards/Card";
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";

function AddExpenseCard(props) {
  function setAddExpenseCard_BOOL() {
    // Close AddExpenseCard
    props.onClick(false);
  }

    // Generating New Expense Data   
  let newExpenseData = {
    name: "",
    date: "",
    time: "",
    price: "",
  };

  function AddData() {
    // Form new Array and passing to the Transaction onSetArrayData hook
    console.log(newExpenseData);
    props.onClick(false);  // Close AddExpenseCard
    props.onSetArrayData((prev) => {
      return [newExpenseData , ...prev];
    });
  }

  return (
    <BlurCard>
      <div className="Add_Card">
        <TitleWithIcon
          title="Add"
          icon={
            <i
              onClick={setAddExpenseCard_BOOL}
              className="bx bx-window-close"
            ></i>
          }
        />
        <InputFieldAddEdit getData={newExpenseData} />
        <button onClick={AddData} className="Add_Card-button">
          <i className="bx bxs-message-square-add"></i>
        </button>
      </div>
    </BlurCard>
  );
}

export default AddExpenseCard;
