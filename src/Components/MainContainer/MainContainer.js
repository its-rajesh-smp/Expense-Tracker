import React from "react";
import "./MainContainer.css"
import Transaction from "../Transaction/Transaction";
import Statistics from '../Statistics/Statistics'

function MainContainer(){

    const input="Transaction"   //! 


    return(
        <div className="main_container">

            {
                input=="Transaction" ? <Transaction></Transaction> : <Statistics></Statistics> 
            }

        </div>
    )
}


export default MainContainer;