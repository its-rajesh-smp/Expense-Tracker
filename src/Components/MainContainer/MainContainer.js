import React from "react";
import "./MainContainer.css"
import Transaction from "../Transaction/Transaction";
import Statistics from '../Statistics/Statistics'

function MainContainer(){

    return(
        <div className="main_container">
            <Transaction></Transaction> 
            {/* <Statistics></Statistics>  */}
        </div>
    )
}


export default MainContainer;