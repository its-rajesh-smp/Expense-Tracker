import React from "react";
import "./SelectDate.css"

function SelectDate(parm){
    return (
        <div className="SelectDate-div">
            <p style={{marginRight:"5px"}}>{parm.for} </p>
            <input type="date"/>
        </div>
    )
}


export {SelectDate};