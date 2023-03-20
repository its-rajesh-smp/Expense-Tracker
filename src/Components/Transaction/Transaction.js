import React, { useState } from "react";
import "./Transaction.css";
import InputField from "../InputField/Input";
import { ItemCover } from "../Item/Item";
import AddNewBtn from "../AddNewButton/AddNewButton";
import Item from "../Item/Item";
import { HeadingDiv, TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import DATA from "../../date";

function Transaction() {
  // useState For AddExpenseCard-Opener
  const [AddExpenseCard_BOOL, setAddExpenseCard_BOOL] = useState(false);

  function addExpenseCardHandeler() {
    // handelerFunctionForOpen AddExpenseCard
    setAddExpenseCard_BOOL(true);
  }

  // useState For updatingDataArray
  let [arrayOfData, setArrayOfData] = useState(DATA);

  return (
    <>
      <AddNewBtn
        onClick={
          addExpenseCardHandeler /*Open AddExpenseCard on click inside tag */
        }
      />
      {AddExpenseCard_BOOL && (
        <AddExpenseCard
          onSetArrayData={setArrayOfData /**For UpdatingArrayValue */}
          onClick={
            setAddExpenseCard_BOOL /* Close AddExpenseCard on click inside tag */
          }
        />
      )}

      <HeadingDiv name="Transections" />

      <InputField />

      <TotalAmount amount="2000" />

      <ItemCover date="2022-03-0">
        {arrayOfData.map((value, i) => {
          return (
            <Item
              name={value.name}
              price={value.price}
              date={value.date}
              time={value.time}
              key={i}
            />
          );
        })}
      </ItemCover>
    </>
  );
}

export default Transaction;
