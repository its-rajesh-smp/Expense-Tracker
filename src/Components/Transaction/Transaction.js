import React, { useState } from "react";
import "./Transaction.css";
import InputField from "../InputField/Input"
import Item,{ItemCover} from "../Item/Item";
import AddNewBtn from "../AddNew/AddNew";



function Transaction(){

    // For TopMost Date In Transaction Window
    let date=new Date()
    let getDate=date.toLocaleDateString()
    

    const [newList,setNewList]=useState([])



    return(
        <>

            <AddNewBtn effect={false} listHandeler={setNewList /*Passing This useState function to change the value in AddCard Component whenver someone click on Submit */ } />

            
            <div className="Heading-div">
                <h1>Transaction</h1>
                <p style={{marginLeft:"10px"}}>Today: </p>
                <p style={{marginLeft:"10px"}}>{getDate}</p>
            </div>


            <InputField></InputField>


            <div className="transaction_div" style={{fontWeight:600}} >
                <p>Total:</p>
                <p><span className="transaction_div--total" >2000</span> $</p>
            </div>


            <ItemCover date="2022-03-0" >
                {newList}
            </ItemCover>

        </>
    )
}






export default Transaction;