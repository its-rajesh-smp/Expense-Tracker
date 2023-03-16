import React from "react";
import "./MainContainer.css"
import Transaction from "../Transaction/Transaction";

function MainContainer(){

    return(
        <div className="main_container">
            <h1>Transaction</h1>
            <Transaction></Transaction>
        </div>
    )
}


export default MainContainer;